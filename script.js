const RegBtn = document.querySelector("#Reg-btn");
const Reg = document.querySelector("#Reg");
const inf = document.querySelectorAll(".inf");
///form value
const fname = document.querySelector("#fname").value;
const lname = document.querySelector("#lname").value;
const email = document.querySelector("#email").value;
const username = document.querySelector("#username").value;
const password = document.querySelector("#password").value;

///

// console.log(Reg);

////Regestration page 
RegBtn.addEventListener("click", RegFun);
function notification() {
    for (let i in inf) {
        //    console.log(inf[i].value);
        inf[i].value = "";
    }
    alert("Please give required information");

}
function RegFun() {
    console.log(inf.length);
    let ok = true;
    inf.forEach((val, key) => {

        console.log('val', val.value);
        if (val.value === "" && ok === true) {
            ok = false;
            notification();
        }
        // console.log('key',key);
    })
    if (ok) {
        const fname = document.querySelector("#fname").value;
        const lname = document.querySelector("#lname").value;
        const email = document.querySelector("#email").value;
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const cart = {
            items: 0,
            total: 0,
        };

        if (localStorage.getItem(username) !== null) {
            alert("Username Exists");
        }
        else {

            const obj = {
                FirstName: fname,
                LastName: lname,
                Email: email,
                Username: username,
                Password: password,
                cart,
            };
            localStorage.setItem(username, JSON.stringify(obj));
            alert("Regestration Complete");
            window.location.href="login.html";

        }
    }
}