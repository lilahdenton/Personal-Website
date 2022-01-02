//side nav bar functionality (open/close)
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}

//SKILLS

//TODO: make buttons interactive
document.getElementById("java").addEventListener("clicked", javaClicked);

function javaClicked() {
  console.log("JAVA-CLICKED");
}

//ACHIEVMENTS

//TODO: make these icons interactive 
