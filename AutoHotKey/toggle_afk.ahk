toggle = 0
#MaxThreadsPerHotkey 2

Random, randSleep, 50, 70

F8::
    Toggle := !Toggle
     While Toggle{
        Click, right
        Send a
    }
return