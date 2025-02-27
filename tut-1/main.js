let rect= document.querySelector("#center");

rect.addEventListener("mousemove", ()=>{
    console.log(rect.getBoundingClientRect());
})