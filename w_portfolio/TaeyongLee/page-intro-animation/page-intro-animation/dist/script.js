const animationOptions = {
  ease: 'expo.inOut' };


const introAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: animationOptions.ease,
      duration: 1 } });



  tl.to('.landing .title', {
    duration: 1.5,
    y: 0,
      
    autoAlpha: 1
    }).

  to('.landing .bg-l, .landing .bg-r', {
    scaleX: 1 }).

  to('.landing .bg-l, .landing .bg-r', {
    scaleY: 0,
    transformOrigin: 'top center' }).

        to('.landing .title', {
            duration: 1.5,
            y: -60,
            autoAlpha: 0 },
           '-=0.6').
        to('.landing .bg', {
            y: '-100%',
         autoAlpha: 0 },
           '-=0.5').
         to('.landing .bg', {
            y: '-100%',
         autoAlpha: 1},
           '-=0.5');
        return tl;
};


const skewInElements = elements => {
  const tl = gsap.timeline();

  tl.from(elements, {
    duration: 1,
    ease: animationOptions.ease,
    skewY: -5,
    autoAlpha: 0,
    y: 40 });


  return tl;
};



const fadeInElements = elements => {
  const tl = gsap.timeline();

  tl.from(elements, {
    duration: 1,
    ease: animationOptions.ease,
    y: '20px',
    autoAlpha: 0,
    stagger: 0.1 });


  return tl;
};

const master = gsap.timeline({
  paused: false,
  delay: 0.2 });


master.
add(introAnimation()).
add(skewInElements('.hero img'), '-=1');
