var colorScheme = sessionStorage.getItem("colorScheme");

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

function displayHidden() {
  var hidden = document.getElementsByClassName("navHidden")[0];

  if (hidden.style.display == "none" || hidden.style.display == "") {
    hidden.style.display = "block";
  } else {
    hidden.style.display = "none";
  }
}
