// Add functions here to keep things organized
function spawnFriends(){
    for (let friend of frdDatabase){
        let friendSprite = sprites.create(friend.img, SpriteKind.Player)
        tiles.placeOnTile(friendSprite, tiles.getTileLocation(1, 15))

        //Add gravity
        friendSprite.ay = 294
        sprites.setDataNumber(friendSprite, "jumpHeight", friend.jumpHeight)
        sprites.setDataImage(friendSprite, "brickBreakImg", friend.breakBrikeImg)
    }

    let frdSprites = sprites.allOfKind(SpriteKind.Player)
    switchToPlayer(frdSprites[0])
}

let currentPlayer: Sprite = null

function switchToPlayer(activePlayer: Sprite){
    scene.cameraFollowSprite(activePlayer)
    controller.moveSprite(activePlayer, 100, 0)


    //mini jump to display the current player
    activePlayer.vy = -50
    // Remember who is current Player
    currentPlayer = activePlayer 

}

function switchToAnotherPlayer(){
    let frdSprites = sprites.allOfKind(SpriteKind.Player)
    let index = frdSprites.indexOf(currentPlayer)

    for (let sprite of frdSprites){
        controller.moveSprite(sprite, 0, 0)
    }
    if(index == frdSprites.length - 1){
        switchToPlayer(frdSprites[0])
    } else {
        switchToPlayer(frdSprites[index + 1])
    }
}

function jump(activePlayer: Sprite){
    if (!activePlayer.isHittingTile(CollisionDirection.Bottom)){
        return
    }
    let jumpHeight = sprites.readDataNumber(activePlayer, "jumpHeight")
    activePlayer.vy = jumpHeight * -1
}

function checkWall (sprite: Sprite, location:tiles.Location) {
   let tileImg = tiles.getTileImage(location)
   let colorIndex = coloredTiles.indexOf(tileImg)
   if (colorIndex < 0){
       return
   }

   if(sprites.readDataImage(sprite, "brickBreakImg") == tileImg){
       tiles.setTileAt(location, assets.tile `Empty`)
       tiles.setWallAt(location, false)
   }
}