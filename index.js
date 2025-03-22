// Your code here
function createEmployeeRecord(employeeinfo){
    return{
        firstName: employeeinfo[0],
        familyName: employeeinfo[1],
        title: employeeinfo[2],
        payPerHour: employeeinfo[3],
        timeInEvents: [],
        timeOutEvents:[]

    }

}
function createEmployeeRecords(employeeinfo){
    return employeeinfo.map(employee => createEmployeeRecord(employee));

}
function createTimeInEvent(employee, dateTime){
    let[date, hour] = dateTime.split(" ")
    employee.timeInEvents.push({
        type : 'TimeIn',
        date,
        hour: parseInt(hour)
    })
    return employee;
}
function createTimeOutEvent(employee, dateTime){
    let[date, hour] = dateTime.split(" ")
    employee.timeOutEvents.push({
        type : 'TimeOut',
        date,
        hour: parseInt(hour)
    })
    return employee;
}
function hoursWorkedOnDate(employee, exactdate){
    let timeIn = employee.timeInEvents.find(e => e.date === exactdate).hour
    let timeOut = employee.timeOutEvents.find(e => e.date === exactdate).hour
    return (timeOut - timeIn) *0.01
}
function wagesEarnedOnDate(employee, eaxctdate ){
    return hoursWorkedOnDate(employee , eaxctdate) * employee.payPerHour

}
function allWagesFor(employee){
    let datesWorked = employee.timeInEvents.map(event => event.date)
    let summedwages = 0
    for (let date of datesWorked){
        summedwages += wagesEarnedOnDate(employee, date)
    }
    return summedwages 
}
function calculatePayroll(employeeRecords){
    let summedpay = 0
    for(let employee of employeeRecords){
        summedpay += allWagesFor(employee)
    }
    return summedpay
}