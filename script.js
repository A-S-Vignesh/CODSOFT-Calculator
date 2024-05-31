document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelectorAll(".numberbtn");
  var display = document.querySelector(".display");
  var displayValue = "";
  display.value = "";

  // Function to handle button clicks and keyboard input
  function handleInput(value) {
    if (value == "AC" || value == "Delete") {
      displayValue = "";
      display.value = "";
    } else if (value == "DEL" || value == "Backspace") {
      displayValue = displayValue.slice(0, -1);
      display.value = displayValue;
    } else if (value == "=" || value == "Enter") {
      try {
        displayValue = eval(displayValue).toString();
        display.value = displayValue;
      } catch (error) {
        display.value = "error";
        displayValue = "";
      }
    } else if (value == "00") {
      displayValue += "00";
      display.value = displayValue;
    } else if (/^[0-9+\-*/.%]$/.test(value)) {
      displayValue += value;
      display.value = displayValue;
    }
  }

  // Add click event listener to buttons
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
      var value = event.target.outerText;
      handleInput(value);
    });
  }

  // Add keyboard event listener
  document.addEventListener("keydown", function (event) {
    var key = event.key;

    if (key === "Enter") {
      event.preventDefault(); // Prevent form submission if any
    }
    console.log(key);

    handleInput(key);
  });
});
