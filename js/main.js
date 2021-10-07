const password = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  togglePassword.classList.toggle("fa-eye-slash");
});

// password.addEventListener("click", () => {
//   this.classList.toggle("bg");
// });

console.log(password);
