// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if (
document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300
) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

};

if(topBtn){

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// Contact Form

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

contactForm.reset();

});

}
