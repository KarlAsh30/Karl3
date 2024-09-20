let imgIndex = 1;
let buttonSizeChange = 10; // Percentage change for button sizes

document.addEventListener("DOMContentLoaded", function () {
    const notSubBtn = document.querySelector(".notsub");
    const subBtn = document.querySelector(".sub");
    const imgOne = document.querySelector(".imgone");
    const contentDiv = document.querySelector(".content");

    notSubBtn.addEventListener("click", function () {
        imgIndex++;
        if (imgIndex > 3) {
            imgIndex = 1;
        }

        const newImgSrc = `./img/img${imgIndex}.jpg`;
        imgOne.setAttribute("src", newImgSrc);

        // Update button styles
        updateButtonStyles(-buttonSizeChange);
    });

    subBtn.addEventListener("click", function () {
        const newImgSrc = `./img/img.jpg`;
        imgOne.setAttribute("src", newImgSrc);

        // Reset button styles
        resetButtonStyles();

        // Add "Cảm ơn" text to the contentDiv
        contentDiv.innerText = "Cảm ơn nhé!!!!!!!!!!!!!";
    });
});

function updateButtonStyles(changePercentage) {
    const notSubBtn = document.querySelector(".sub");
    const subBtn = document.querySelector(".notsub");

    let notSubBtnWidth = parseFloat(getComputedStyle(notSubBtn).width);
    let notSubBtnHeight = parseFloat(getComputedStyle(notSubBtn).height);

    let subBtnWidth = parseFloat(getComputedStyle(subBtn).width);
    let subBtnHeight = parseFloat(getComputedStyle(subBtn).height);

    notSubBtn.style.width = `${notSubBtnWidth * (1 - changePercentage / 100)}px`;
    notSubBtn.style.height = `${notSubBtnHeight * (1 - changePercentage / 100)}px`;

    subBtn.style.width = `${subBtnWidth * (1 + changePercentage / 100)}px`;
    subBtn.style.height = `${subBtnHeight * (1 + changePercentage / 100)}px`;
}

function resetButtonStyles() {
    const notSubBtn = document.querySelector(".notsub");
    const subBtn = document.querySelector(".sub");

    notSubBtn.style.width = "100px";
    notSubBtn.style.height = "50px";

    subBtn.style.width = "100px";
    subBtn.style.height = "50px";
}
