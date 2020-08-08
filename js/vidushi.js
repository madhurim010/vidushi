// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (moreText.style.display == "none") {
//     btnText.innerHTML = "<i class="fas fa-chevron-circle-down"></i>"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }
function change () {
  if(document.getElementById('icon').className=="fas fa-chevron-circle-down mx-auto d-block fa-2x"){
    document.getElementById('icon').className = "fas fa-chevron-circle-up mx-auto d-block fa-2x";
   var elems = document.getElementsByClassName('hide');
    for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'block';
    }
  }else{
    document.getElementById('icon').className = "fas fa-chevron-circle-down mx-auto d-block fa-2x";
    var elems = document.getElementsByClassName('hide');
    for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'none';
    }
  }
}

function check(){
  var pass= document.getElementById('password').value;
  if (pass=='siddhant'){
    document.getElementById('blur').style.filter= "blur(0px)";
    document.getElementById('blur').style.webkitFilter = "blur(0px)";

     }
}