// --- Hamburger Menu Logic ---
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    // Use transform to slide the menu into view
    navbar.style.transform = "translateY(0)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    // Slide it back out of view
    navbar.style.transform = "translateY(-100%)";
}


// --- Typewriter Effect Logic ---
const texts = ["Tejas"];
let speed = 100;
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // Wait 1 second then start erasing
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        // If erased, move to the next text (or loop back)
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        // Wait 0.5 seconds then start typing again
        setTimeout(typeWriter, 500);
    }
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;
