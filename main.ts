DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 15) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 8) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
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
})
