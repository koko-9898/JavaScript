
function makePerson(firstname, lastname, age, gender) {
    var person = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    };
    return person;
}

var people = [
    new makePerson('Todor', 'Todorov', 12, false),
    new makePerson('Biser', 'Biserov', 34, false),
    new makePerson('Nikola', 'Nikolov', 4, false),
    new makePerson('Mariq', 'Marieva', 6, true),
    new makePerson('Tanq', 'Tancheva', 12, true),
    new makePerson('Georgi', 'Georgiev', 17, false),
    new makePerson('Stanislava', 'Stanislavova', 27, true),
    new makePerson('Petar', 'Petrov', 34, false),
    new makePerson('Tedi', 'Todorova', 52, true),
    new makePerson('Daniel', 'Danielov', 15, false)
];

var result;

result = people.filter(function (item) {
    return item.gender;
});

console.log('Females : \n');

result.forEach(function (item, i) {
    var gend,
        str;

    if (result[i].gender) {
        gend = 'female';
    } else {
        gend = 'male';
    }

    str = (+i + 1) + '. ' + result[i].firstname + ' ' + result[i].lastname +
        ' is ' + gend + ' and is ' + result[i].age + ' years old.';

    console.log(str);
});

var averageAge;

averageAge = result.reduce(function (s, item) {
    return s + item.age;
}, 0) / result.length;

console.log('\nAverage age of females is : ' + averageAge + ' years!\n');
