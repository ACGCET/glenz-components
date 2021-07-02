const one = ()=>
{
document.getElementById('one').style.display = "block";
document.getElementById('two').style.display = 'none';
document.getElementById('three').style.display = 'none';
document.getElementById('line').style.top = "5px";


}
const two = ()=>
{
document.getElementById('one').style.display = "none";
document.getElementById('two').style.display='block';
document.getElementById('three').style.display = 'none';
document.getElementById('line').style.top = "185px";

}
const three = ()=>
{
document.getElementById('one').style.display = "none";
document.getElementById('two').style.display = 'none';
document.getElementById('three').style.display='block';
document.getElementById('line').style.top = "365px";

}