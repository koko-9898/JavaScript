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
    new makePerson('Todor', 'Todorov', 19, false),
    new makePerson('Petq', 'Biserova', 25, false),
    new makePerson('Nikola', 'Nikolov', 13, false),
    new makePerson('Mariq', 'Marieva', 22, true),
    new makePerson('Tanq', 'Tancheva', 45, true),
    new makePerson('Stancho', 'Georgiev', 17, false),
    new makePerson('Stanislava', 'Stanislavova', 11, true),
    new makePerson('Petar', 'Petrov', 23, false),
    new makePerson('Tedi', 'Todorova', 15, true),
    new makePerson('Nedqlko', 'Danielov', 29, false)
];

var groups;

groups = people.reduce(function (obj, item) {
    var letter = item.firstname[0];

    if (obj[letter]) {
        obj[letter].push(item);
    } else {
        obj[letter] = [item];
    }
    return obj;
}, {});


var gend,
    str,
    current;

for (item in groups) {

    console.log('Group:' + item);

    for (i in groups[item]) {
        current = groups[item][i];
        if (current.gender) {
            gend = 'female';

        } else {
            gend = 'male';
        }

        str = current.firstname + ' ' + current.lastname +
            ' is ' + gend + ' and is ' + current.age + ' years old.';

        console.log(str);
    }
    console.log();
}