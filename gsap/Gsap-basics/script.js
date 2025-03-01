// gsap.to(".box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     repeat:2,
//     yoyo:true,
//     scale:0.5
// })

// gsap.from(".box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     backgroundColor:"crimson",
//     borderRadius:"50%"
// })

// gsap.from("h1",{
//     opacity:0,
//     y:20,
//     color:"crimson",
//     duration:1,
//     delay:1, 
    // stagger:0.5,  
    // stagger: -3,  
// }) 


/*----------Timeline---------*/

// var tl=gsap.timeline();
// tl.to(".box1",{
//     x:1200,
//     duration:2,
//     // delay:1,
// })

// tl.to(".box2",{
//     x:1200,
//     duration:2,
// })

// tl.from(".box3",{
//     x:1200,
//     duration:2,
// })

var myTl=gsap.timeline();
myTl.from('#nav h2',{
    y: -30,
    opacity:0,
})

myTl.from('#nav ul li',{
    y: -30,
    opacity:0,
    stagger:true
})

myTl.from('h1',{
    y: 50,
    opacity:0,
    color:"white",
    stagger:true
})