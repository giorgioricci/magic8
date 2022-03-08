let number = 0
let varGradi = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    number = randint(1, 4)
    if (number == 3) {
        basic.showString("SI")
    } else if (number == 2) {
        basic.showString("NO")
    } else if (number == 4) {
        basic.showString("NON LO SO")
    } else {
        basic.showString("FORSE")
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    varGradi = input.compassHeading()
    if (varGradi < 45) {
        basic.showString("N")
    } else if (varGradi < 135) {
        basic.showString("E")
    } else if (varGradi < 225) {
        basic.showString("S")
    } else if (varGradi < 315) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
    basic.pause(5000)
    basic.clearScreen()
})
