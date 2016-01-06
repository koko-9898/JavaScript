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
            new Person("Stefan", "Stambata  ", 7    , 'male'),
            new Person("Merko", "Bozhilov  ", 26, 'male'),
            new Person("Meri", "Krusteva  ", 62, 'female'),
            new Person("Karina", "Filcheva  ", 21, 'female')
]);



console.log(persons.filter(function (item) {
    return item.age >= 18;
}));
   
