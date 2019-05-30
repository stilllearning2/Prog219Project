let config = {
    type: Phaser.AUTO,
    height: 600,
    width: 800,
    audio: {
        noAudio: true
    },
    scene: [MathFactsStart, MathFactsGame, MathFactsOutcome],
    backgroundColor: "#F08080",
    playerText: '',
    player: '',
    enterText: ''

};

var game = new Phaser.Game(config);


