var flag = 0;
var i;
k = 0;
var a = prompt("Enter the name of player 1st");
var b = prompt("Enter the name of player 2nd");
var player1 = { name: a, mark: "X" };
var player2 = { name: b, mark: "O" };

function Input() {

    alert("New Game Started!");
}

function clear() {
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
    document.getElementById("b5").innerHTML = "";
    document.getElementById("b6").innerHTML = "";
    document.getElementById("b7").innerHTML = "";
    document.getElementById("b8").innerHTML = "";
    document.getElementById("b9").innerHTML = "";
}

function checkwin(n1, n2) {

    if (document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML && document.getElementById("b2").innerHTML == document.getElementById("b3").innerHTML && (document.getElementById("b1").innerHTML == 'X' || document.getElementById("b1").innerHTML == 'O')) {

        if (document.getElementById("b1").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
        return 1;
    }
    if (document.getElementById("b4").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b6").innerHTML && (document.getElementById("b4").innerHTML == 'X' || document.getElementById("b4").innerHTML == 'O')) {
        if (document.getElementById("b4").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }
    if (document.getElementById("b7").innerHTML == document.getElementById("b8").innerHTML && document.getElementById("b8").innerHTML == document.getElementById("b9").innerHTML && (document.getElementById("b7").innerHTML == 'X' || document.getElementById("b7").innerHTML == 'O')) {
        if (document.getElementById("b7").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }
    if (document.getElementById("b1").innerHTML == document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML == document.getElementById("b7").innerHTML && (document.getElementById("b1").innerHTML == 'X' || document.getElementById("b1").innerHTML == 'O')) {
        if (document.getElementById("b1").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }
    if (document.getElementById("b2").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b8").innerHTML && (document.getElementById("b2").innerHTML == 'X' || document.getElementById("b2").innerHTML == 'O')) {
        if (document.getElementById("b2").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }

    if (document.getElementById("b3").innerHTML == document.getElementById("b6").innerHTML && document.getElementById("b6").innerHTML == document.getElementById("b9").innerHTML && (document.getElementById("b3").innerHTML == 'X' || document.getElementById("b3").innerHTML == 'O')) {
        if (document.getElementById("b3").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }

    if (document.getElementById("b1").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b9").innerHTML && (document.getElementById("b1").innerHTML == 'X' || document.getElementById("b1").innerHTML == 'O')) {
        if (document.getElementById("b1").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }
    if (document.getElementById("b3").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b7").innerHTML && (document.getElementById("b3").innerHTML == 'X' || document.getElementById("b3").innerHTML == 'O')) {
        if (document.getElementById("b3").innerHTML == "X") {
            alert(n1 + " won the game!");
        } else { alert(n2 + " won the game!"); }
        location.reload();
        alert("Press start button again to start a new Game!");
    }
}

function startgame() {

    i = 1;
    flag = 1;
    var k = 0;
}

function print(p) {


    if (flag == 1) {
        if (document.getElementById(p).innerHTML == "") {
            if (i % 2 == 1) {

                document.getElementById(p).innerHTML = "X";
                i++;
                k = checkwin(player1.name, player2.name);

                if (i == 10) {
                    alert("No-one won the Game!")
                    location.reload();
                }
            } else {
                document.getElementById(p).innerHTML = "O";
                i++;
                k = checkwin(player1.name, player2.name);

                if (i == 10) {
                    alert("No-one won the Game!")
                    location.reload();
                }
            }

        } else alert("box already filled!");
    }


}






function newGame() {

    clear();
    Input();
    startgame();
}