var colorScheme = sessionStorage.getItem("colorScheme"); // true is dark mode, false is light mode

function modeToggle() {
  var checkBox = document.getElementById("toggle");
  if (checkBox.checked) {
    if (sessionStorage) {
      sessionStorage.setItem("colorScheme", "light");
    } else {
      colorScheme = "light";
    }
  } else {
    if (sessionStorage) {
      sessionStorage.setItem("colorScheme", "dark");
    } else {
      colorScheme = "dark";
    }
  }
  editColorScheme();
}

function editColorScheme() {
  if (sessionStorage) {
    colorScheme = sessionStorage.getItem("colorScheme");
  }

  if (colorScheme == "light") {
    var checkBox = document.getElementById("toggle");
    checkBox.checked = true;
    document.documentElement.style.setProperty("--default-bg", "white");
    document.documentElement.style.setProperty("--default-text", "black");
  } else {
    document.documentElement.style.setProperty("--default-bg", "black");
    document.documentElement.style.setProperty("--default-text", "white");
  }
}
