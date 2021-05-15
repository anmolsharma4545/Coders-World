const hero = document.querySelector('header');
const headline = document.querySelector('.join-us');
const slider = document.querySelector('.slider');
const body = document.querySelector('body');

const tl =new TimelineMax();

tl.fromTo
(body,1.2,
     {x: "-100%"}, {x:'0%',ease:Power2.easeInOut})
.fromTo
(hero,1,
     {width: "0%"}, {width:'100%',ease:Power2.easeInOut})
.fromTo(
    hero,1, 
    {height: "0%"}, 
    {height:'100%',ease:Power2.easeInOut})
 .fromTo(
      slider,1.2,
          {x: "-100%"}, {x:'0%',ease:Power2.easeInOut},"-=1")
          
.fromTo(
         headline,1, 
        {opacity: "0.6"}, 
        {opacity:'1',ease:Power2.easeInOut});
