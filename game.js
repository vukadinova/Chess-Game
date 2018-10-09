// Creating variables
var fromX, fromY;
var clickedOnce = false;
var nothing = new Image();
var blackPawn = tryToLoad("blackPawn", "grey");
var whitePawn = tryToLoad("whitePawn", "grey");
var blackKnight = tryToLoad("blackKnight", "grey");
var whiteKnight = tryToLoad("whiteKnight", "grey");
var blackBishop = tryToLoad("blackBishop", "grey");
var whiteBishop = tryToLoad("whiteBishop", "grey");
var blackRook = tryToLoad("blackRook", "grey");
var whiteRook = tryToLoad("whiteRook", "grey");
var blackQueen = tryToLoad("blackQueen", "grey");
var whiteQueen = tryToLoad("whiteQueen", "grey");
var blackKing = tryToLoad("blackKing", "grey");
var whiteKing = tryToLoad("whiteKing", "grey");
var board = [[blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook],
             [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
             [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
             [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
             [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
             [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing],
             [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
             [whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook]
            ];

function update() {
    
}

function draw() {
    var num = 0;
    for(i = 0; i < 8; ++i) {
        context.fillStyle = "black";
        context.font = "20px Georgia";
        context.fillText(8 - i, 30, 95 + i * 60);
        //console.log(8 - i, 30, 93 + i * 60);
        for(j = 0; j < 8; ++j) {
            if(num % 2 == 0) {
                context.fillStyle = "white";
            } else {
                context.fillStyle = "black";
            }
            context.fillRect(60 + i * 60, 60 + j * 60, 60, 60);
            context.strokeRect(60 + i * 60, 60 + j * 60, 60, 60);
            drawImage(board[j][i], 60 + i * 60, 60 + j * 60, 60, 60)
            ++ num;
        }
        ++ num;
        var letter = String.fromCharCode(65 + i);
        context.fillStyle = "black";
        context.fillText(letter, 80 + i * 60, 575);
    }
};

function mouseup() {
    // Show coordinates of mouse on click
    if(clickedOnce) {
        var toX = Math.floor(mouseX/60 - 1);
        var toY = Math.floor(mouseY/60 - 1);
        if(fromX != toX || fromY != toY) {
            board[toY][toX] = board[fromY][fromX];
            board[fromY][fromX] = nothing;
        }
        clickedOnce = false;
    } else {
        fromX = Math.floor(mouseX/60 - 1);
        fromY = Math.floor(mouseY/60 - 1);
        console.log(fromY, fromX);
        clickedOnce = true;
    }
};
