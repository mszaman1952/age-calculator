

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let resultdiv = document.getElementById("results");
    let results = document.getElementById("white");
    let dob = document.querySelector("#inpt-date");
    let today = new Date();
    let inputDate = new Date(dob.value);
    let birthDate = inputDate.getDate();
    let birthMonth = inputDate.getMonth() + 1;
    let birthYear = inputDate.getFullYear();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
   
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (birthDate > currentDate) {
        currentDate = currentDate + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if (birthMonth > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    let mm = currentMonth - birthMonth;
    let dd = currentDate - birthDate;
    let yyyy = currentYear - birthYear;

    if (!dob.value) {
        alert("Please enter date of birth...")
    }
    else {
        results.innerHTML = `${yyyy} Years ${mm} Months and ${dd} Days...`
        resultdiv.style.transform = "translateY(0px)"
    }
});


