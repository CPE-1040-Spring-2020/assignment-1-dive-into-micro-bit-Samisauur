let iconHeart: boolean = true // or false

input.onButtonPressed(Button.A, function () {
    if (iconHeart) {
        iconHeart = false
    } else {
        iconHeart = true
    }
    // iconHeart = ! iconHeart
})

basic.forever(function () {
    if (iconHeart) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
    basic.pause(100)
    basic.clearScreen()
})
