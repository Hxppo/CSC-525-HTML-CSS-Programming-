var form = document.querySelector(".applicationform");
var submitButton = document.querySelector(".submitbutton");
var textArea1 = document.querySelector(".textarea1");
var question1 = document.getElementsByName("question1select");
var textArea2 = document.querySelector(".textarea2");
var question2 = document.getElementsByName("question2select");


function completePreview() {
    // show submission button when form is valid
    if (form.checkValidity() === true) {
        submitButton.className = "submitbutton show";
    } else {
        submitButton.className = "submitbutton";
    }

    // hide text area
    question1.forEach(function (c) {
        if (c.checked && c.value === "YES") {
            textArea1.className = "textarea1 show";
        } else if (c.checked && c.value === "NO") {
            textArea1.className = "textarea1";
        }
    });

    question2.forEach(function (c) {
        if (c.checked && c.value === "YES") {
            textArea2.className = "textarea2 show";
        } else if (c.checked && c.value === "NO") {
            textArea2.className = "textarea2";
        }
    });
}

// add listener
form.addEventListener("change", completePreview, false);