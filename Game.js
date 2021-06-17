class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        car1 = createSprite(displayWidth / 2, displayHeight - 173);
        car1.addAnimation("car1",car1img);
        car1.scale = 0.2;
        car2 = createSprite(displayWidth - 1226, (displayHeight - 143) / 2);
        car2.addImage("car2",car2img);
        car2.scale = 0.3;
        car3 = createSprite(displayWidth / 2, displayHeight - 630);
        car3.addImage(car3img);
        car3.scale = 0.3;
        car4 = createSprite(displayWidth - 100, (displayHeight - 143) / 2);
        car4.addImage(car4img);
        car4.scale = 0.35;
        

        hurdle1 = createSprite(displayWidth - 1266, displayHeight - 243);
        hurdle1.addImage(hurdleimg);
        hurdle2 = createSprite(displayWidth - 1266, displayHeight - 600);
        hurdle2.addImage(hurdleimg);
        hurdle3 = createSprite(displayWidth - 100, displayHeight - 600);
        hurdle3.addImage(hurdleimg);
        hurdle4 = createSprite(displayWidth - 100, displayHeight - 243);
        hurdle4.addImage(hurdleimg);


    }

    play() {
        form.hide();

        Player.getPlayerInfo();

        player.getRank();

        if (allPlayers !== undefined) {
            background(bg);
            image(bg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

            //index of the array
            var index = 0;

            for (var plr in allPlayers) {
                index = index + 1;
            }

        }
        console.log("in 77"+ player.index)
        if (keyDown(UP_ARROW) && player.index !== null) {
            console.log("in 79")
            car1.velocityY = -5;
        }

        if (keyIsDown(DOWN_ARROW) && player.index !== null) {
            player.velocityY = 5;
        }

        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.velocityX = -5;
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.velocityX = 5;
        }

        if (player.x <= 0 || player.x >= 1366 || player.y <= 0 || player.y >= 482) {
            gameState = 2;
            player.rank -= 1;
            Player.updateRank(player.rank)
        }


        drawSprites();
    }

    end() {
        console.log("Game Ended");
    }
}