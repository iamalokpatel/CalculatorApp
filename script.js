let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tvalue = e.target.innerText;
    if (tvalue == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (tvalue == "AC") {
      string = "";
      input.value = string;
    } else if (tvalue == "=") {
      string = eval(string);
      input.value = string;
    } else {
      string += tvalue;
      input.value = string;
    }
  });
});
