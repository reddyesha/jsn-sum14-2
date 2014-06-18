/**
 * Part A
 */

var array = {length: 0};

array.pop = function () {
    if (this.length === 0) {
        // length of array is zero, so nothing to pop
        return undefined;
    } else {
        // store value
        var popped = this[this.length - 1];
        // delete value and reduce length of array by one
        delete this[this.length - 1];
        this.length -= 1;
        // return popped value
        return popped;
    }
};

array.push = function (val) {
    this[this.length] = val;
    this.length += 1;
};

array.join = function (char) {
    // assuming first value is not affected
    var output = this[0],
        separator = char,
        i;
    
    for (i = 1; i < this.length; i += 1) {
        output = output + separator;
        output = output + this[i];
    }
    return output;
};


/**
 * Part B:
 * 1. Value for key 'length' is set to 0
 * 2. 'c' is added to key #0
 * 3. 'b' is added to key #1
 * 4. Value of key #1 is deleted and returned ('b' in this case)
 * 5. 'cab' is returned
 */

/**
 * Part C:
 * output = aundefinedundefined
 * Reasoning: this.length is set to zero, so loop does not iterate over first two keys ('a', 'b')
 */