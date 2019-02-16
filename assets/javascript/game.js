var drink = {
    malt: {
        name: "The Malt Master",
        tolerance: Math.floor(Math.random() * 101),
        drinkingAbility: Math.floor(Math.random() * 10),
    },
    gose: {
        name: "The Gose God",
        tolerance: Math.floor(Math.random() * 101),
        drinkingAbility: Math.floor(Math.random() * 15),
    },
    barrel: {
        name: "The Barrel Baron",
        tolerance: Math.floor(Math.random() * 101),
        drinkingAbility: Math.floor(Math.random() * 15),
    },

    ipa: {
        name: "IPA",
        abv: Math.floor(Math.random() * 15),
        ounces: Math.floor(Math.random() * 40),
    },

    stout: {
        name: "Stout",
        abv: Math.floor(Math.random() * 15),
        ounces: Math.floor(Math.random() * 40),
    },

    pilsner: {
        name: "pilsner",
        abv: Math.floor(Math.random() * 101),
        ounces: Math.floor(Math.random() * 101)
    },

};

function drinkAction(c, b) {
    c.tolerance = c.tolerance - b.abv;
    c.drinkingAbility = c.drinkingAbility + c.drinkingAbility;
    b.ounces = b.ounces - c.drinkingAbility;
}



/*

Create a game flow that:

Starts with all three characters displayed in pick drinker and random tolerance/drinking ability assigned at start of game
Player chooses a character
That character is moved into the drinker section, beers populate with random ABV and "ounces"
Player picks a beer and it is moved into the bar

Play presses drink button to:
call drinkAction function



*/

$("#bar").on("click", function() {
    drinkAction();
//If last enemy ounces <= 0, game is over, win
//If tolerance <= 0, game is over, lost
})