function submitForm(form) {
    console.log("success");
    var fullName = document.forms["surveyForm"]["fullName"].value;
    var phoneNumber = document.forms["surveyForm"]["phoneNumber"].value;
    var state = document.forms["surveyForm"]["state"].value;
    var question = document.forms["surveyForm"]["question"].value;

    if (fullName == "" || state == "" || question == "") {
        alert("Please fill out all fields")
    }

    else if (phoneNumber !== "") {
        validatePhone(phoneNumber);
    }
}

function validatePhone(phoneNumber) {
    var phoneReg = new RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);
    if (phoneReg.test(phoneNumber)) {
        document.getElementById("phoneNumber").className = "userInput";
        document.getElementById("phoneLabel").innerHTML = "* Phone Number";
        document.getElementById("phoneLabel").className = "cleanLabel";

        showSuccessMessage();

    }
    else {
        document.getElementById("phoneNumber").className = "error";
        document.getElementById("phoneLabel").innerHTML = "*Phone Number - invalid phone number"
        document.getElementById("phoneLabel").className = "errorLabel";
    }
};

function showSuccessMessage() {
    document.getElementById("introText").innerHTML = "Thank you!";
    document.getElementById("successMessage").style.display = "block";

    var element = document.getElementById("formBody");
    element.outerHTML = "";
    delete element;

}
