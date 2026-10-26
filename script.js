function showMessage() {
    document.getElementById("message").textContent =
        "Congratulations! You are learning JavaScript!";
}

let isGreen = false;

function changeBackground() {
    if (isGreen) {
        document.body.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";
        isGreen = false;
    } else {
        document.body.style.background =
            "linear-gradient(135deg, #11998e, #38ef7d)";
        isGreen = true;
    }
}