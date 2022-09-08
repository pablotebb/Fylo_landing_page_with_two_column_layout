// Forms elements
const input_1 = document.getElementById("input1");
const input_2 = document.getElementById("input2");
const error_1 = document.querySelector(".error1");
const error_2 = document.querySelector(".error2");
const buttonSubmit_1 = document.getElementById("button-submit1");
const buttonSubmit_2 = document.getElementById("button-submit2");

// Event submit 1
buttonSubmit_1.addEventListener("click", (e) => {
  // e.preventDefault();
  checkEmail(input_1.value, error_1, e);
});

// Event submit 2
buttonSubmit_2.addEventListener("click", (e) => {
  // e.preventDefault();
  checkEmail(input_2.value, error_2, e);
});

function checkEmail(input, error, e) {
  regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(input) === true) {
    // VALID EMAIL
    error.style.display = "none";
  } else {
    // INVALID EMAIL
    error.style.display = "block";
    e.preventDefault();
  }
}
