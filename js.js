document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = this;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Something went wrong.Try again.");
        }
    }).catch(error => alert("Error: " + error.message));
});

