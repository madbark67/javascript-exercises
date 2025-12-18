const findTheOldest = function (people) {
    const getAge = (person) => {
        let currentDate = new Date().getFullYear();
        if (!person.yearOfDeath) {
            age = currentDate - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        return age;
    }
    const oldest = people.reduce((accum, person) => {
        return (getAge(person) > getAge(accum)? person : accum);
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
