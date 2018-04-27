Random, randSleep, 50, 70

XButton1::
    While GetKeyState("XButton1", "P"){
        Click
        Sleep randSleep  ;  milliseconds
    }
return

XButton2::
    While GetKeyState("XButton2", "P"){
        Click, right
        Sleep randSleep  ;  milliseconds
    }
return