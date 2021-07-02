var mybutton = document.getElementById("myBtn");

window.onscroll = function()
 {
	scrollFunction()
};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}