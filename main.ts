radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
radio.setGroup(12)
basic.showIcon(IconNames.SmallDiamond)
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
