// const Dark = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('Dark='))
//   ?.split('=')[1];
var r = document.querySelector(':root');


const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");


window.onload = function(){ 
  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    
  }else{
    translate('en','lng-tag'); 
    document.body.dir="ltr" 

  }
    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ATitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(45deg, transparent 5%, #FF013C 5%)');
    r.style.setProperty('--Apartment', '#151515');
    r.style.setProperty('--FontColor', 'white');
    // r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--menu','black');
    r.style.setProperty('--BodyBackground','gray');
    r.style.setProperty('--PreloaderBackground','black');
    r.style.setProperty('--glitch','linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%)')
    r.style.setProperty('--Optbackground-color', '#FF013C');



  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ATitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(45deg, transparent 5%, #526DA1 5%)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', '#526DA1');
    // r.style.setProperty('--IconColor','white');
    r.style.setProperty('--menu','#526DA1');
    r.style.setProperty('--BodyBackground','white');
    r.style.setProperty('--PreloaderBackground','white');
    r.style.setProperty('--glitch','linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #526DA1 5%)')
    r.style.setProperty('--Optbackground-color', '#526DA1');

  }
  
  var l = document.getElementById("Light");
  var d = document.getElementById("Dark");
// l.addEventListener("click", function() {
//   r.style.setProperty('--TitleParbackground-color', 'red');
//   r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
// });
document.getElementById("prelod").style.display="none"
}