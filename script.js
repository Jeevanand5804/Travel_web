
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

function cycleImages(containerId, images) {
    let index = 0;
    const container = document.getElementById(containerId);

    setInterval(() => {
        index = (index + 1) % images.length;
        container.innerHTML = `<img src="${images[index]}" alt="Image">`;
    }, 4000);
}

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});


cycleImages("beach-container", ["images/beach1.jpg", "images/beach2.jpg"]);
cycleImages("temple-container", ["images/temple1.jpg", "images/temple2.jpg"]);
cycleImages("country-container", ["images/country1.jpg", "images/country2.jpg"]);
