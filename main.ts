DFRobotMaqueenPlus.I2CInit()
let _1_atala = 1
let _2_atala = 0
let _3_atala = 0
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1) {
    	
    }
})
basic.forever(function () {
    if (_1_atala == 1) {
        basic.showNumber(1)
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 15) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 10) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
            basic.showIcon(IconNames.Heart)
            _1_atala = 0
            _2_atala = 1
        }
    }
})
basic.forever(function () {
    if (_3_atala == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 160)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            }
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 160)
            }
        }
    }
})
basic.forever(function () {
    if (_2_atala == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 37)
        basic.pause(1500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.showNumber(2)
        basic.pause(1000)
        _2_atala = 0
        _3_atala = 1
    }
})
