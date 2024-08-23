function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let resultText = '';
    let resultImage = '';

    if (userChoice === computerChoice) {
        resultText = "It's a tie!";
        resultImage = 'images/tie.png';  
    } else 
    
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            resultText = 'You win!';
            resultImage = 'images/win.jpg';  
        } else {
            resultText = 'You lose!';
            resultImage = 'images/lose.png';  
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            resultText = 'You win!';
            resultImage = 'images/win.jpg';  
        } else {
            resultText = 'You lose!';
            resultImage = 'images/lose.png';  
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            resultText = 'You win!';
            resultImage = 'images/win.jpg';  
        } else {
            resultText = 'You lose!';
            resultImage = 'images/lose.png';  
        }
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('result-image').src = resultImage;
}