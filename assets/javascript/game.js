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

var chosenDrinker = ""

function drinkAction(c, b) {
    c.tolerance = c.tolerance - b.abv;
    c.drinkingAbility = c.drinkingAbility + c.drinkingAbility;
    b.ounces = b.ounces - c.drinkingAbility;
}

$("#malt-pick").on("click", function() {
    chosenDrinker = "#malt-pick";
    $("#pick-drinker").empty();
    $("#drinker").append("<div>MALT PICK</div>")
});

$("#gose-pick").on("click", function() {
    chosenDrinker = "#gose-pick";
    $("#pick-drinker").empty();
    $("#drinker").append("<div>GOSE PICK</div>")
});

$("#barrel-pick").on("click", function() {
    chosenDrinker = "#barrel-pick";
    $("#pick-drinker").empty();
    $("#drinker").append("<div>BARREL PICK</div>");

});

$("#drink-btn").on("click", function() {
    drinkAction();
})


/*

Create a game flow that:
That character is moved into the drinker section, beers populate with random ABV and "ounces"
Player picks a beer and it is moved into the bar

Play presses drink button to:
call drinkAction function



*/
//If last enemy ounces <= 0, game is over, win
//If tolerance <= 0, game is over, lost
})