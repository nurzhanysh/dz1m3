function validateGmail(email) {
    const gmailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;
    return gmailRegex.test(email);
}

document.getElementById("gmail_button").addEventListener("click", function () {
    const emailInput = document.getElementById("gmail_input").value;
    const resultDisplay = document.getElementById("gmail_result");

    if (validateGmail(emailInput)) {
        resultDisplay.textContent = "Корректный Gmail адрес";
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = "Некорректный Gmail адрес";
        resultDisplay.style.color = "red";
    }
});
function moveBlock(block, maxPosition) {
    let position = 0;

    function animate() {
        if (position < maxPosition) {
            position += 5;
            block.style.left = `${position}px`; 
            requestAnimationFrame(animate); 
        }
    }

    animate(); 
}


const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
const maxPosition = parentBlock.offsetWidth - childBlock.offsetWidth; 
moveBlock(childBlock, maxPosition);
