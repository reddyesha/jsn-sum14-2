// Part A: Copy, Equal, Similar

function copy(obj) {
    var copy = {},
        key;

    for (key in obj) {
        copy[key]=obj[key];
    }
    return copy;
}

function equal(objA,objB) {
    var key;

    for (key in objA) {
        if (objA[key] !== objB[key])
            return false;
    }
    for (key in objB) {
        if (objB[key] !== objA[key])
            return false;
    }
    return true;
}

function similar(objA,objB) {
    var key;

    for (key in objA) {
        if (!(key in objB))
            return false;
    }
    for (key in objB) {
        if (!(key in objA))
            return false;
    }
    return true;
}


// Part B: Union, Intersection, Subtraction

function union(objA,objB) {
    var union = copy(objA);

    for (var key in objB) {
        union[key] = (union[key] || objB[key]);
    }
    return union;
}

function intersection(objA,objB) {
    var isect = {};

    for (var key in objA) {
        if (key in objB)
            isect[key] = (objA[key] && objB[key]);
    }
    return isect;
}

function difference(objA,objB) {
    var diff = copy(objA);

    for (var key in objB) {
        delete diff[key];
    }
    return diff;
}


// Part C: Assertions
function assert(claim,warning) {
    if (!claim) console.log(warning);
}

// union assertions
