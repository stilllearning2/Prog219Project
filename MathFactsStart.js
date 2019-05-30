class MathFactsStart extends Phaser.Scene {
    constructor() {
        super({ key: 'MathFactsStart' });
    }

    create() {
        var equations = [],
            opNumber = 0,
            enterPressed = false,
            myFont = '32px Courier',
            rect,
            graphics

        // add background expressions
        let q = -40;
        for (let i = 0; i < 7; i++) {
            q = q + 40
            if (i == 3) {
                q += 300;
            }
            let x = Phaser.Math.RND.between(20, 600);
            let y = Phaser.Math.RND.between(q, q + 40);
            let a = Phaser.Math.RND.between(2, 9);
            let b = Phaser.Math.RND.between(1, 7);
            let m = Phaser.Math.RND.between(0, 2);
            let z = '';
            let c = 0;
            if (m == 0) {
                z = "+";
                c = a + b;
            } else if (m == 1) {
                z = "-";
                if (b > a) {
                    let temp = a;
                    a = b;
                    b = temp;
                }
                c = a - b
            } else {
                z = "*";
                c = a * b;
            }
            let fontsize = Phaser.Math.Between(24, 36) + "px";
            this.add.text(x, y, a + z + b + "=" + c, { fontSize: fontsize, color: '#000' })
            if (x < 300) {
                let a = Phaser.Math.RND.between(2, 9);
                let b = Phaser.Math.RND.between(1, 7);
                this.add.text(x * 2, y, a + z + b + "=" + c, { fontSize: fontsize, color: '#000' })
            } else if (x > 500) {
                let a = Phaser.Math.RND.between(2, 9);
                let b = Phaser.Math.RND.between(1, 7);
                this.add.text(x/2, y, a +  z + b + "=" + c, { fontSize: fontsize, color: '#000' })
            }
        }

        rect = new Phaser.Geom.Rectangle(30, 130, 730, 380),
        graphics = this.add.graphics({ fillStyle: { color: 0xCCDDEE, transparancy: 0.8 } })
        graphics.fillRectShape(rect);

        // Enter Game Rules

        this.add.text(this, 68, 150, 'Welcome to Math Facts Master!', { font: myFont, color: '#f0f' });
        this.add.text(this, 60, 200, 'Can you do 100 facts in 60 seconds?', { font: myFont, color: '#0f0' });
        this.add.text(this, 60, 250, 'To find out:', { font: myFont, color: '#0f0' });
        this.enterText = new Text(this, 70, 300, 'Type your name, then press the Enter key.', { font: myFont, color: '#0f0' });
        this.playerText = new Text(this, 75, 330, 'Name = ' + this.player, { font: myFont, color: '#0f0' });
    }

    update() {
        var enterPressed = false,
            player = '',
            opNumber;

        this.input.keyboard.on('keydown', function (eventName, event) {
            let key = eventName.key;

            if (enterPressed == false) {
                if (key >= 'a' && key < 'z') {
                    this.player += key;
                    this.playerText.refresh();
                    //this.playerText.setText('   Type your name:  ' + this.player.text);
                } else if (key >= 'A' && key < 'Z') {
                    this.player += key;
                    this.playerText.setText('   Type your name:  ' + this.player.text);
                } else {
                    // throw keystroke away
                }
            } else {
                if (enterPressed == false) {
                    switch (key) {
                        case ONE:
                            opNumber = 1;
                            startGame();
                            break;
                        case TWO:
                            opNumber = 2;
                            startGame();
                            break;
                        case THREE:
                            opNumber = 3;
                            startGame();
                            break;
                        case FOUR:
                            opNumber = 4;
                            startGame();
                            break;
                        default:
                            // throw keystroke away
                            break;
                    }
                }
            }
        })

        this.input.keyboard.on('keydown-' + 'ENTER', function (event) {
            enterPressed = true;

            // change color of playerText
            playerText.setVisible(false);
            enterText.setVisible(false);

            // change color of opsTex
            let text = 'Press 1 for Addition,\n' +
                'Press 2 for Subtraction,\n' +
                'Press 3 for Multiplication,\n' +
                'Press 4 for all operations.'
            this.add.Text(70, 300, text, { font: myFont, color: '#0f0' })
        })

        this.input.keyboard.on('keydown-' + 'BACKSPACE', function (event) {
            if (enterPressed == false) {
                this.player.substring(0, this.player.length - 1);
                playerText.refresh();
            }
        })
    }

    startGame() {
        this.scene.start("MathFactsGame", { player: player, operator: opNumber } )
    }
}
