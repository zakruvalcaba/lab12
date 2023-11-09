// VIEW EMPLOYEES
function view(employees) {
    // VARIABLE FOR EMPLOYEE NUMBERS
    let emplID = 1
    // LOOP THROUGH EMPLOYEES ARRAY
    employees.forEach((employee) => {
        console.log(`${String(emplID)}. ${employee}`)
        emplID++
    })
    console.log('')
}

// ADD EMPLOYEE
function add(employees) {
    // PROMPT USER FOR EMPLOYEE TO ADD
    let employee = prompt('Enter the employee\'s name')
    // ADD EMPLOYEE TO ARRAY
    employees.push(employee)
    // SHOW SUCCESS MESSAGE
    console.log(`${employee} was added.`)
    console.log('')
}

// REMOVE EMPLOYEE
function remove(employees) {
    // PROMPT USER FOR EMPLOYEE ID TO REMOVE
    let emplID = parseInt(prompt('Enter the employee\'s ID to remove.'))
    // MAKE SURE THE NUMBER IS VALID
    if (emplID >= 1 && emplID <= employees.length) {
        // SPLICE OUT EMPLOYEE TO REMOVE
        let employee = employees.splice(emplID - 1, 1)
        // SHOW SUCCESS MESSAGE
        console.log(`${employee} was deleted.`)
        console.log('')
    } else {
        alert('Invalid employee ID.')
    }
}

// FUNCTION TO CALL WHEN PAGE LOADS
function init() {
    // BEGIN BY SHOWING A MAIN MENU
    console.log('EMPLOYEE MANAGEMENT APPLICATION')
    console.log('-------------------------------')
    console.log('COMMAND MENU')
    console.log('view - view all employees')
    console.log('add - add an employee')
    console.log('remove - remove an employee')
    console.log('exit - exit the application')
    console.log('')

    // BUILD OUT INITIAL ARRAY OF EMPLOYEES
    let employees = [
        'Zak Ruvalcaba',
        'Sally Smith',
        'Pepe Ramirez',
        'Joe Johnson',
        'Stew Franklin'
    ]

    // KEEP COMMAND MENU UP UNTIL USER DECIDES TO EXIT THE PROGRAM
    do {
        // ASK THE USER FOR A COMMAND
        let command = prompt('Enter your command')
        // CHECK AND MAKE SURE USER DID NOT CANCEL OUT OF PROMPT
        if (command !== null) {
            // CHECK THE COMMAND THAT WAS ENTERED
            if (command === 'view') {
                // VIEW EMPLOYEES
                view(employees)
            } else if (command === 'add') {
                // ADD AN EMPLOYEE
                add(employees)
            } else if (command === 'remove') {
                // REMOVE AN EMPLOYEE
                remove(employees)
            } else if (command === 'exit') {
                // EXIT APPLICATION
                break
            } else {
                alert('This is not a valid command.')
            }
        } else {
            alert('Please enter a command.')
        }
    } while (true)
    console.log('Program has been terminated.')
}
init()