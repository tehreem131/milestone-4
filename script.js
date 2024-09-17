var form = document.getElementById("Rasume-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var Education = document.getElementById("Education").value;
    var Experince = document.getElementById("Experince").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n            <h2><b>Editable Resume</h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(Education, "</p>\n\n            <h3>Experince</h3>\n            <p contenteditable=\"true\">").concat(Experince, "</p>\n\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
    if (document.getElementById("Rasume-display")) {
        document.getElementById("Rasume-display").innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
