//side nav bar functionality (open/close)
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

function closeNav() {
  document.getElementById("sidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}

//SKILLS

//TODO: make buttons interactive
document.getElementById("java").addEventListener("mouseover", javaClicked);

function javaClicked() {
  console.log("JAVA");
  
}


