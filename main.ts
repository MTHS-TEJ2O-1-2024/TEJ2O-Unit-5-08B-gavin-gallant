/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Gavin Gallant
* Created on: Oct 2024
* This program controls two stepper motors and a sensor
*/

let distanceToObject: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    // if distance <10 stop, back up and turn 
    if (distanceToObject < 10) {
        //stop
        robotbit.StpCarMove(0, 48)
        basic.showIcon(IconNames.No)
        // back up
        robotbit.StpCarMove(-10, 48)
        robotbit.StpCarMove(0, 48)
        //turn
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
    } else {
        //forward 
        robotbit.StpCarMove(10, 48)
    }
}
