
var people = {};

people.index = {};

people.getPerson = function(name) {
    if (typeof name === 'string') {
        return this.index[name];
    } else {
        return 'Name must be a string';
    }
}

people.addPerson = function(name) {
    if (this.getPerson[name]) {
        console.log('Person already exists');
        return this.getPerson[name];
    } else {
        return this.index[name] = {
            name: name, 
            friends: {}
        };
    }
}

people.meet = function(nameA,nameB) {
    if (nameA === nameB) {
        return 'Both people are the same';
    } else {
        // add people if they don't already exist
        var personA = this.addPerson(nameA);
        var personB = this.addPerson(nameB);
        
        if(!personA.friends[nameB]) {
            personA.friends[nameB] = 0;
        }
        if (!personB.friends[nameA]) {
            personB.friends[nameA] = 0;
        }
        
        personA.friends[nameB]++;
        return personB.friends[nameA]++;
    }
}

people.haveMet = function(nameA,nameB) {
    var personA = this.getPerson(nameA);
    
    if (personA.friends[nameB]) {
        return true;
    }
}

people.friendsOf = function(name) {
    var person = this.getPerson(name);
    
    // Create friends array
    var friends = [];
    for (var friend in person.friends) {
        friends.push(friend);
    }
    
    // sort():
    // join(): 
    return friends.sort().join();
}


// PART B

people.copy = function(obj) {
    var copy = {},
        key;

    for (key in obj) {
        copy[key]=obj[key];
    }
    return copy;
}

people.union = function(objA,objB) {
    var union = copy(objA);

    for (var key in objB) {
        union[key] = (union[key] || objB[key]);
    }
    return union;
}

people.friendsOfFriendsOf = function(name) {
    var person = this.getPerson(name);
    
    var names = this.copy(person.friends);
    for (var friend in person.friends) {
        this.union(names, this.getPerson(name).friends);
    }
    
    var nameArray = Object.keys(names);
    return nameArray.sort().join();
}
