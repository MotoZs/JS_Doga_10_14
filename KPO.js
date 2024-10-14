function stonePaperScissorsWinner(player1, player2) {
    if (player1 === player2) {
        return 'The game is a tie.';
    } else if (
        (player1 === 0 && player2 === 1) ||
        (player1 === 1 && player2 === 2) ||
        (player1 === 2 && player2 === 0)   
    ) {
        return 'The first player wins.';
    } else {
        return 'The second player wins.';
    }
}

const player1 = parseInt(prompt("Player 1, enter your choice (0: Paper, 1: Rock, 2: Scissors):"));
const player2 = parseInt(prompt("Player 2, enter your choice (0: Paper, 1: Rock, 2: Scissors):"));

const result = stonePaperScissorsWinner(player1, player2);
console.log(result);
