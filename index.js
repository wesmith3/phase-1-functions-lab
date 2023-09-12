// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber > 42) {
        return streetNumber - 42
    } else {
        return 42 - streetNumber
    }
}  

function distanceFromHqInFeet (blockNumber) {
    if (blockNumber > 42) {
        return (blockNumber - 42) * 264
    } else {
        return (42 - blockNumber) * 264
    }
}

function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock > endBlock) {
        return (startBlock - endBlock) * 264
    } else {
    return (endBlock - startBlock) * 264
    }
}

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}