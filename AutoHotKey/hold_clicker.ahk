XButton1::
    While GetKeyState("XButton1", "P"){
        Click
        Sleep 50  ;  milliseconds
    }
return

XButton2::
    While GetKeyState("XButton2", "P"){
        Click, right
        Sleep 50  ;  milliseconds
    }
return