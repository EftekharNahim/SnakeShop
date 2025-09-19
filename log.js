const logbtn = document.querySelector("#log-btn");

logbtn.addEventListener("click", () => {
    const user = document.querySelector("#user");
    const pass = document.querySelector("#pass");
    const ErrorMsg = document.querySelector("#error");
    const hide = document.querySelector(".hide");
    ErrorMsg.innerText = "";
    console.log(user.value);
    if (localStorage.getItem(user.value) !== null) {
        const obj = JSON.parse(localStorage.getItem(user.value));
        console.log(obj.Password);
        if (obj.Password === pass.value) {
            localStorage.setItem("loggedInUser", user.value);
            window.location.href = "index.html";
            // setTimeout(()=>
            // {
            //     window.location.href="index.html";
            // },2000);

        }
        else {
            ErrorMsg.innerText = "Wrong password";
            hide.style.display = "block";
        }
    }
    else {
        ErrorMsg.innerText = "Username not Exists";
        hide.style.display = "block";
    }
})