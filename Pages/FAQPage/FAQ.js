var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var plus = this.getElementsByClassName("plus");    
    var content = this.nextElementSibling;
    
    if (content.style.display === "block") {
      plus[0].style.transform = "rotateZ(0deg)";
      content.style.display = "none";
    } else {
      plus[0].style.transform = "rotateZ(-45deg)";
      content.style.display = "block";
    }
  });
}
