 Disablecard = function() {
		 
  document.getElementById('subscribe').style.display='block';
  document.getElementById('floating-subscribe').style.display='none';
 
}
Disableicon = function() {
		 
  document.getElementById('subscribe').style.display='none';
  document.getElementById('floating-subscribe').style.display='block';
 
}

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    document.getElementById("floating-subscribe").classList.add("show");
  } else {
   document.getElementById("floating-subscribe").classList.remove("show");
  }
};

window.addEventListener("scroll", myScrollFunc);