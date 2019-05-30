class MathFactsOutcome extends Phaser.Scene {
    constructor() {
        super({ key: 'MathFactsOutcome' });
    }

    init(data) {
        this.time = data.time;
        this.score = data.score;
        this.operator = data.operator;
    }

    preload() {

    }

    create() {
        game.stage.backgroundColor = "#0000dd";
        this.add.text(70, 100, "Your time was " + this.time + ".")
        this.add.text(70, 150, "Your score was " + this.score + " correct!")
        let outcome = "";
        if (this.time < 60 && this.score == 100) {
            switch (this.operator) {
                case "+":
                    outcome = "You are a Math Facts Master in Addition!"
                    break;
                case "-":
                    outcome = "You are a Math Facts Master in Subtraction!"
                    break;
                case "*":
                    outcome = "You are a Math Facts Master in Multiplication!"
                    break;
                case "+-*":
                    outcome = "Congratulations!  You are a Math Facts Master!"
                    break;
            }
            this.add.text(70, 200, outcome);
        } else {

        }

    }

    update() {
        this.gameOver();
    }

    gameOver() {
        this.scene.start("MathFactsGame")
    }
}