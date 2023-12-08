# Slots: Reels and Feelss

## Overview
"Reels and Feelss" is an engaging browser slot machine game that combines the thrill of slot games with a sleek, user-friendly interface. Built using HTML, CSS, and JavaScript, this game offers an immersive experience for players looking for fun and excitement.

## Technologies Used
- HTML
- CSS
- JavaScript

## Game Link
Play "Reels and Feelss" now: [Reels and Feelss](https://slots-beta.vercel.app)

Note: There is a win Animation and sound effect so if you win , you will know.
You must hit the reset button to continue playing after 10 spins.

## Screenshots/Wireframes
![Alt text](Assets/image.png)
![Alt text](<Assets/Reels and Feels IMG.jpg>)
## Development Timeline
Here's a quick overview of our development process and milestones:

| Day         | Task                                       | Blockers                                    | Notes/Thoughts                          |
|-------------|--------------------------------------------|---------------------------------------------|-----------------------------------------|
| Friday      | Create proposal, HTML, JS, CSS files       | None                                        | Met Deadline                            |
| Saturday    | Scaffolding, Define Variables/Arrays, Init | None                                        | Met Deadline                            |
| Sunday      | Define Score, Spin Function, Win Conditions| Spin Function & Animation Issues            | Completed Wednesday                     |
| Monday      | Add Styling                                | Creative Paralysis                          | Completed Thursday                      |
| Tuesday     | Finalize MVP                               | None                                        | Finished Thursday Morning               |
| Wednesday   | Stretch Goals (Animations, Sound FX)       | None                                        | Added Reel Animations & Sound Effects   |
| Thursday    | Icebox Items (if applicable)               | None                                        |                                         |
| Friday      | Presentation Day                           | None                                        |                                         |

## Attributions
- Animations: [Animista](https://animista.net/)
- Sound Effects: [Soundsnap](https://www.soundsnap.com)

## MVPs (Minimum Viable Product)
- [x]  As a player, I to know if the spin was a win or a loss
- [x]  As a player, I want to know what spin number of 10 am i on 
- [x] As a player, I want to know what  my score at any current time
- [x] As a player who requires assistive technologies, I would like accessibility features so that I'm not     left out of enjoying the game.
- [x] As a player I would like to be able to restart the game after my 10 spins are over 
- [x]  As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game

#
**PsudoCode**
Initialize the Game:

Set up initial game variables.
Initialize the score and spin counter variables to 0.
Prepare the game board (grid) to display the slot arrays.
Create Data Structures:

Define Arrays for Slots: Array to hold the symbols or numbers for each slot.
Array or Function for Winning Conditions: To determine winning combinations.
Set Up Game Board:

Create a Grid layout to display slot arrays.
Design the interface using HTML/CSS for a visually appealing and user-friendly experience.
Game Mechanics:

Function to Spin Slots:
Randomize symbols in each slot array.
Render/update the grid with new symbols for each spin.
Function to Track Spins:
Increment spin counter with each spin.
Function to Calculate Score:
Check for winning combinations after each spin.
Update the score based on winning conditions.
Reset or evaluate the score after a set number of spins (e.g., 10).
Win/Loss Feedback:

Display messages to declare wins or losses after each spin.
Optionally, provide feedback on the number of spins left or the current score.
Render Function:

A function to render the game board and update the display after each spin.
Compare Arrays for Winning Conditions:

A function or logic to compare the slot arrays against winning conditions

**NextSteps**
-Add a currency 
-Fix the animation to be a proper slot spin

