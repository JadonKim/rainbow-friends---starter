// Add functions here to keep things organized
function spawnFriends(){
    for (let friend of frdDatabase){
        let friendSprite = sprites.create(friend.img)
        tiles.placeOnTile(friendSprite, tiles.getTileLocation(1, 15))
    }
    let frdSprites = sprites.allOfKind(SpriteKind.Player)
    switchToPlayer(frdSprites[0])
}

function switchToPlayer(activePlayer: Sprite){
    scene.cameraFollowSprite(activePlayer)
    controller.moveSprite(activePlayer, 100, 0)
}

function switchToAnotherPlayer(){
    
}