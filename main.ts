function game2 (sprite: game.LedSprite, num: number) {
    sprite.change(LedSpriteProperty.X, num)
}
input.onButtonPressed(Button.A, function () {
    game2(sprite, -1)
})
input.onButtonPressed(Button.B, function () {
    game2(sprite, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 0)
basic.forever(function () {
	
})
