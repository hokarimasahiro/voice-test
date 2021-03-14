input.onButtonPressed(Button.A, function () {
    閾値 += 10
    input.setSoundThreshold(SoundThreshold.Loud, 閾値)
    watchfont.showSorobanNumber(閾値 / 10, 0, 2)
})
input.onSound(DetectedSound.Loud, function () {
    led.plot(2, 2)
})
input.onButtonPressed(Button.B, function () {
    閾値 += -10
    input.setSoundThreshold(SoundThreshold.Loud, 閾値)
    watchfont.showSorobanNumber(閾値 / 10, 0, 2)
})
input.onSound(DetectedSound.Quiet, function () {
    led.unplot(2, 2)
})
let 閾値 = 0
閾値 = 120
input.setSoundThreshold(SoundThreshold.Loud, 閾値)
watchfont.showSorobanNumber(閾値 / 10, 0, 2)
basic.forever(function () {
    watchfont.showSorobanNumber(input.soundLevel() / 10, 3, 2)
})
