



// create and display random nnumber between 19 - 120

// each crystal should have a random hidden value between 1 - 12  





$(document).ready(function () {

    // --------- numToMatch
    var randomNumBetween0and50 = Math.floor(Math.random() * 50);
    console.log("random #: " + randomNumBetween0and50);
    document.getElementById("numToMatch").innerHTML = randomNumBetween0and50;


    // --------- winsNum
    var wins = 0;
    // --------- lossesNum
    var losses = 0;
     


    var myRandomAddedNum0and12 = 0;
    // --------- myNumber
    $("img").click(function () {
        var myRandomNumBetween0and12 = Math.floor(Math.random() * 12);
        console.log("my random num: " + myRandomNumBetween0and12);
        myRandomAddedNum0and12 = myRandomAddedNum0and12 + myRandomNumBetween0and12;
        console.log("my random num added: " + myRandomAddedNum0and12);
        document.getElementById("myNumber").innerHTML = myRandomAddedNum0and12;

        // --------- victoryMsg
        if (randomNumBetween0and50 === myRandomAddedNum0and12) {
            document.getElementById("victoryMsg").innerHTML = "You are a winner!!"
            wins += 1;
            myRandomAddedNum0and12 = 0;
            document.getElementById("winsNum").innerHTML = wins;
            randomNumBetween0and50 = Math.floor(Math.random() * 50);
            document.getElementById("numToMatch").innerHTML = randomNumBetween0and50;
        }
        // --------- Lose message
        else if (randomNumBetween0and50 < myRandomAddedNum0and12) {
            document.getElementById("victoryMsg").innerHTML = "You lost, my brotha."
            losses += 1;
            myRandomAddedNum0and12 = 0;
            document.getElementById("lossesNum").innerHTML = losses;
            randomNumBetween0and50 = Math.floor(Math.random() * 50);
            document.getElementById("numToMatch").innerHTML = randomNumBetween0and50;
        }
    });
});