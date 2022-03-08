number = 0

def on_gesture_shake():
    global number
    basic.clear_screen()
    number = randint(1, 3)
    if number == 3:
        basic.show_string("SI")
    elif number == 2:
        basic.show_string("NO")
    else:
        basic.show_string("FORSE")
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
