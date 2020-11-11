# Tic_Tac_Toe - CATS AND DRAGONS!

#### Choose a side in this epic rendition of the classic game!

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Author](#author)
- [Challenges](#challenges)
- [Wins](#wins)
- [Contributors](#contributors)

## Introduction

The aim of [Tic-Tac-Toe](https://github.com/mainlyetcetera/tic_tac_toe) is to enjoy the classic game of tic-tac-toe with a twist! Your pieces are dragons and cats!!

[Here](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html) are the basic specs for the game.
---

## Motivation

The motivation for this project was to put together everything I learned in Module 1. From `event delegation` to *writing dry code*, everything was to come into play here.

---

## Features

- [Play Tic-Tac-Toe](#Play-Tic-Tac-Toe)
- [Enjoy your cats and dragons!](#Enjoy-your-cats-and-dragons!)
- [Keep track of your wins!](#Keep-track-of-your-wins!)
- [Keep track of your wins even if you refresh the page!](#Keep-track-of-your-wins-even-upon-refresh!)

#### Play Tic-Tac-Toe

Enjoy the classic game of Tic-Tac-Toe!

#### Enjoy your cats and dragons!

Now your game pieces are **CATS** and **DRAGONS**!! No more boring `X's` and `O's`. Tic-Tac-Toe just leveled up!

#### Keep track of your wins!

Relax as the game keeps track of your wins for you! No more dispute with your friend as to who is the champion!

#### Keep track of your wins even upon refresh!

No, your opponent cannot hope to refresh the page and see the counts disappear! Continue to show your dominance through a page refresh!

---

## Technologies

1. JavaScript ES5
2. CSS3
3. HTML
4. Github
5. Chrome Developer Tools
6. Firefox Developer Tools

## Architecture

The overall architecture for this project is:

- 1 **HTML** file housing the components of the page
- 3 **JavaScript** files handling all functionality
  - these files are all housed in a `src` directory
- 1 **CSS** file handling the styling

### Reasoning for Architecture

I felt one **HTML** and **CSS** file was sufficient as there is currently only one page in the project. Perhaps when I add to the project, it may be worth adding more pages here to help handle that load. I used three JavaScript files:
  1. `player.js`
  1. `game.js`
  1. `main.js`

One of the main goals of the project was to cleanly separate the data model and the DOM. These three files reflect this goal. The game involves two classes, the `Player` class and the `Game` class. My goal was to be able to run the entire game from the console using only methods from these two classes. The `Game` class held the majority of the game's functionality, while the `Player` class held a smaller portion. The `Player` class allowed for the creation of `Player` instances that the game could use. It also allowed me to save the wins and win counts of the player instances via *local storage*, another key feature of the application. The `Game` class held the methods to place pieces on the game board, declare a win or draw depending on the order of the pieces, and start a new game once the current game had concluded. Upon a game's conclusion, the `Game` class ran a method telling the `Player` instances to save the board and increment their win count in the event that that player won. Of course, since at this point the game existed only in the data model, there were several `console.logs` to allow me to see if my game was working!


## Deployment
### https://github.com/mainlyetcetera/tic_tac_toe

## Challenges

- accepting event delegation instead of my comfort level of a multitude of query selectors
- adding the disabled tag to HTML elements with JavaScript
- making checkForWin functions take parameters to be D.R.Y.

## Wins

- reaching out to my mentor for help instead of struggling with challenges too long!
- found several opportunities to reuse functions, keeping the code as D.R.Y. as I could
- created an entire app by myself!
- overcame a couple bugs that were the result of event delegation, allowing for oddities when clicking right on the edge of the game board

## Future Features

`Just a few ideas for the future:`

- allow players to easily choose their own player icon
  - update player icons displaying on main page to reflect that
- allow players ways to choose who goes first, like flipping a coin or guessing a number
- switch the background view on command
- place a random piece at the beginning of the game
- set up timers so players only have a few seconds to make a move!
- put in more imaginative win messages
- have pieces fade in and out

## Author
<table>
  <tr>
    <td> Eric Campbell <a href="https://github.com/mainlyetcetera">GitHub</td>
  </tr>
<td><img src="https://avatars0.githubusercontent.com/u/70294115?s=460&u=b24fae5febb30e7d1c9507c51ee760dba5e396e5&v=4" alt="Eric Campbell's lovely face" width="150" height="auto" /></td>
</table>

## Contributors

##### Thank you for your contributions!

- For his help and constant sanity checks: <a href="https://github.com/Josephhaefling">Joe Haefling</a>
