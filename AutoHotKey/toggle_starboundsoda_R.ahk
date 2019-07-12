toggle = 0
#MaxThreadsPerHotkey 2

XButton2::
    Toggle := !Toggle
     While Toggle{
        Click, right
        Send a
        sleep 50
    }
return