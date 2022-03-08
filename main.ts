let number = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showString("SI")
    } else if (number == 2) {
        basic.showString("NO")
    } else {
        basic.showString("FORSE")
    }
    basic.pause(2000)
    basic.clearScreen()
})
