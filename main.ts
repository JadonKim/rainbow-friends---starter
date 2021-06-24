namespace SpriteKind {
    export const FinishedPlayer = SpriteKind.create()
}

scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    switchToAnotherPlayer()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Blue door`, function (sprite, location) {

})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Green door`, function (sprite, location) {

})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Red door`, function (sprite, location) {

})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Key`, function (sprite, location) {

})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Ladder`, function (sprite, location) {

})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Flag`, function (sprite, location) {

})

tiles.setTilemap(tilemap`level1`)

spawnFriends()