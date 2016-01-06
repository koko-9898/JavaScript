function Person(fname, lname, age, gender) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
}

var persons = ([
            new Person("Kolyo", "Fichkata  ", 22, 'male'),
            new Person("Ivan", "Ivanov  ", 33, 'male'),
            new Person("Grishata", "Georgiev  ", 12, 'male'),
            new Person("Stefan", "Stambata  ", 15, 'male'),
            new Person("Merko", "Bozhilov  ", 26, 'male'),
            new Person("Meri", "Krusteva  ", 7, 'female'),
            new Person("Karina", "Filcheva  ", 21, 'female')
]);

function underAge(persons) {
    return persons.filter(function (item) {
        return item.age <= 18;
    });
}

console.log(underAge(persons));