// Javascript document

class MathFactsGame extends Phaser.Scene {
    constructor() {
        super( 'MathFactsGame' )
    }

    init(data) {
        var player = data.player;
        var operator = data.operator;
    }

    preload() {

    }

    create() {
        var arrays = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ],
            matrix = [],
            matrixDisplay

        // fill the arrays
        for (let i = 0; i <= 9; i++) {
            let a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            arrays[i] = Phaser.Utils.Array.Range(a, b, { qty: 10, random: true });
        }

        // create matrix
        matrix = [arrays[0], arrays[1], arrays[2], arrays[3], arrays[4],
                  arrays[5], arrays[6], arrays[7], arrays[8], arrays[9]];

        // create text
        matrixDisplay = this.add.text(10, 10, '', { font: '8px Courier', color: '#00ff00' })
        matrixDisplay.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        // display the matrix in the text


        // cycle through
        //for (let i = 0; i < this.topNumber; i++) {
        //    displayProblem = function (value) {
        //    Each(array[i], displayProblem(), context[, args])
        //}
    }

    gameOver() {
        this.scene.start("MathFactsOutcome", { time: 59, score: 100, operator: operator })
    }
}