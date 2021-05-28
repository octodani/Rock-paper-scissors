

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb!') {
    return userInput;
  } else {
    console.log('Error!');
  } 
}

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It was a tie';
  }
  if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    } 
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'Computer won';
      } else {
        return 'User won';
      }
    }

    if (userChoice === 'bomb!') {
      return 'User definitely won';
    }
  };

const playGame = () => {
  let userChoice = getUserChoice('bomb!');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




