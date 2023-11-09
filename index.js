Certainly! If you want to incorporate a button to trigger this code, you can wrap the existing code in a function and then call that function when the button is clicked. Here's an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Game</title>
</head>
<body>

    <img class="img1" src="images/dice1.png" alt="Player 1 Dice">
    <img class="img2" src="images/dice1.png" alt="Player 2 Dice">
    <h1>Ready to Roll?</h1>
    <button onclick="rollDice()">Roll Dice</button>

    <script>
        function rollDice() {
            // Generate a random number between 1 and 6 to player 1's dice.
            var randomNumberPlayer1Dice = Math.floor(Math.random() * 6) + 1;
            var randomSidePlayer1Dice = "dice" + randomNumberPlayer1Dice + ".png";
            var randomImageAttributePlayer1 = "images/" + randomSidePlayer1Dice;
            var imagePlayer1 = document.querySelector(".img1");
            imagePlayer1.setAttribute("src", randomImageAttributePlayer1);

            // Generate a random number between 1 and 6 to player 2's dice.
            var randomNumberPlayer2Dice = Math.floor(Math.random() * 6) + 1;
            var randomSidePlayer2Dice = "dice" + randomNumberPlayer2Dice + ".png";
            var randomImageAttributePlayer2 = "images/" + randomSidePlayer2Dice;
            var imagePlayer2 = document.querySelector(".img2");
            imagePlayer2.setAttribute("src", randomImageAttributePlayer2);

            // Game conditions.
            if (randomNumberPlayer1Dice > randomNumberPlayer2Dice) {
                document.querySelector("h1").innerHTML = "🏆 Player 1 Wins! 🏆";
            } else if (randomNumberPlayer1Dice < randomNumberPlayer2Dice) {
                document.querySelector("h1").innerHTML = "🏆 Player 2 Wins! 🏆";
            } else {
                document.querySelector("h1").innerHTML = "Draw...😭 Try Again!";
            }
        }
    </script>
</body>
</html>
```

Now, the dice roll and game conditions will be executed when the "Roll Dice" button is clicked.