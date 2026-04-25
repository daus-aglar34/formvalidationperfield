document.getElementById("registrationForm").onsubmit = function (e) {
    e.preventDefault();

    // remove old errors
    document.querySelectorAll(".error").forEach(el => el.remove());

    let valid = true;

    function error(el, msg) {
        let p = document.createElement("p");
        p.className = "error";
        p.style.color = "red";
        p.style.fontSize = "12px";
        p.innerText = msg;

        el.after(p); // simple way to put error below
        valid = false;
    }

    // Full Name
    let name = document.querySelector('[name="fullName"]');
    if (name.value === "") {
        error(name, "Full Name is required");
    }

    // Date
    let dob = document.querySelector('[name="dateBirth"]');
    if (dob.value === "") {
        error(dob, "Date of Birth is required");
    }

    // Gender
    let gender = document.querySelector('[name="gender"]:checked');
    let genderBox = document.getElementById("genderGroup");
    if (!gender) {
        error(genderBox, "Please select gender");
    }

    // Religion
    let religion = document.querySelector('[name="religion"]');
    if (religion.value === "") {
        error(religion, "Please select religion");
    }

    // Checkbox
    let checks = document.querySelectorAll(".checkBoxNews:checked");
    let checkboxGroup = document.getElementById("checkboxGroup");
    if (checks.length === 0) {
        error(checkboxGroup, "Select at least one option");
    }

    if (valid) {
        document.querySelectorAll(".error").forEach(el => el.remove());
        alert("Success!");
        this.submit();
    }
};