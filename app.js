//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const sizesbtn1 = document.querySelector('.sizes button:nth-child(1)')
const sizesbtn2 = document.querySelector('.sizes button:nth-child(2)')
const sizesbtn3 = document.querySelector('.sizes button:nth-child(3)')
const sizesbtn4 = document.querySelector('.sizes button:nth-child(4)')
//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(-20deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

sizesbtn1.addEventListener("click", (e) =>{
    sizesbtn3.classList.remove("active")
    sizesbtn2.classList.remove("active")
    sizesbtn4.classList.remove("active")
    sizesbtn1.classList.add("active")
    sneaker.src = "./picure/flower1.png"
} );

sizesbtn2.addEventListener("click", (e) =>{
     sizesbtn3.classList.remove("active")
    sizesbtn1.classList.remove("active")
    sizesbtn4.classList.remove("active")
    sizesbtn2.classList.add("active")
    sneaker.src = "./picure/flower2.png"

} )
sizesbtn3.addEventListener("click", (e) =>{
    sizesbtn1.classList.remove("active")
    sizesbtn2.classList.remove("active")
    sizesbtn4.classList.remove("active")
    sizesbtn3.classList.add("active")
    sneaker.src = "./picure/flower3.png"

    

} )
sizesbtn4.addEventListener("click", (e) =>{
   sizesbtn1.classList.remove("active")
    sizesbtn2.classList.remove("active")
    sizesbtn3.classList.remove("active")
    sizesbtn4.classList.add("active")
    sneaker.src = "./picure/flower4.png"


} )