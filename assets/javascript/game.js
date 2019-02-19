$("document").ready( function() {
//object elements containing three characters and three 'enemy' beers

var drink = {
    malt: {
        name: "The Malt Master",
        tolerance: Math.floor(Math.random() * 75) + 50,
        drinkingAbility: Math.floor(Math.random() * 5) + 1,
    },
    gose: {
        name: "The Gose God",
        tolerance: Math.floor(Math.random() * 75) + 50,
        drinkingAbility: Math.floor(Math.random() * 5) + 1,
    },
    barrel: {
        name: "The Barrel Baron",
        tolerance: Math.floor(Math.random() * 75) + 50,
        drinkingAbility: Math.floor(Math.random() * 5) + 1,
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
var displayTol;
var displayDA;
var displayOZ;

var charPick = false;
var beerPickOne = false;
var victorOne = false;
var beerPickTwo = false;
var victorTwo = false;
var beerPickThree = false;
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

$("#victor-msg").text("Choose a bar patron. Choose a beer. Drink up.")
//function to assign child ID's to appropriate display

var assignCharID = function (t) {
    if (t === "malt") {
        displayTol = $("#malt-tol");
        displayDA = $("#malt-da")
    }
    if (t === "gose") {
        displayTol = $("#gose-tol");
        displayDA = $("#gose-da");
    }

    if (t === "barrel") {
        displayTol = $("#barrel-tol");
        displayDA = $("#barrel-da");
    }
}

var assignBeerID = function (t) {
    if (t === "ipa") {
        displayOZ = $("#ipa-oun");
    };

    if (t === "stout") {
        displayOZ = $("#stout-oun");
    };

    if (t === "pils") {
        displayOZ = $("#pils-oun");
    };
}


//game play

//Player click function

$(".player").on("click", function () {
    chosenDrinker = this;
    attackTol = $(this).attr("tolerance");
    attackDA = $(this).attr("da");
    attackDAInit = $(this).attr("da");
    $("#pick-drinker").empty();
    $("#victor-msg").empty();
    $("#drinker").append(chosenDrinker);
    $("#beers-on-tap").css("display", "block");
    assignCharID(this.id);
    charPick = true;
});

$(".on-tap").on("click", function () {
    if (victorTwo && !beerPickTwo) {
        currBeer = this;
        defendABV = $(this).attr("abv");
        defendOZ = $(this).attr("oun");
        $("#bar").append(currBeer);
        assignBeerID(this.id);
        beerPickThree = true;
        victorTwo = false;
    }
    if (victorOne && !beerPickOne) {
        currBeer = this;
        defendABV = $(this).attr("abv");
        defendOZ = $(this).attr("oun");
        $("#bar").append(currBeer);
        assignBeerID(this.id);
        beerPickTwo = true;
        victorOne = false;

    }
    if (charPick) {
        currBeer = this;
        defendABV = $(this).attr("abv");
        defendOZ = $(this).attr("oun");
        $("#bar").append(currBeer);
        assignBeerID(this.id);
        $("#drink-btn").css("display", "block");
        charPick = false;
        beerPickOne = true;
    }

})

$("#drink-btn").on("click", function () {
    if (!victorTwo && beerPickThree) {
        attackTol = attackTol - defendABV;
        defendOZ = defendOZ - attackDA;
        attackDA = parseInt(attackDA) + parseInt(attackDAInit);
        displayTol.text(attackTol);
        displayDA.text(attackDA);
        displayOZ.text(defendOZ);
        if (attackTol <= 0) {
            $("#drinker").empty();
            $("#beers-on-tap").empty();
            $("#bar").empty();
            $("#drink-btn-con").empty();
            $("#reset-btn").text("Go Out Again");
            $("#victor-msg").text("Looks like you had too much. I'll call you a Lyft.")
        }
        if (defendOZ <= 0) {
            $("#drinker").empty();
            $("#beers-on-tap").empty();
            $("#bar").empty();
            $("#drink-btn-con").empty();
            $("#reset-btn").text("Go Out Again");
            $("#victor-msg").text("You made it to closing time! You don't have to go home, but you can't stay here.");
        }
    }
    if (!victorOne && beerPickTwo) {
        attackTol = attackTol - defendABV;
        defendOZ = defendOZ - attackDA;
        attackDA = parseInt(attackDA) + parseInt(attackDAInit);
        displayTol.text(attackTol);
        displayDA.text(attackDA);
        displayOZ.text(defendOZ);
        if (attackTol <= 0) {
            $("#drinker").empty();
            $("#beers-on-tap").empty();
            $("#bar").empty();
            $("#drink-btn-con").empty();
            $("#reset-btn").text("Go Out Again");
            $("#victor-msg").text("Looks like you had too much. I'll call you a Lyft.")
        }
        if (defendOZ <= 0) {
            $("#bar").empty();
            currBeer = "";
            defendOZ = 0;
            victorTwo = true;
            beerPickTwo = false;
        }
    }

    if (beerPickOne && !charPick) {
        attackTol = attackTol - defendABV;
        defendOZ = defendOZ - attackDA;
        attackDA = parseInt(attackDA) + parseInt(attackDAInit);
        displayTol.text(attackTol);
        displayDA.text(attackDA);
        displayOZ.text(defendOZ);
        if (attackTol <= 0) {
            $("#drinker").empty();
            $("#beers-on-tap").empty();
            $("#bar").empty();
            $("#drink-btn-con").empty();
            $("#reset-btn").text("Go Out Again");
            $("#victor-msg").text("Looks like you had too much. I'll call you a Lyft.")
        }
        if (defendOZ <= 0) {
            $("#bar").empty();
            currBeer = "";
            defendOZ = 0;
            victorOne = true;
            beerPickOne = false;
        }

    }
})

$("#reset-btn").on("click", function () {
   /* chosenDrinker = "";
    currBeer = "";
    attackTol = 0;
    attackDA = 0;
    attackDAInit = 0;
    defendABV = 0;
    defendOZ = 0;
    displayTol = "";
    displayDA = "";
    displayOZ = "";

    charPick = false;
    beerPickOne = false;
    victorOne = false;
    beerPickTwo = false;
    victorTwo = false;
    beerPickThree = false;
    victorThree = false;

    $("#drinker").empty();
    $("#beers-on-tap").empty();
    $("#bar").empty();
    $("#victor-msg").empty(); */

    //placehold until figure out how to re-load hidden HTML documents
    window.location.reload();
})

})