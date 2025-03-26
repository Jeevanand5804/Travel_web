document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const emailInput = document.getElementById("email").value;

    if (!emailInput.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        const alertBox = document.createElement("div");
        alertBox.innerText = "Thank you! Your email has been submitted.";
        alertBox.style.position = "fixed";
        alertBox.style.top = "50%";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translate(-50%, -50%)";
        alertBox.style.backgroundColor = "#4CAF50";
        alertBox.style.color = "white";
        alertBox.style.padding = "15px";
        alertBox.style.borderRadius = "5px";
        alertBox.style.zIndex = "1000";
        document.body.appendChild(alertBox);

        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 1500);
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


document.addEventListener("DOMContentLoaded", () => {
    hideAllImages();
});

function hideAllImages() {
    document.querySelectorAll(".image-container").forEach(container => container.style.display = "none");
    document.querySelectorAll(".title").forEach(title => title.style.display = "none");
}

function searchImages() {
    hideAllImages();
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    
    if (searchQuery.includes("beach")) {
        document.getElementById("beach-images").style.display = "block";
        document.getElementById("beach-title").style.display = "block";
    } else if (searchQuery.includes("temple")) {
        document.getElementById("temple-images").style.display = "block";
        document.getElementById("temple-title").style.display = "block";
    } else if (searchQuery.includes("country")) {
        document.getElementById("country-images").style.display = "block";
        document.getElementById("country-title").style.display = "block";
    }
}
