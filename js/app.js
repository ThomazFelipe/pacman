(() => {
    let labyrinth = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0],
        [0, 10, 1, 0, 0, 0, 0, 0, 6, 10, 5, 10, 8, 0, 0, 0, 0, 0, 2, 10, 0],
        [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
        [0, 10, 0, 11, 8, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 6, 11, 0, 10, 0],
        [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
        [0, 10, 4, 0, 0, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 0, 0, 3, 10, 0],
        [0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0],
        [0, 10, 1, 0, 0, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 0, 0, 2, 10, 0],
        [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
        [0, 10, 0, 11, 8, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 6, 11, 0, 10, 0],
        [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
        [0, 10, 4, 0, 0, 0, 0, 0, 6, 10, 7, 10, 8, 0, 0, 0, 0, 0, 3, 10, 0],
        [0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
    ]

    let pacman = {
        x: 1,
        y: 1
    }

    let ghost = {
        x: 19,
        y: 13
    }

    let displayLabyrinth = () => {
        let output = '';
        for (let i = 0; i < labyrinth.length; i++) {
            output += "\n<div class='row'>\n"
            for (let j = 0; j < labyrinth[i].length; j++) {
                switch (labyrinth[i][j]) {
                    case 0:
                        output += "<div class='brick'></div>";
                        break;
                    case 1:
                        output += "<div class='brick lefttop'></div>";
                        break;
                    case 2:
                        output += "<div class='brick righttop'></div>";
                        break;
                    case 3:
                        output += "<div class='brick rightbottom'></div>";
                        break;
                    case 4:
                        output += "<div class='brick leftbottom'></div>";
                        break;
                    case 5:
                        output += "<div class='brick top'></div>";
                        break;
                    case 6:
                        output += "<div class='brick right'></div>";
                        break;
                    case 7:
                        output += "<div class='brick bottom'></div>";
                        break;
                    case 8:
                        output += "<div class='brick left'></div>";
                        break;
                    case 9:
                        output += "<div class='empty'></div>";
                        break;
                    case 10:
                        output += "<div class='coin'></div>";
                        break;
                    case 11:
                        output += "<div class='cherries'></div>";
                }
            }
            output += "\n</div>"
        }
        $('#labyrinth').html(output);
    }

    let displayPacman = () => {
        document.getElementById('pacman').style.left = pacman.x * 20 + "px";
        document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    }

    let displayGhost = () => {
        document.getElementById('ghost').style.left = ghost.x * 20 + "px";
        document.getElementById('ghost').style.top = ghost.y * 20 + "px";
    }

    document.onkeydown = (e) => {
        if (e.keyCode == 37 && (labyrinth[pacman.y][pacman.x - 1] == 9 ||
                labyrinth[pacman.y][pacman.x - 1] == 10 ||
                labyrinth[pacman.y][pacman.x - 1] == 11)) { //left

            $('#pacman').removeClass('right');
            $('#pacman').removeClass('up');
            $('#pacman').removeClass('down');
            $('#pacman').addClass('left');
            pacman.x--;
        } else if (e.keyCode == 39 &&
            (labyrinth[pacman.y][pacman.x + 1] == 9 ||
                labyrinth[pacman.y][pacman.x + 1] == 10 ||
                labyrinth[pacman.y][pacman.x + 1] == 11)) { //right

            $('#pacman').removeClass('left');
            $('#pacman').removeClass('up');
            $('#pacman').removeClass('down');
            $('#pacman').addClass('right');
            pacman.x++;
        } else if (e.keyCode == 38 &&
            (labyrinth[pacman.y - 1][pacman.x] == 9 ||
                labyrinth[pacman.y - 1][pacman.x] == 10 ||
                labyrinth[pacman.y - 1][pacman.x] == 11)) { //down

            $('#pacman').removeClass('right');
            $('#pacman').removeClass('up');
            $('#pacman').removeClass('left');
            $('#pacman').addClass('down');
            pacman.y--;
        } else if (e.keyCode == 40 &&
            (labyrinth[pacman.y + 1][pacman.x] == 9 ||
                labyrinth[pacman.y + 1][pacman.x] == 10 ||
                labyrinth[pacman.y + 1][pacman.x] == 11)) { //up

            $('#pacman').removeClass('right');
            $('#pacman').removeClass('left');
            $('#pacman').removeClass('down');
            $('#pacman').addClass('up');
            pacman.y++;
        }

        if (labyrinth[pacman.y][pacman.x] == 10) {
            labyrinth[pacman.y][pacman.x] = 9;
            displayLabyrinth();
        }

        if (labyrinth[pacman.y][pacman.x] == 11) {
            labyrinth[pacman.y][pacman.x] = 9;
            displayLabyrinth();
        }

        displayPacman();
        checkend();
    }

    let getRandom = () => {
        let random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        return random;
    }

    let currentDirection = 1;

    let ghostMove = () => {
        let newDirection = getRandom();

        if (((currentDirection == 1 || currentDirection == 2) &&
                (labyrinth[ghost.y + 1][ghost.x] == 9 ||
                    labyrinth[ghost.y + 1][ghost.x] == 10 ||
                    labyrinth[ghost.y + 1][ghost.x] == 11 ||
                    labyrinth[ghost.y + 1][ghost.x] == 12 ||
                    labyrinth[ghost.y - 1][ghost.x] == 9 ||
                    labyrinth[ghost.y - 1][ghost.x] == 10 ||
                    labyrinth[ghost.y - 1][ghost.x] == 11 ||
                    labyrinth[ghost.y - 1][ghost.x] == 12)) ||
            ((currentDirection == 3 || currentDirection == 4) &&
                (labyrinth[ghost.y][ghost.x + 1] == 9 ||
                    labyrinth[ghost.y][ghost.x + 1] == 10 ||
                    labyrinth[ghost.y][ghost.x + 1] == 11 ||
                    labyrinth[ghost.y][ghost.x + 1] == 12 ||
                    labyrinth[ghost.y][ghost.x - 1] == 9 ||
                    labyrinth[ghost.y][ghost.x - 1] == 10 ||
                    labyrinth[ghost.y][ghost.x - 1] == 11 ||
                    labyrinth[ghost.y][ghost.x - 1] == 12))) {

            while (newDirection == currentDirection) {
                newDirection = getRandom();
            }

            currentDirection = newDirection;
        }

        if (currentDirection == 1 &&
            (labyrinth[ghost.y][ghost.x - 1] == 9 ||
                labyrinth[ghost.y][ghost.x - 1] == 10 ||
                labyrinth[ghost.y][ghost.x - 1] == 11 ||
                labyrinth[ghost.y][ghost.x - 1] == 12)) {

            ghost.x--;
        } else if (currentDirection == 2 &&
            (labyrinth[ghost.y][ghost.x + 1] == 9 ||
                labyrinth[ghost.y][ghost.x + 1] == 10 ||
                labyrinth[ghost.y][ghost.x + 1] == 11 ||
                labyrinth[ghost.y][ghost.x + 1] == 12)) {

            ghost.x++;
        } else if (currentDirection == 3 &&
            (labyrinth[ghost.y - 1][ghost.x] == 9 ||
                labyrinth[ghost.y - 1][ghost.x] == 10 ||
                labyrinth[ghost.y - 1][ghost.x] == 11 ||
                labyrinth[ghost.y - 1][ghost.x] == 12)) {

            ghost.y--;
        } else if (currentDirection == 4 &&
            (labyrinth[ghost.y + 1][ghost.x] == 9 ||
                labyrinth[ghost.y + 1][ghost.x] == 10 ||
                labyrinth[ghost.y + 1][ghost.x] == 11 ||
                labyrinth[ghost.y + 1][ghost.x] == 12)) {

            ghost.y++;
        }
        displayGhost();
    }

    setInterval(ghostMove, 100); //ghost's velocity

    let checkend = () => {
        if ((pacman.x == ghost.x) && (pacman.y == ghost.y)) {
            $('#gameover').fadeIn();
        }
    }

    $(document).ready(() => {
        displayLabyrinth();
        displayPacman();
        displayGhost();
    })
})();