toggle = 0
#MaxThreadsPerHotkey 2

XButton1::
    Toggle := !Toggle
     While Toggle{
        Click
        Send a
        sleep 50
    }
return