input.onButtonPressed(Button.A, function () {
    CarStatus = RUN
})
input.onButtonPressed(Button.B, function () {
    CarStatus = STOP
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
let Distance = 0
let CarStatus = 0
let RUN = 0
let STOP = 0
basic.showIcon(IconNames.House)
let a = 0
let b = 0
Tinybit.RGB_Car_Big(Tinybit.enColor.White)
Tinybit.RGB_Car_Program().show()
let SPEEDBK = 80
let SPEEDFWD = 100
let SPEEDTURN = 60
STOP = 0
RUN = 1
CarStatus = STOP
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
    for (let a = 0; a <= 255; a++) {
        Tinybit.RGB_Car_Big2(0, 0, a)
        Tinybit.RGB_Car_Program().setBrightness(a)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        Tinybit.RGB_Car_Program().show()
        basic.pause(10)
    }
    for (let b = 0; b <= 255; b++) {
        Tinybit.RGB_Car_Big2(0, 0, 255 - b)
        Tinybit.RGB_Car_Program().setBrightness(255 - b)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        Tinybit.RGB_Car_Program().show()
        basic.pause(10)
    }
})
basic.forever(function () {
    if (CarStatus == RUN) {
        Distance = Tinybit.Ultrasonic_Car()
        if (Distance >= 15) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, SPEEDFWD)
        } else {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, SPEEDBK)
            basic.pause(200)
            if (Math.randomBoolean()) {
                Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, SPEEDTURN)
            } else {
                Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, SPEEDTURN)
            }
            basic.pause(200)
        }
    }
})
