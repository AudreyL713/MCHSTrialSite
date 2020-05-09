function modeToggle() {
  var checkBox = document.getElementById("toggle");
  if (checkBox.checked == true) {
    document.documentElement.style.setProperty("--default-bg", "white");
    document.documentElement.style.setProperty("--default-text", "black");
  } else {
    document.documentElement.style.setProperty("--default-bg", "black");
    document.documentElement.style.setProperty("--default-text", "white");
  }
}
