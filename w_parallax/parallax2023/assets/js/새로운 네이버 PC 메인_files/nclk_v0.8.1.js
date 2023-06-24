// nclk.js, Version 0.8.1
// Log-data 2022.07.07.

(function(nclkExports) {

    /* Global variable */
// Function Name : nclk
// Argument : e - `event` or `element` where event occured object, a - click area,  i - gdID or cid, r - rank in area, opt - forced mode setting, g - extra variable, pid(option) - page id: 없는 경우 g_pid 또는 lcs_get_lpid 참조
// Description : When users click link, this function is called. It request to the server, then the server log data.
    var nclk = function (e, a, i, r, opt, g, pid) {
        // opt는 spec-out된 것으로 확인. 기존 인터페이스 유지를 위해 남겨둬야 함.(#49)
        nclk_v2(e, a, i, r, g, pid);
    };
    var ccsrv = nclkExports.ccsrv || "cc.naver.com"; // collect server
    var nsc = nclkExports.nsc || "decide.me";
    var overwritedGlobal = {};
    var allowedOrigin = nclkExports.g_allowedOrigin || "";
    var parentVar = {};

    nclk.vs = "0.8.1"; // version
    nclk.md = "cc"; // module
    nclk.pt = "https:";
    nclk.ec = encodeURIComponent;
    nclk.st = 1; // 1: SSC mode, 0: NSC mode(deprecated)
    nclk.ua = {}; // userAgentData

// iframe인 경우 parent에서 글로벌변수 가져오기
    if(self !== parent && !!allowedOrigin){
        parent.postMessage("getLCSInfo", allowedOrigin);
        window.addEventListener("message", function(event){
            if(event.origin !== allowedOrigin) return;
            parentVar = JSON.parse(event.data);
        }, false);
    }

// 비동기 로직(navigator.userAgentData.getHighEntropyValues())이 있어 nclk() 호출 이전에 완료해야 함.
    (function setUserAgentData() {
        try {
            if (typeof navigator === "undefined" || !navigator || !navigator.userAgentData) {
                return false;
            }

            var userAgentData = navigator.userAgentData;
            var brands = userAgentData.uaList || userAgentData.brands;
            var highEntropyValues = [
                "architecture",
                "model",
                "platform",
                "platformVersion",
                "uaFullVersion",
                "fullVersionList"
            ];
            var checkType = function(target, typeStr){
                return Object.prototype.toString.call(target).slice(8, -1).toLowerCase() === typeStr.toLowerCase();
            };
            var flattenBrands = function(brands, prefix) {
                var prefix = prefix ? prefix + "_" : "";

                if(!checkType(brands, "array")) {
                    return;
                }

                for (var i = 0, brandsLength = brands.length; i < brandsLength; i++) {
                    if(!checkType(brands[i], "object")) {
                        continue;
                    }
                    for (var key in brands[i]) {
                        nclk.ua[prefix + key + "_" + i] = brands[i][key] || "";
                    }
                }
            };

            nclk.ua["mobile"] = userAgentData.mobile;

            flattenBrands(brands);

            navigator.userAgentData.getHighEntropyValues(highEntropyValues).then(function(info) {
                for (var key in highEntropyValues) {
                    var val = highEntropyValues[key];

                    if(val == "fullVersionList") {
                        flattenBrands(info[val], "full");
                    } else {
                        nclk.ua[val] = info[val] || "";
                    }
                }
            });
        } catch(e) {
            console.warn(e);
        }
    })();

//Function Name : nclk_proxy
//Argument : o - owner of event occurence object, a - click area,  i - gdID or cid, r - rank in area, opt - forced mode setting, g - extra variable
//Description : Do the same thing with nclk() except for redirecting target URL to proxy server.
    function nclk_proxy(o, a, i, r, opt, g) {
        var g_nclk_proxy = nclkExports.g_nclk_proxy || ""; // proxy server

        if (g_nclk_proxy && o.href){
            o.href = g_nclk_proxy + nclk.ec(o.href);
        }

        return nclk(o, a, i, r, opt, g);
    }

    function nclk_v2_with_obj(obj) {
        var params = obj || {};

        if(!params.e || !params.a) { return; }

        overwritedGlobal.g_ssc = params.g_ssc || "";
        overwritedGlobal.g_query = params.g_query || "";
        overwritedGlobal.g_sid = params.g_sid || "";
        overwritedGlobal.g_pid = params.g_pid || "";
        overwritedGlobal.g_lcsurl = params.g_lcsurl || "";
        overwritedGlobal.g_lcssti = params.g_lcssti || "";

        nclk_v2(params.e, params.a, params.i, params.r, params.g, params.pid);

        overwritedGlobal = {};
    }

// Function Name : nclk_v2
// Argument : e - `event` or `element` where event occured object, a - click area,  i - gdID or cid, r - rank in area, g - extra variable, pid(option) - page id: 없는 경우 g_pid 또는 lcs_get_lpid 참조
// Description : When users click link, this function is called. It request to the server, then the server log data.
    function nclk_v2(e, a, i, r, g, pid) {
        var m, l, tU, sc;

        // Some browsers like Firefox doesn't support window.event.
        var evt = e;
        var o = e;

        if ('nodeType' in e && e.nodeType >= 1) { // e가 element 이면 (기존 this)
            evt = window.event || e;
        } else if (e) {
            var target = e.srcElement || e.currentTarget || e.target;

            if (target) {
                o = nclk.findLink(target);
            }
        }

        if (!g) g = "";

        // In here we get and calculates position that click happens.l
        sc = nclk.gcp(o, evt);	// global click position
        tU = nclk.gl(a, i, r, sc, "", 0, nclk.st, g, pid);	// make request url
        l = nclk.l(o, tU);	// append target url

        nclk.sd(l);     // send log

        return true;
    }

    nclk.findLink = function(_el) {
        var el = _el;

        while (el && el.tagName !== "BODY" && el.tagName !== "HTML") {
            if (el.tagName === "A" || !el.parentNode) {
                break;
            }

            el = el.parentNode;
        }

        if (el.tagName !== "A") {
            el = _el;
        }

        return el;
    }

// Function Name : nclk.l
// Argument : o - owner of event occurence object, tU - request URL
// Description : append target url at request URL
    nclk.l = function (o, tU) {
        var l, tN, tH;

        // o.href로 HTML Spec에 따라 href 속성을 가진 엘리먼트인지? 형식에 맞는 링크인지? 판별이 가능하나, IE에서 img엘리먼트만 예외로 src값을 반환하고 있음.
        // IE대응을 위해 후순위로 getAttriute 조건문 추가함.
        if (o && o.href && o.getAttribute("href")) {
            tN = o.tagName.toLowerCase();
            tH = o.href.toLowerCase();
            if (tH && tH.indexOf(nclk.pt+"//"+ccsrv) == 0) {	// href is cc.naver.com ...
                l = o.href;
            } else if (tH && tH.indexOf(nclk.pt+"//"+ccsrv) != 0 && tN && tN != "img") {
                l = tU + "&u="+nclk.ec(o.href);	// append target url
            }
            return l;
        }
        return tU + "&u=about%3Ablank";		// no tareget url - default
    };

    nclk.sendByBeacon = function(l) {
        var parsedUrl = l.split("?");

        navigator.sendBeacon(parsedUrl[0], parsedUrl[1]);
    };

    nclk.sendByImage = function(l) {
        var t = new Date().getTime();  // Aviod image cache

        (new Image()).src = l + "&nt="+ t;
    };

// Function Name : nclk.sd
// Argument : l - request url, func - callback funciton
// Description : send log
    nclk.sd = !!navigator.sendBeacon ? nclk.sendByBeacon : nclk.sendByImage;

// Function Name : nclk.ggv
// Argument : gv - global variables name
// Description : return global variable in priority order
    nclk.ggv = function(gv) {
        return overwritedGlobal[gv] || nclkExports[gv] || "";
    }

// Function Name : nclk.gl
// Argument : a - click area,  i - gdID or cid, r - rank in area, u- target url, m- action mode, s- nsc or nsc, g - extra variable
// Description : make request url
    nclk.gl = function(a, i, r, sc, u, m, s, g, pid) {
        var g_ssc = nclk.ggv("g_ssc");
        var g_query = nclk.ggv("g_query");
        var g_pid = nclk.ggv("g_pid"); // page id
        var g_sid = nclk.ggv("g_sid"); // session id
        var g_lcsurl = nclk.ggv("g_lcsurl") || parentVar.g_lcsurl || window.location.href;
        var g_lcssti = nclk.ggv("g_lcssti") || parentVar.g_lcssti || null;
        var lcs_get_lpid = nclkExports.lcs_get_lpid || parentVar.lcs_get_lpid || null;

        if (m == undefined){
            m = 1;
        }

        if (s == undefined) {
            s = 1;
        }

        var l = nclk.pt+"//" + ccsrv + "/"+ nclk.md + "?a=" + a + "&r=" + r + "&i=" + i + "&m=" + m;

        if (s == 1) {	// SSC 관련 값 추가
            if (g_ssc) {
                l += "&ssc=" + g_ssc;
            }

            if (g_query) {
                l += "&q=" + nclk.ec(g_query);
            }

            if (g_sid) {
                l += "&s=" + g_sid;
            }

            // pid
            if (pid) {
                l += "&p=" + pid;
            } else if(g_pid) {
                l += "&p=" + g_pid;
            } else if (lcs_get_lpid) {	// lcs에서 참조
                // lpid: 같은 pageview에서 lcs 로그 데이터와 nclicks 로그 데이터를 연결하기 위한 공통 키 값
                // lcs에서 id를 생성 (lcs_do할 때마다 업데이트)
                // (페이지 로드 전 (lcs_do 이전) lpid를 참조하는 경우 lpid를 동적으로 생성한 다음, 처음 lcs_do에서는 생성된 값을 사용. 이후는 마찬가지로 업데이트)
                l += "&p=" + (typeof lcs_get_lpid == "function" ? lcs_get_lpid() : lcs_get_lpid);
            } else {
                console.warn("'g_pid / lcs_get_lpid' is not exist.");
            }
        } else {
            l += "&nsc=" + nsc;
            console.warn("[DEPRECATED] NSC mode");
        }

        if (g) {
            l += "&g=" + g;
        }

        if (u) {
            l += "&u="+nclk.ec(u);
        }

        if (g_lcsurl) {
            l += "&lcsurl=" + nclk.ec(g_lcsurl);
        }

        if (g_lcssti) {
            l += "&lcssti=" + g_lcssti;
        }

        if (sc){
            l += sc
        }

        // Add userAgentData to queryString
        var uaIndex, uaValue;
        for (uaIndex in nclk.ua) {
            uaValue = nclk.ua[uaIndex];

            if (uaValue) {
                l += "&" + "ua_" + uaIndex + "=" + nclk.ec(uaValue);
            }
        }

        return l;
    };

// Function Name : nclk.al
// Argument : sType- event type, fn - callback function
// Description : event listener
    nclk.al = function(sType, fn) {
        var w = window;
        if(w.addEventListener) {
            w.addEventListener(sType, fn, false);
        } else if(w.attachEvent) {	// support to IE
            w.attachEvent("on" + sType, fn);
        }
    };

//Function Name : nclk.gsbw
//Return : scrollbar width
//Description : Get scrollbar width in order to calculate browser size of Opera.
    nclk.gsbw = function() {
        var inner = document.createElement('p');
        inner.style.width = '200px';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        outer.style.position = 'absolute';
        outer.style.top = '0px';
        outer.style.left = '0px';
        outer.style.visibility = 'hidden';
        outer.style.width = '200px';
        outer.style.height = '150px';
        outer.style.overflow = 'hidden';
        outer.appendChild (inner);

        document.body.appendChild (outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;

        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild (outer);

        return (w1 - w2);
    };

//Function Name : nclk.fp
//Parameter : obj - owner of event occurence object
//Return : object position
//Description : Get offsetLeft, offsetTop
    nclk.fp = function(obj) {
        var curleft = curtop = 0;

        try {
            if (obj.offsetParent) {
                do {
                    curleft += obj.offsetLeft;
                    curtop += obj.offsetTop;
                } while (obj = obj.offsetParent);
            }
            else if (obj.x || obj.y)			// for safari of old version
            {
                if (obj.x) curleft += obj.x;
                if (obj.y) curtop += obj.y;
            }
        } catch(e) {
        }
        return [curleft, curtop];
    };


//Function Name : nclk.ws
//Paramenter : win -  window object
//Return : window width
//Description : Calculates inner width of browser window.
    nclk.ws = function(win) {
        if (!win) win = window;
        var winWidth = 0;
        if (win.innerWidth) {
            // most non-IE
            winWidth = win.innerWidth;
            // including scroll bar !!
            if ( typeof(win.innerWidth) == 'number') {
                var scrollbarWidth = nclk.gsbw();
                winWidth = win.innerWidth - scrollbarWidth; // Opera includes scrollbar width at innerWidth
            }
        } else if (document.documentElement && document.documentElement.clientWidth) {
            //IE 6+ in 'standards compliant mode'
            winWidth = document.documentElement.clientWidth;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            winWidth = document.body.clientWidth;
        }
        return winWidth;
    };

//Function Name : nclk.ci
//Parameter : obj - owner of event occurence object
//Return Value : iframe ID or false
//Description : Check whether it is clicked in iframe or not
    nclk.ci = function(obj) {
        var oriURL = document.URL;
        var p = obj.parentNode;
        var docObj;
        var ifrId;
        var l;

        if (p == null || p == undefined) {
            return false;
        }

        while (1) {
            if (p.nodeName.toLowerCase() == "#document") {
                if (p.parentWindow) {		// IE, Opera
                    docObj = p.parentWindow;
                } else {	// Firefox, Safari
                    docObj = p.defaultView;
                }
                try {
                    if (docObj.frameElement != null && docObj.frameElement != undefined ) {
                        if (docObj.frameElement.nodeName.toLowerCase() == "iframe") {
                            ifrId = docObj.frameElement.id;	// Get iframe id
                            if (!ifrId) return false;
                            return ifrId;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } catch (e) {
                    return false;
                }
            } else {
                p = p.parentNode;
                if (p == null || p == undefined) return false;
            }
        }
    };

    nclk.gcp = function(obj, e) {
        var sx=-1;
        var sy=-1;
        var px=-1;
        var py=-1;
        var dBody, dElement, ifrId;
        var l=""
        var theEvent = window.event ? window.event : obj;

        if (e) {
            theEvent = e || window.event;
        }

        try {
            bw = nclk.ws(window);	// size of window
            ifrId = nclk.ci(obj);	// check whether it is clicked in iframe or not
            if (ifrId) {	// click object in iframe
                var ifrOffset = nclk.fp(document.getElementById(ifrId));	// Get position of iframe
                if (theEvent.clientX  && theEvent.clientX != undefined) {
                    dBody = document.body;
                    if (dBody.clientLeft && dBody.clientTop) {
                        ifrSx = theEvent.clientX - dBody.clientLeft;		//  relative position in iframe
                        ifrSy = theEvent.clientY - dBody.clientTop;
                    } else { // firefox bug - clientLeft, clientTop don't work in firefox. It is OK in firefox 3.0
                        ifrSx = theEvent.clientX;
                        ifrSy = theEvent.clientY;
                    }
                }
                // postion of iframe + relative position in iframe
                px = ifrOffset[0] + ifrSx;
                py = ifrOffset[1] + ifrSy;

                // relative position in window
                if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
                    dBody = document.body;
                    sx = px - dBody.scrollLeft;
                    sy = py - dBody.scrollTop;
                } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                    dElement = document.documentElement;
                    sx = px - dElement.scrollLeft;
                    sy = py - dElement.scrollTop;
                } else {
                    sx = px;
                    sy = py;
                }
            } else {	// normal click object
                if (theEvent.clientX  && theEvent.clientX != undefined) {
                    dBody = document.body;
                    if (dBody.clientLeft && dBody.clientTop) {
                        sx = theEvent.clientX - dBody.clientLeft;		// relative position in window
                        sy = theEvent.clientY - dBody.clientTop;
                    } else { // firefox bug - clientLeft, clientTop don't work in firefox. It is OK in firefox 3.0
                        sx = theEvent.clientX;
                        sy = theEvent.clientY;
                    }
                }

                // IE calculates (clientX,clientY) relativ to window, not content.
                if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
                    px = document.body.scrollLeft + (sx < 0 ? 0: sx);
                    py = document.body.scrollTop + (sy < 0 ? 0: sy);
                } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                    dElement = document.documentElement;
                    if (dElement.scrollLeft !=undefined) px = dElement.scrollLeft + (sx < 0 ? 0: sx);
                    if (dElement.scrollTop !=undefined) py = dElement.scrollTop + (sy < 0 ? 0: sy);
                } else {
                    px = (sx < 0 ? 0: sx);
                    py = (sy < 0 ? 0: sy);
                }

                if (theEvent.pageX) { px = theEvent.pageX; }
                if (theEvent.pageY) { py = theEvent.pageY; }
            }
        } catch (e) {
        }

        if ((px != -1) &&  (py != -1)){
            l+= "&px=" + px + "&py=" + py;
        }

        if ((sx != -1) &&  (sy != -1)){
            l+= "&sx=" + sx + "&sy=" + sy;
        }

        return l;
    }

    nclkExports.nclk_proxy = nclk_proxy;
    nclkExports.nclk = nclk;
    nclkExports.nclk_v2 = nclk_v2;
    nclkExports.nclk_v2_with_obj = nclk_v2_with_obj;

})(window);