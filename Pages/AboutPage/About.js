var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("teamPictures");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function modeToggle() {
  var checkBox = document.getElementById("toggle");
  var teamText = document.getElementById("teamtext");
  var heading = document.getElementsByTagName("h2");
  var doc = document.body;
  if (checkBox.checked == true){
    doc.style.background = "white";
    teamText.style.color = "black";
    heading.style.color = "black";
  } else {
      doc.style.background = "black";
  }
}