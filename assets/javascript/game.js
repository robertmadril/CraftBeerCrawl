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

};

var bev = {

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

    pils: {
        name: "pilsner",
        abv: Math.floor(Math.random() * 101),
        ounces: Math.floor(Math.random() * 101)
    },

};

var chosenDrinker;
var currBeer;
var playPick = false;
var beerPick = false;

$("#malt-tol").text("Tolerance: " + drink.malt.tolerance);
$("#malt-da").text("Drinking Ability: " + drink.malt.drinkingAbility);
$("#gose-tol").text("Tolerance: " + drink.gose.tolerance);
$("#gose-da").text("Drinking Ability: " + drink.gose.drinkingAbility);
$("#barrel-tol").text("Tolerance: " + drink.barrel.tolerance);
$("#barrel-da").text("Drinking Ability: " + drink.barrel.drinkingAbility);

$("#ipa-abv").text("ABV: " + bev.ipa.abv);
$("#ipa-oun").text("Ounces: " + bev.ipa.ounces);
$("#stout-abv").text("ABV: " + bev.stout.abv);
$("#stout-oun").text("Ounces: " + bev.stout.ounces);
$("#pils-abv").text("ABV: " + bev.pils.abv);
$("#pils-oun").text("Ounces: " + bev.pils.ounces);


function drinkAction() {
}

$(".player").on("click", function() {
    chosenDrinker = this;
    $("#pick-drinker").empty();
    $("#drinker").append(chosenDrinker);
    $("#beers-on-tap").css("display", "block");
    playPick = true;
});

$(".on-tap").on("click", function() {
    if (playPick) {
        currBeer = this;
        $("#bar").append(currBeer);
        beerPick = true;
    }

})

$("#drink-btn").on("click", function () {
    if (beerPick === true && playPick === true) {

    }
})


/*

Attack button:
Decrease chosen character tolerance by current beer ABV, display change
Decrease current beer ounces by chosen character drinking ability, display change

if current beer ounces <= 0 pick next enemy
//If last enemy ounces <= 0, game is over, win
//If tolerance <= 0, game is over, lost



*/