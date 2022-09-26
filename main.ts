radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
        score = 1
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Score ")
    basic.showNumber(score)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let score = 0
let dice = 0
dice = 0
