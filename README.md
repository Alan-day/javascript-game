# javascript-game

About the game

A simple card game developed in vanilla javascript

The game consists of 5 rounds where user plays against a computer. The goal of the game is to win more rounds than the opponent.
Game is played using cards that have 2 attributes: attack and defence.
User is given a random selection of 5 cards out of 20 available ones. Each round begins with opponent's attack to which user has to respond with his/her own card.
After selecting the card user starts combat using a button. A dice with face values 1-6 is rolled and the value on which it lands multiplies the attack attribute of the card selected by user. Then the card's attributes are compared against computer's card where a stronger card wins the round\*. Combat ends, point is added to the winner and new round begins. After 5th round ends points are displayed on the screen and the player with more points wins the game.

\*combat- determining the stronger card is done by taking away user's strengh by a value of computer's card strength substracted by user's defence strength

DRAGON
attack: 12
defence: 5

example of computer card

MIGHTY HYDRA  
attack: 30

creaturesComputer =[]
creaturesUser = []

handle

const dice = Math.floor(Math.random() \* 6) +1;

example of user card

DRAGON
attack: 12
defence: 5

example of computer card

MIGHTY HYDRA  
attack: 30
