var flag = 0;
var i;
k = 0;
var a = prompt("Enter the name of player 1st");
var b = prompt("Enter the name of player 2nd");
var player1 = { name: a, mark: "X" };
var player2 = { name: b, mark: "O" };

function nothing() {
    //alert("New Game Started!");
    //location.reload();
    newGame();
    return;
}

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
    document.getElementById("b1").style.backgroundColor = 'aliceblue';
    document.getElementById("b2").style.backgroundColor = 'aliceblue';
    document.getElementById("b3").style.backgroundColor = 'aliceblue';
    document.getElementById("b4").style.backgroundColor = 'aliceblue';
    document.getElementById("b5").style.backgroundColor = 'aliceblue';
    document.getElementById("b6").style.backgroundColor = 'aliceblue';
    document.getElementById("b7").style.backgroundColor = 'aliceblue';
    document.getElementById("b8").style.backgroundColor = 'aliceblue';
    document.getElementById("b9").style.backgroundColor = 'aliceblue';
}

function checkwin(n1, n2) {

    if (document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML && document.getElementById("b2").innerHTML == document.getElementById("b3").innerHTML && (document.getElementById("b1").innerHTML == 'X' || document.getElementById("b1").innerHTML == 'O')) {

        document.getElementById("b1").style.backgroundColor = '#6F5B5B';
        document.getElementById("b2").style.backgroundColor = '#6F5B5B';
        document.getElementById("b3").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b1").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b4").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b6").innerHTML && (document.getElementById("b4").innerHTML == 'X' || document.getElementById("b4").innerHTML == 'O')) {
        document.getElementById("b4").style.backgroundColor = '#6F5B5B';
        document.getElementById("b5").style.backgroundColor = '#6F5B5B';
        document.getElementById("b6").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b4").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b7").innerHTML == document.getElementById("b8").innerHTML && document.getElementById("b8").innerHTML == document.getElementById("b9").innerHTML && (document.getElementById("b7").innerHTML == 'X' || document.getElementById("b7").innerHTML == 'O')) {
        document.getElementById("b7").style.backgroundColor = '#6F5B5B';
        document.getElementById("b8").style.backgroundColor = '#6F5B5B';
        document.getElementById("b9").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b7").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b1").innerHTML == document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML == document.getElementById("b7").innerHTML && (document.getElementById("b1").innerHTML == 'X' || document.getElementById("b1").innerHTML == 'O')) {
        document.getElementById("b1").style.backgroundColor = '#6F5B5B';
        document.getElementById("b4").style.backgroundColor = '#6F5B5B';
        document.getElementById("b7").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b1").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b2").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b8").innerHTML && (document.getElementById("b2").innerHTML == 'X' || document.getElementById("b2").innerHTML == 'O')) {
        document.getElementById("b2").style.backgroundColor = '#6F5B5B';
        document.getElementById("b5").style.backgroundColor = '#6F5B5B';
        document.getElementById("b8").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b2").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b3").innerHTML == document.getElementById("b6").innerHTML && document.getElementById("b6").innerHTML == document.getElementById("b9").innerHTML && (document.getElementById("b3").innerHTML == 'X' || document.getElementById("b3").innerHTML == 'O')) {
        document.getElementById("b3").style.backgroundColor = '#6F5B5B';
        document.getElementById("b6").style.backgroundColor = '#6F5B5B';
        document.getElementById("b9").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b3").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b1").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b9").innerHTML && (document.getElementById("b1").innerHTML == 'X' || document.getElementById("b1").innerHTML == 'O')) {
        document.getElementById("b1").style.backgroundColor = '#6F5B5B';
        document.getElementById("b5").style.backgroundColor = '#6F5B5B';
        document.getElementById("b9").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b1").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else if (document.getElementById("b3").innerHTML == document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML == document.getElementById("b7").innerHTML && (document.getElementById("b3").innerHTML == 'X' || document.getElementById("b3").innerHTML == 'O')) {
        document.getElementById("b3").style.backgroundColor = '#6F5B5B';
        document.getElementById("b5").style.backgroundColor = '#6F5B5B';
        document.getElementById("b7").style.backgroundColor = '#6F5B5B';
        setTimeout(nothing, 3000);
        flag = 0;
        if (document.getElementById("b3").innerHTML == "X") {
            document.getElementById("alert").innerHTML = `${n1} won the game !!!`;

        } else {
            document.getElementById("alert").innerHTML = `${n2} won the game !!!`;

        }



        return 1;
    } else {
        if (i == 10) {
            setTimeout(nothing, 3000);
            document.getElementById("alert").innerHTML = "No-one won the game";


        }
    }
}

function startgame() {

    i = 1;
    flag = 1;
    var k = 0;
    document.getElementById("alert").innerHTML = `Game In Progress ...<br>${player1.name}'s move`;
}

function print(p) {


    if (flag == 1) {
        if (document.getElementById(p).innerHTML == "") {
            if (i % 2 == 1) {

                document.getElementById(p).innerHTML = "X";
                i++;
                document.getElementById("alert").innerHTML = `Game In Progress ...<br>${player2.name}'s move`;

                k = checkwin(player1.name, player2.name);

                // if (i == 10) {
                //     alert("No-one won the Game!")
                //     location.reload();
                // }
            } else {
                document.getElementById(p).innerHTML = "O";
                i++;
                document.getElementById("alert").innerHTML = `Game In Progress ...<br>${player1.name}'s move`;

                k = checkwin(player1.name, player2.name);

                // if (i == 10) {
                //     alert("No-one won the Game!")
                //     location.reload();
                // }
            }

        } else alert("box already filled!");
    }


}



document.getElementById("alert").innerHTML = "Click New-Game to start the game";


function newGame() {

    document.getElementById("alert").innerHTML = "Game In Progress ...";

    clear();
    Input();
    startgame();
}