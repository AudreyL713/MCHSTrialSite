function modeToggle() {
    var checkBox = document.getElementById("toggle");
    var doc = document.body;
    if (checkBox.checked == true){
      doc.style.background = "white";
    } else {
        doc.style.background = "black";
    }
  }