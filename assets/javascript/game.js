



// create and display random nnumber between 19 - 120

// each crystal should have a random hidden value between 1 - 12  

 

$(document).ready(function () {
    // --------- winsNum
    var wins = 0;
    // --------- lossesNum
    var losses = 0;
    // --------- reset
    var reset = true;
    // --------- randomNumBetween0and50
    var randomNumBetween0and50 = 0;
    // --------- myRandomNumBetween0and12
    var myRandomNumBetween0and12 = 0;
    // --------- myRandomAddedNum0and12
    var myRandomAddedNum0and12 = 0;
    // --------- defeatMessage
    var loser = "You lost, my brotha."
    // --------- victoryMessage
    var winner = "You are a winner!"





    // --------- numToMatch()
    function numToMatch() {
        if (reset === true) {
            randomNumBetween0and50 = Math.floor(Math.random() * 50); // numToMatch
            document.getElementById("numToMatch").innerHTML = randomNumBetween0and50;
            console.log("numToMatch(): " + randomNumBetween0and50);
            return randomNumBetween0and50;
        }
        else {
            console.log("numToMatch() 'else': " + randomNumBetween0and50);
            return randomNumBetween0and50;
        }
    }

    // --------- myRandomNum()
    function myRandomNum() {
        if (reset === true) {
            myRandomNumBetween0and12 = Math.floor(Math.random() * 12);
            console.log("myRandomNum() reset = true, num = " + myRandomNumBetween0and12);
            return myRandomNumBetween0and12;
        }
        else {
            console.log("reset false");
            return myRandomNumBetween0and12;
        }
    } 

    // --------- addMyNums()
    function addMyNums(myBeginningNum) {
        console.log("addMyNums() -> myBeginningNum: " + myBeginningNum);
        myRandomAddedNum0and12 = myRandomAddedNum0and12 + myBeginningNum;
        console.log("addMyNums() number: " + myRandomAddedNum0and12);
        document.getElementById("myNumber").innerHTML = myRandomAddedNum0and12;
    }

    // --------- victory()
    function victory() {
        wins += 1;
        reset = true;
        document.getElementById("winsNum").innerHTML = wins;
        document.getElementById("victoryMsg").innerHTML = winner;
    }

    // --------- defeat()
    function defeat() {
        losses += 1;
        reset = true;
        document.getElementById("lossesNum").innerHTML = losses;
        document.getElementById("victoryMsg").innerHTML = loser;
    }


    // ----------------------- ON CLICK 
    $("#img1").click(function () {
        console.log("Reset: " + reset);
        randomNumBetween0and50 = numToMatch();
        myRandomNumBetween0and12 = myRandomNum();
        console.log("myRandomNum(): " + myRandomNum())
        myRandomAddedNum0and12 = addMyNums(myRandomNumBetween0and12);


        // --------- Lose message
        if (myRandomAddedNum0and12 > randomNumBetween0and50) {
            defeat();
        }
        // --------- victoryMsg
        else if (myRandomAddedNum0and12 === randomNumBetween0and50) {
            victory();
        }
    });



});