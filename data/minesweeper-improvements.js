const goals = [
    {goals: 'Work out all visual bugs', done: true},
    {goals: 'Work on styling my game to  make it more visually appealing', done: false},
    {goals: "Clean up and structure code to make it easier to read", done: true},
    {goals: "Make function to make different size boards instead of doing 10x10", done: false},
    {goals: "Set difficulty depending on board size that has been picked", done: false},
    {goals: "Implement sounds when a tile is clicked, and a exploding sound when the player clicks on a mine", done: false},
    {goals: "Add an image for the flag when the player right clicks a tile", done: false},
    {goals: "Add a limit count for flags placed, and adjusted depending on difficulty", done: false},
    {goals: "Add a timer to give players an incentive to clear faster for best high score", done: false},
    {goals: "Make a function that holds all data for high scores for each difficulty", done: false},
    {goals: "Work on README section on github to make it look more visually professional", done: false},
];

module.exports = {
    getAll: function() {
        return goals;
    }
};