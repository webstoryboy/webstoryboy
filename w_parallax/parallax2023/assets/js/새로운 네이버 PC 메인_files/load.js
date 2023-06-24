window.addEventListener('load', function () {
    window.__splugin = SocialPlugIn_Core({
        "evKey": "promotion",
        "serviceName": "campaign",
        "dimmed": "fixed",
        "onShow": function() {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        },
        "onHide": function() {
            document.getElementsByTagName('body')[0].style.overflow = 'initial';
        }
    })
});