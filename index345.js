const signupBtn = document.querySelector(".signupButton");

if (signupBtn) {
    signupBtn.addEventListener("mouseenter", () => {
        signupBtn.style.transform = "scale(1.12)";
        signupBtn.style.transition = "0.2s";
    });

    signupBtn.addEventListener("mouseleave", () => {
        signupBtn.style.transform = "scale(1)";
    });
}

const mainBtns = document.querySelectorAll(".mainButton");

mainBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.12)";
        btn.style.transition = "0.2s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});
