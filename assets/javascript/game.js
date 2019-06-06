 


$(document).ready(function () {
    // --------- winsNum
    var wins = 0;
    // --------- lossesNum
    var losses = 0;
    // --------- defeatMessage
    var loser = "You lost, brotha."
    // --------- victoryMessage
    var winner = "You are a winner!"
    // --------- numToMatch50To100
    var numToMatch50To100 = Math.floor(Math.random() * 51) + 50;
    // --------- myRandomNum1To12
    var myScore = 0;



    populateGems();

    // --------- numToMatch()
    function numToMatch() {
        if (reset === true) {
            numToMatch50To100 = Math.floor(Math.random() * 50) + 50; // numToMatch
            document.getElementById("numToMatch").innerHTML = numToMatch50To100;
            console.log("numToMatch(): " + numToMatch50To100);
            return numToMatch50To100;
        }
    }

    // --------- 1 to 12
    function myRandomNum1To12() {
        return Math.floor(Math.random() * 12) + 1;
    }

    // --------- populate gems
    function populateGems() {
        var imgTags = $('.myImg')   // Creates an array of my images' tags
        for(var i = 0; i < imgTags.length; i++) { // iterates through all images and inserts random values in each
            $(imgTags[i]).attr('data-value', myRandomNum1To12); // add data-value to each image w Random1To12
            // console.log("image tags: " + imgTags[i] + ", data value: " + imgTags[i].attr('data-value'));
        }
    }


    // ----------------------- ON CLICK 
    $(".myImg").click(function() {   // on click, grab all html elements w class myImage and make it an object!
        // console.log($(this).attr('data-value'))  // console log the attribute data-value of all image objects

        // grab my images and turn their data value to intiger
        var gemValue = parseInt($(this).attr('data-value'));

        // increase score
        myScore = myScore + gemValue;
        
        // console.log(gemValue, myScore, numToMatch50To100);

        // Display numbers
        document.getElementById("myNumber").innerHTML = myScore;
        document.getElementById("numToMatch").innerHTML = numToMatch50To100;



        // Victory or defeat?
        if (myScore === numToMatch50To100) {
            myScore = 0;
            wins++;
            numToMatch50To100 = Math.floor(Math.random() * 51) + 50;
            document.getElementById("victoryMsg").innerText = winner;
            document.getElementById("winsNum").innerHTML = wins;
            populateGems();
        }
        else if (myScore > numToMatch50To100) {
            myScore = 0;
            losses++;
            numToMatch50To100 = Math.floor(Math.random() * 51) + 50;
            document.getElementById("victoryMsg").innerHTML = loser;
            document.getElementById("lossesNum").innerHTML = losses;
            populateGems();
        }
    });
 


});
