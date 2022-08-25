// Code your solution here

function findMatching(drivers, name) {
    let driversArr = drivers.filter(
        (match) => match.toLowerCase() === name.toLowerCase());
    return driversArr;
}

function fuzzyMatch(drivers, name) {
    let driversArr = drivers.filter(
        (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
    return driversArr;
}

function matchName(driver, name) {
    let driverArr = driver.filter(
        (match) => match.name === name
    )
    return driverArr;

}
