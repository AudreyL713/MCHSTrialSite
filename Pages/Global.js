var colorScheme = true; // true is dark mode, false is light mode
editColorScheme();

function modeToggle() {
  var checkBox = document.getElementById("toggle");
  colorScheme = !checkBox.checked;
  editColorScheme();
}

function editColorScheme() {
    if (colorScheme) {
        document.documentElement.style.setProperty("--default-bg", "black");
        document.documentElement.style.setProperty("--default-text", "white");
      } else {
        document.documentElement.style.setProperty("--default-bg", "white");
        document.documentElement.style.setProperty("--default-text", "black");
      }
}
