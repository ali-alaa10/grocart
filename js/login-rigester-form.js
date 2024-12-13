    let passwordInput = document.getElementById("password");
    let showHidePassword = document.getElementById("showHide");
    function togglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showHidePassword.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    } else {
        passwordInput.type = "password";
        showHidePassword.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
    }

    let passwordInput2 = document.getElementById("password2");
    let showHidePassword2 = document.getElementById("showHide2  ");
    function togglePassword2() {
    if (passwordInput2.type === "password") {
        passwordInput2.type = "text";
        showHidePassword2.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    } else {
        passwordInput2.type = "password";
        showHidePassword2.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
    }

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

    let loginForm = document.getElementById("login");
    let registerFrom = document.getElementById("register");
    let toggleForms = document.getElementById("btn");
    btn2.style.color = "#fff";
    function login() {
    loginForm.style.display = "block";
    registerFrom.style.display = "none";
    toggleForms.style.left = "51%";
    btn1.style.color = "#fff";
    btn2.style.color = "#38b000";
    }
    function register() {
    loginForm.style.display = "none";
    registerFrom.style.display = " block";
    toggleForms.style.left = "2%";
    btn2.style.color = "#fff";
    btn1.style.color = "#38b000";
    }
