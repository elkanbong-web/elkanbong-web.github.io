const page1b = document.querySelector("#page1b");
const page2b = document.querySelector("#page2b");
const page3b = document.querySelector("#page3b");
var allpages = document.querySelectorAll(".page");

//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
        onepage.classList.remove("show");
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
    setTimeout(function () {
        onepage.classList.add("show");
    }, 10);
    bigword.style.display = "none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1b.addEventListener("click", function () {
    show(1);
});
page2b.addEventListener("click", function () {
    show(2);
});
page3b.addEventListener("click", function () {
    show(3);
});
hideall();
// First page
const icon = document.querySelector("#Icon");
const menuItemsList = document.querySelector("nav");

icon.addEventListener("click", toggleMenus);

function toggleMenus() {
    menuItemsList.classList.toggle("menuShow");

    if (menuItemsList.classList.contains("menuShow")) {
        icon.innerHTML = "Close Menu";
    } else {
        icon.innerHTML = "Open Menu";
    }
}
const bigword = document.querySelector(".bigword");
// function goHome() {
//     hideall();

//     bigword.style.display = "block";
// }
// const homeButton = document.querySelector("#home");

homeButton.addEventListener("click", goHome);
const lines = document.querySelectorAll(
    "#line1, #line2, #line3, #line4, #line5, #line6, #line7"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

lines.forEach(function (line) {
    observer.observe(line);
});
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");
const line6 = document.getElementById("line6");
let openButtons = document.querySelectorAll(".timeline .click");

for (let openBtn of openButtons) {

    openBtn.addEventListener("click", function(event) {

        let timeline = event.currentTarget.closest(".timeline");
        let overlay = timeline.querySelector("[id^='overlay']");

        overlay.style.display = "flex";

        line2.style.display = "none";
        line3.style.display = "none";
        line4.style.display = "none";
        line5.style.display = "none";
        line6.style.display = "none";

        setTimeout(function() {
            overlay.classList.add("showOverlay");
        }, 10);
    });
}
let closeButtons = document.querySelectorAll(".closeBtn");

for (let closeBtn of closeButtons) {

    closeBtn.addEventListener("click", function(event) {

        let timeline = event.currentTarget.closest(".timeline");
        let overlay = timeline.querySelector("[id^='overlay']");

        overlay.classList.remove("showOverlay");

        setTimeout(function() {

            overlay.style.display = "none";

            line2.style.display = "block";
            line3.style.display = "block";
            line4.style.display = "block";
            line5.style.display = "block";
            line6.style.display = "block";

        }, 100);
    });
}

//Second page for js
// Quiz functions for design
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
function restartQuiz() {
    var inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');

    inputs.forEach(function (input) {
        input.checked = false;
    });
    scorebox.innerHTML = "Score resetted!";
    questionquiz.style.display = "block";
    btnSubmit.style.display = "block";
}
// Quiz for Uses of Archery
const quizbox = document.querySelector(".quiz");
const startquiz = document.querySelector(".startquiz");
const closequiz = document.querySelector(".close");
const questionquiz = document.querySelector("#submission");
// const nosubmit = document.querySelector("#noSubmit");
const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var score = 0;
function CheckAns() {
    score = 0;
    let ansarray = ["Correct1", "Correct2", "Correct3", "Correct4", "Correct5"];
    for (let i = 0; i < ansarray.length; i++) { checkoneans(i + 1, ansarray[i]); }
    questionquiz.style.display = "none";
    btnSubmit.style.display = "none";
    scorebox.style.display = "block";
    scorebox.innerHTML = "Score:" + score + "<p>Answer:</p> <p>Q1 - Option 3</p><p>Q2 - Sibudu Cave</p><p>Q3 - Long-Ranged</p><p>Q4 - Olympic Sport</p><p>Q5 - Kim Woojin</p>";
}
function checkoneans(qNo, CoAns) {
    let cssSel = `input[name='q${qNo}']:checked`;
    let qtemp = document.querySelector(cssSel).value;
    console.log(qtemp); //check q2 value retrieved
    if (qtemp == CoAns) score++;
}

function openquiz() {
    quizbox.style.display = "block";
    startquiz.style.display = "none";
    closequiz.style.display = "block";
}
function closes() {
    quizbox.style.display = "none";
    startquiz.style.display = "block";
    closequiz.style.display = "none";
}
startquiz.addEventListener("click", openquiz);
closequiz.addEventListener("click", closes);


//Third page js

//Actual Game
//Enemy variable
const enemy1 = document.getElementById("enemy1");
const enemy2 = document.getElementById("enemy2");
const enemy3 = document.getElementById("enemy3");

//Archer and arrow Variable
const arrow = document.getElementById("arrow");
var arrowX = 120;
const mobileshoot = document.getElementById("mobileArrow");
const archer = document.getElementById("archer");
// Game timer and score
const gametimer = document.getElementById("timer");
const gamescoreh = document.getElementById("gamescore");
var archerY = 175;
var gameRunning = false;
var arrowFlying = false;
const gamebox = document.querySelector(".gamebox");
const gameover = document.getElementById("over");
const enemyX = [650, 650, 650];
var timeLeft;
var timerInterval;
function startTimer() {

    timeLeft = 30;

    gametimer.innerHTML = "Timer: " + timeLeft;

    timerInterval = setInterval(function () {

        timeLeft--;

        gametimer.innerHTML = "Timer: " + timeLeft;

        // Time is up
        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            gameRunning = false;

            gametimer.innerHTML = "You survived!";
            gameover.style.display = "block";
            gameover.innerHTML = "<h1>Game Over!</h1>";
            shooter.style.display = "none";
        }

    }, 1000);
    
}
// function moveEnemies() {

//     if (gameRunning == true) {
//         enemyX[0] -= 1;
//         enemyX[1] -= 1;
//         enemyX[2] -= 1;

//         enemy1.style.left = enemyX[0] + "px";
//         enemy2.style.left = enemyX[1] + "px";
//         enemy3.style.left = enemyX[2] + "px";

//         // Respawn enemy 1
//         if (enemyX[0] < -50) {
//             enemyX[0] = gamebox.offsetWidth;
//         }

//         // Respawn enemy 2
//         if (enemyX[1] < -50) {
//             enemyX[1] = gamebox.offsetWidth;
//         }

//         // Respawn enemy 3
//         if (enemyX[2] < -50) {
//             enemyX[2] = gamebox.offsetWidth;
//         }
//         if (enemyX[0] < 10) {
//             gameover.style.display = "block";
//             gameover.innerHTML = "<h2>Game Over</h2>";
//             gameRunning = false;
//             shooter.style.display = "none";
//                 clearInterval(timerInterval);

//         }
//                 if (enemyX[1] < 10) {
//             gameover.style.display = "block";
//             gameover.innerHTML = "<h2>Game Over</h2>";
//             gameRunning = false;
//             shooter.style.display = "none";
//                 clearInterval(timerInterval);
//         }
//                 if (enemyX[2] < 10) {
//             gameover.style.display = "block";
//             gameover.innerHTML = "<h2>Game Over</h2>";
//             gameRunning = false;
//             shooter.style.display = "none";
//                 clearInterval(timerInterval);
//         }
    
//     }
// enemyAnimation = requestAnimationFrame(moveEnemies);
                
// }
function moveEnemies() {

    if (gameRunning == true) {

        enemyX[0] -= 1;
        enemyX[1] -= 1;
        enemyX[2] -= 1;

        enemy1.style.left = enemyX[0] + "px";
        enemy2.style.left = enemyX[1] + "px";
        enemy3.style.left = enemyX[2] + "px";

        // Respawn enemy 1
        if (enemyX[0] < -50) {
            enemyX[0] = gamebox.offsetWidth;
        }

        // Respawn enemy 2
        if (enemyX[1] < -50) {
            enemyX[1] = gamebox.offsetWidth;
        }

        // Respawn enemy 3
        if (enemyX[2] < -50) {
            enemyX[2] = gamebox.offsetWidth;
        }

        // Game Over
        if (enemyX[0] < 10 ||
            enemyX[1] < 10 ||
            enemyX[2] < 10) {

            gameover.style.display = "block";
            gameover.innerHTML = "<h2>Game Over</h2>";

            gameRunning = false;
            shooter.style.display = "none";
            clearInterval(timerInterval);
        }

        // Continue animation ONLY if game is running
        if (gameRunning == true) {
            enemyAnimation = requestAnimationFrame(moveEnemies);
        }
    }
}




var startButton = document.getElementById("gamestart");
var stopButton = document.getElementById("gamestop");
startButton.addEventListener("click", startGame);
var gamescore = 0;
const gamerestart = document.getElementById("gamerestart");
const shooter = document.getElementById("shoot");
var enemyAnimation;
function startGame() {
    cancelAnimationFrame(enemyAnimation);
    gameRunning = true;

    startTimer();
    moveEnemies();
    stopButton.style.display = "block";
    gamerestart.style.display = "block";
    shooter.style.display = "block";
    startButton.style.display = "none";
}

stopButton.addEventListener("click", stopGame);

function stopGame() {
    gameRunning = false;
    shooter.style.display = "none";
    arrow.style.display = "none";
        cancelAnimationFrame(enemyAnimation);
    clearInterval(timerInterval);
}
function restartgame() {
    // Reset archer position
    archerY = 175;
    archer.style.top = archerY + "px";
    // Stop timer
    clearInterval(timerInterval);
    // Reset timer
    timeLeft = 30;
    gametimer.innerHTML = "Timer: 30";

    cancelAnimationFrame(enemyAnimation);
    // Reset enemy positions
    enemyX[0] = 700;
    enemyX[1] = 700;
    enemyX[2] = 700;

    enemy1.style.left = enemyX[0] + "px";
    enemy2.style.left = enemyX[1] + "px";
    enemy3.style.left = enemyX[2] + "px";
    enemy1.style.display = "flex";
    enemy2.style.display = "flex";
    enemy3.style.display = "flex";
    // Reset Game end screen
    gamescore = 0;
    gamescoreh.innerHTML = "Score: Is reset!";
    gameover.style.display = "none";
    stopButton.style.display = "none";
    shooter.style.display = "none";
    startButton.style.display = "block";
    gamerestart.style.display = "none";
    arrow.style.display = "none";
    gameRunning = false;
}
gamerestart.addEventListener("click", restartgame);
const arrowSound = new Audio("./audio/arrowsound.mp3");
const dying = new Audio("./audio/dyingsound.mp3");
function moveArrow() {
    if (arrowFlying == true) {

        // Move arrow to the right
        arrowX += 5;

        arrow.style.left = arrowX + "px";

        // Check collision with enemy 1
        if (checkCollision(arrow, enemy1)) {
            dying.play();
            arrow.style.display = "none";
            enemy1.style.display = "none";

            setTimeout(function () {
                enemyX[0] = 650;
                enemy1.style.left = enemyX[0] + "px";
                enemy1.style.display = "flex";
            }, 2000);

            arrowFlying = false;
            gamescore++;
        }

        // Check collision with enemy 2
        if (checkCollision(arrow, enemy2)) {
            dying.play();
            arrow.style.display = "none";
            enemy2.style.display = "none";

            setTimeout(function () {
                enemyX[1] = 650;
                enemy2.style.left = enemyX[1] + "px";
                enemy2.style.display = "flex";
            }, 1500);

            arrowFlying = false;
            gamescore++;

        }

        // Check collision with enemy 3
        if (checkCollision(arrow, enemy3)) {
            dying.play();
            arrow.style.display = "none";
            enemy3.style.display = "none";

            setTimeout(function () {
                enemyX[2] = 650;
                enemy3.style.left = enemyX[2] + "px";
                enemy3.style.display = "flex";
            }, 1000);

            arrowFlying = false;
                                    gamescore++;

        }
        // Arrow reaches right side
        if (arrowX > (gamebox.offsetWidth) - 55) {
            arrow.style.display = "none";
            arrowFlying = false;
        }
                    gamescoreh.innerHTML = "Score: " + gamescore;
    }

    requestAnimationFrame(moveArrow);
}
function checkCollision(object1, object2) {

    var object1Rect = object1.getBoundingClientRect();
    var object2Rect = object2.getBoundingClientRect();

    return (
        object1Rect.left < object2Rect.right &&
        object1Rect.right > object2Rect.left &&
        object1Rect.top < object2Rect.bottom &&
        object1Rect.bottom > object2Rect.top
    );
}

function shootArrow() {

    // Don't shoot if arrow is already flying
    if (arrowFlying == true) {
        return;
    }

    arrowFlying = true;
    arrowSound.play();
    // Show arrow
    arrow.style.display = "block";

    // Start arrow in front of archer
    arrowX = archer.offsetLeft + archer.offsetWidth;

    // Start arrow at archer's current Y position
    arrow.style.top = (archerY + 45) + "px";
    arrow.style.left = arrowX + "px";
}
const btnW = document.getElementById("wKey");
const btnS = document.getElementById("sKey");
document.addEventListener("keydown", function (event) {

    // Move up
    if (event.code == "KeyW") {
        archerY -= 15;
    }

    // Move down
    if (event.code == "KeyS") {
        archerY += 15;
    }

    // Make sure Archer inside the gamebox
    if (archerY < 0) {
        archerY = 0;
    }

    if (archerY > 400) {
        archerY = 400;
    }

    archer.style.top = archerY + "px";
});
moveArrow();
function wkeyPress() {
archerY -= 15;
    if (archerY < 0) {
        archerY = 0;
    }

    if (archerY > 400) {
        archerY = 400;
    }
    archer.style.top = archerY + "px";
}
function skeyPress() {
archerY += 15;
    if (archerY < 0) {
        archerY = 0;
    }

    if (archerY > 400) {
        archerY = 400;
    }
    archer.style.top = archerY + "px";
}
btnW.addEventListener("click", wkeyPress);
btnS.addEventListener("click", skeyPress);
mobileshoot.addEventListener("click", shootArrow);
shooter.addEventListener("click", shootArrow);

const targetM = document.getElementById("target");
const nogame = new Audio("./audio/punch.mp3");
function nogamew() {
    nogame.play();
}
targetM.addEventListener("click", nogamew);
//Full Screen Mode
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}
function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}
