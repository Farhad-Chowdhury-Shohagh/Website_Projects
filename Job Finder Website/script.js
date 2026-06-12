let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

const nav = document.querySelector(".navbar");
const navLinks = nav.querySelectorAll("a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
  }
});


document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.value.lenght > inputNumber.maxLenght) inputNumber.value 
        = inputNumber.value.slice(0, inputNumber.maxLenght);
    };
});


// jobs section 
let dropdown_items = document.querySelectorAll('.job-filter form .dropdown-container .dropdown .lists .items');

dropdown_items.forEach(items => {
    items.onclick = () =>{
        items_parent = items.parentElement.parentElement;
        let output = items_parent.querySelector('.output');
        output.value = items.innerText;
    }
});