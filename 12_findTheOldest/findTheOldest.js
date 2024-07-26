const findTheOldest = function(people) {
    /* First Solution
    let oldest = 0;
    let person;
    for (object of people) {
        let age = object.yearOfDeath - object.yearOfBirth;
        if (typeof(object.yearOfDeath) === "undefined") {
            const d = new Date();
            const currentyear = d.getFullYear();
            age = currentyear - object.yearOfBirth;
        }
        if (age > oldest) {
            oldest = age;
            person = object;
        }
    }
    return person;
    */

    // Trying to use .reduce()
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return currentAge < oldestAge ? oldest : current;
    })
};

const getAge = function(birth, death) {
    if (!death) {
        const d = new Date();
        death = d.getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;