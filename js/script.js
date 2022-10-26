//▶▶▶▶▶HIDE THE NAV BAR

const naviToggle = document.getElementById("navigation__toggle");
// console.log(naviToggle);

const showNav =document.querySelector('.navigation__nav');


naviToggle.addEventListener('change', function () {
   
  
   
    // VISIBLE
    if (naviToggle.checked){ 
    // console.log('checked');   
    showNav.classList.remove('hidden');
    }

    //INVISIBLE
    else { 
    // console.log('unchecked');  
    showNav.classList.add('hidden');
}})



//▶▶▶▶▶CLOSE THE NAV BAR

const closeNav = document.querySelectorAll('.closeNav');

for (let i= 0; i < closeNav.length; i++)
closeNav[i].addEventListener('click', function() {
naviToggle.checked =false;})

//▶▶▶▶▶ SENT ALERT MESSAGE

const submitButton = document.getElementById('submit');
// //submitButton.addEventListener('click', function(e) {

// const formInputs = document.querySelectorAll('.form__input');
// for (let i= 0; i < 2; i++){
//   e.preventDefault();
//   const input = formInputs[i].value.length;
 
//   if(input >0){
//        send()
//   }

// }

// } )

// function send (){
  
// }
//▶▶▶▶▶SCROLL BUTTON


//➡Get the button:
mybutton = document.getElementById("scroll");

//➡ When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
console.log('topfunction');
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById('scroll').addEventListener('click', topFunction);

