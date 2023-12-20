// Write your solution in this file!


//1) returns an employee with the original key value pairs and the new key value pair
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.



const employee = { name: "Josephine", streetAddress: "182, Machakos" }
//  2) it does not modify the original employee, but rather returns a clone with the new data

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employed = { ...employee }
    employed[key] = value;
    return employed

}
//  3) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;



}
//4) deletes `key` from a clone of employee and returns the new employee(it is non - destructive)
//5) does not modify the original employee(it is non - destructive)

function deleteFromEmployeeByKey(employee, key) {
    const employed = { ...employee }
    delete employed[key]
    return employed;
}



//6) returns employee without the deleted key / value pair
//7) modifies the original employee





function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}
