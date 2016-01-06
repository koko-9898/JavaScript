function Person(fname, lname, age, gender) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = !gender ? 'male' : 'female';
}

function printYoungestPersonFullname(arr) {
    var minAge = arr[0].age;
    arr.forEach(function (element) {
        if (minAge > element.age) {
            minAge = element.age;
        }
    });

    var youngestPerson = arr.filter(function (item) {
        if (item.age === minAge) {
            return item;
        }
    });

    return youngestPerson[0].firstName + ' ' + youngestPerson[0].lastName + ' ' + youngestPerson[0].age;
}

var arr = [
	new Person('Doncho', 'Minkov', 25, false),
	new Person('Nikolay', 'Kostov', 7, false),
	new Person('Ivaylo', 'Kenov', 62, false),
	new Person('Pavel', 'Kolev', 12, false),
	new Person('Teodor', 'Kurtev', 73, false),
	new Person('Blagovest', 'Chavdarov', 53, false),
	new Person('Anna', 'Ivanova', 32, true),
	new Person('Iliana', 'Simeonova', 22, true),
	new Person('Svetlana', 'Dragoeva', 7, true),
	new Person('Elica', 'Stoyanova', 13, true)
];

console.log(printYoungestPersonFullname(arr));