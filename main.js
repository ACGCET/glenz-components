 const Disablecard = () => {
		 
  document.getElementById('subscribe').style.display='block';
  document.getElementById('floating-subscribe').style.display='none';
 
}
const Disableicon = () => {
		 
  document.getElementById('subscribe').style.display='none';
  document.getElementById('floating-subscribe').style.display='block';
 
}

const myScrollFunc = () => {
  var y = window.scrollY;
  if (y >= 200) {
    document.getElementById("floating-subscribe").classList.add("show");
  } else {
   document.getElementById("floating-subscribe").classList.remove("show");
  }
};

window.addEventListener("scroll", myScrollFunc);