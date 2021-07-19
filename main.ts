input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    T += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showNumber(T)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.showNumber(B)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Wins")
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showNumber(A)
    basic.pause(1000)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.showNumber(B)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showNumber(T)
})
let A = 0
let B = 0
let T = 0
T = 0
B = 0
A = 0
