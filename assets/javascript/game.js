//object elements containing three characters and three 'enemy' beers

var drink = {
    malt: {
        name: "The Malt Master",
        tolerance: Math.floor(Math.random() * 75) + 50,
        drinkingAbility: Math.floor(Math.random() * 10) + 3,
    },
    gose: {
        name: "The Gose God",
        tolerance: Math.floor(Math.random() * 75) + 50,
        drinkingAbility: Math.floor(Math.random() * 10) + 3,
    },
    barrel: {
        name: "The Barrel Baron",
        tolerance: Math.floor(Math.random() * 75) + 50,
        drinkingAbility: Math.floor(Math.random() * 10) + 3,
    },

};

var bev = {

    ipa: {
        name: "IPA",
        abv: Math.floor(Math.random() * 13) + 7,
        ounces: Math.floor(Math.random() * 48) + 16,
    },

    stout: {
        name: "Stout",
        abv: Math.floor(Math.random() * 16) + 10,
        ounces: Math.floor(Math.random() * 48) + 16,
    },

    pils: {
        name: "pilsner",
        abv: Math.floor(Math.random() * 9) + 4,
        ounces: Math.floor(Math.random() * 48) + 16,
    },

};

//global variables
var chosenDrinker;
var currBeer;
var attackTol;
var attackDA;
var attackDAInit;
var defendABV;
var defendOZ;

var charPick = false;
var beerPickOne = false;
var victorTwo = false;
var victorThree = false;

//Set HTML elements/attributes to object elements

$("#malt-tol").text(drink.malt.tolerance);
$("#malt").attr("tolerance", drink.malt.tolerance);
$("#malt-da").text(drink.malt.drinkingAbility);
$("#malt").attr("da", drink.malt.drinkingAbility);

$("#gose-tol").text(drink.gose.tolerance);
$("#gose").attr("tolerance", drink.gose.tolerance);
$("#gose-da").text(drink.gose.drinkingAbility);
$("#gose").attr("da", drink.gose.drinkingAbility);

$("#barrel-tol").text(drink.barrel.tolerance);
$("#barrel").attr("tolerance", drink.barrel.tolerance);
$("#barrel-da").text(drink.barrel.drinkingAbility);
$("#barrel").attr("da", drink.barrel.drinkingAbility);

$("#ipa-abv").text(bev.ipa.abv);
$("#ipa").attr("abv", bev.ipa.abv);
$("#ipa-oun").text(bev.ipa.ounces);
$("#ipa").attr("oun", bev.ipa.ounces);

$("#stout-abv").text(bev.stout.abv);
$("#stout").attr("abv", bev.stout.abv);
$("#stout-oun").text(bev.stout.ounces);
$("#stout").attr("oun", bev.stout.ounces);

$("#pils-abv").text(bev.pils.abv);
$("#pils").attr("abv", bev.pils.abv);
$("#pils-oun").text(bev.pils.ounces);
$("#pils").attr("oun", bev.pils.ounces);


$(".player").on("click", function() {
    chosenDrinker = this;
    attackTol = $(this).attr("tolerance");
    attackDA = $(this).attr("da");
    attackDAInit = $(this).attr("da");
    $("#pick-drinker").empty();
    $("#drinker").append(chosenDrinker);
    $("#beers-on-tap").css("display", "block");
    charPick = true;
});

$(".on-tap").on("click", function() {
    if (victorThree) {
        currBeer = this;
        defendABV = $(this).attr("abv");
        defendOZ = $(this).attr("oun");
        $("#bar").append(currBeer);
    }
    if (victorTwo) {
        currBeer = this;
        defendABV = $(this).attr("abv");
        defendOZ = $(this).attr("oun");
        $("#bar").append(currBeer);
    }
    if (charPick) {
        currBeer = this;
        defendABV = $(this).attr("abv");
        defendOZ = $(this).attr("oun");
        $("#bar").append(currBeer);
        beerPickOne = true;
    }

})

$("#drink-btn").on("click", function () {
    if (victorThree) {
        attackTol = attackTol - defendABV;
        defendOZ = defendOZ - attackDA;
        attackDA = parseInt(attackDA) + parseInt(attackDAInit);
        if (attackTol <= 0) {
            alert("You lost");
        }
        if (defendOZ <=0) {
            alert("YOU WON");
        }
    }
    if (victorTwo) {
        attackTol = attackTol - defendABV;
        defendOZ = defendOZ - attackDA;
        attackDA = parseInt(attackDA) + parseInt(attackDAInit);
        if (attackTol <= 0) {
            alert("You lost");
        }
        if (defendOZ <=0) {
            $("#bar").empty();
            currBeer = "";
            victorThree = true;
            victorTwo = false; 
        }
    }

    if (beerPickOne) {
        attackTol = attackTol - defendABV;
        defendOZ = defendOZ - attackDA;
        attackDA = parseInt(attackDA) + parseInt(attackDAInit);
        if (attackTol <= 0) {
            alert("You lost");
        }
        if (defendOZ <= 0) {
            $("#bar").empty();
            currBeer = "";
            defendOZ = "";
            victorTwo = true;
            beerPickOne = false;
        }
        
    }

    console.log(attackTol);
    console.log(defendOZ);
    console.log(attackDA);
})


/*

Display correct tolerance, defendoz and attackDA in fields
make reset button

Bugs: attack button works when new competitor isn't clicked
Win isn't tracked



*/