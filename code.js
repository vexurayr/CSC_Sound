function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function checkCreds() {
    //Put the fName input into firstname var
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    //Name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name String has too many characters!";
    } else if (fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Please enter a name.";
    }

    //Badge number validation
    if (badgeNum > 999 || badgeNum < 1) {
        document.getElementById("loginStatus").innerHTML = "Badge number not applicable.";
    }

    if (fullName.length < 20 && fullName.length > 1 && badgeNum < 1000 && badgeNum >= 1) {
        alert("Access Granted, Welcome " + fullName + ".");
        location.replace("index.html");
    }
}

//used to play space station sounds
function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function playHeddy() {
    mySound = new sound("Ketchup On It.mp3");
    mySound.play();
}

//play any sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function countdownTimer() {
    var timer = 50;
    //start at 50 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 000);
    //45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);
    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);
    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 15000);
    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 20000);
    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 25000);
    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 30000);
    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 35000);
    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 40000);
    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 45000);
    //4 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 46000);
    //3 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 47000);
    //2 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 48000);
    //1 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 1;
    }, 49000);
    //Blastoff
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function ranNumGen() {
    var numb = Math.floor(Math.random() * 100);
    document.getElementById("RndNum").innerHTML = numb;
}

//Play Craps function
function play() {
    //generates die1 number between 0-6 rounded up
    var die1 = Math.ceil(Math.random() * 6);

    //generates die2 number between 0-6 rounded up
    var die2 = Math.ceil(Math.random() * 6);


    //adds the dice numbers together
    var sum = die1 + die2
    //reports the results of die1
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
    //reports the results of die2
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    //reports the results of die1 + die2
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    //informs the user they have lost if the dice = 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "Craps, you lose!";
    }
    //informs the user they have won if the dice are equivalent and both even
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "Doubles, you win!";
    }
    //informs the player that they have drawn if the dice and sum are in any other state
    else {
        document.getElementById("finalRes").innerHTML = "Draw, try again.";
    }
}

function betterCtdnTimer() {
    //Build countdown timer using for loop, 50-0 by 5s
    var countDn = 50;
    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            if (countDn == 0) {
                document.getElementById("ctdnTimer").innerHTML = "Blastoff!";
            } else if (countDn <= 25) {
                document.getElementById("ctdnTimer").innerHTML =
                    "Warning: Less than half way to launch, time left = " + countDn;
            } else {
                document.getElementById("ctdnTimer").innerHTML = countDn;
            }
            countDn = countDn - 5;

        }, i * 5000);
    }

}