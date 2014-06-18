
var cardReader = {

	// Check for numbers
	 checkCard: function(n) {
	    if (typeof n === 'number') {
	        if (n >= 0) {
	            if (n < 52) {
	                return true;
	            }
	        }
	    } else {
	        return false;
	    }
	},

	// Check for rank
	 checkRank: function(n) {
	    if (typeof n === 'number') {
	        if (n > 0) {
	            if (n < 14) {
	                return true;
	            }
	        }
	    } else {
	        return false;
	    }
	},

	// Check suit
	 checkSuit: function(n) {
	    if (typeof n === 'number') {
	        if (n > 0 && n < 5) {
	            return true;
	        }
	    } else {
	        return false;
	    }
	},

	// Returns 1-13, representing the card's rank
	rank: function(card) {

		if (this.checkCard(card)) {
	        if (card < 4) {
	            return 1;
	        } else if (card >= 4 && card <= 7) {
	            return 2;
	        } else if (card >= 8 && card <= 11) {
	            return 3;
	        } else if (card >= 12 && card <= 15) {
	            return 4;
	        } else if (card >= 16 && card <= 19) {
	            return 5;
	        } else if (card >= 20 && card <= 23) {
	            return 6;
	        } else if (card >= 24 && card <= 27) {
	            return 7;
	        } else if (card >= 28 && card <= 31) {
	            return 8;
	        } else if (card >= 32 && card <= 35) {
	            return 9;
	        } else if (card >= 36 && card <= 39) {
	            return 10;
	        } else if (card >= 40 && card <= 43) {
	            return 11;
	        } else if (card >= 44 && card <= 47) {
	            return 12;
	        } else if (card >= 48 && card <= 51) {
	            return 13;
	        }
	    } else {
	        return false;
	    }

	},

	suit: function(card) {
        
        if (this.checkCard(card)) {
            if (card % 4 === 0) {
                return 1;
            } else if (card % 4 === 1) {
                return 2;
            } else if (card % 4 === 2) {
                return 3;
            } else if (card % 4 === 3) {
                return 4;
            }
        } else {
            return false;
        }
	},

	cardID: function(rank,suit) {
        if (this.checkRank(rank) && this.checkSuit(suit)) {
            return ((rank - 1) * 4) + (suit - 1);
        } else {
            return 'Invalid';
        }
	},

	color: function(card) {
        if (this.checkCard(card)) {
            if (card % 4 === 0 || card % 4 === 1) {
                return 'red';
            } else if (card % 4 === 2 || card % 4 === 3) {
                return 'black';
            }
        } else {
            return false;
        }
	},
    
    stringifyRank: function(rank) {
        if (rank === 1) {
            return 'Ace of ';
        } else if (rank === 2) {
            return 'Two of ';
        } else if (rank === 3) {
            return 'Three of ';
        } else if (rank === 4) {
            return 'Four of ';
        } else if (rank === 5) {
            return 'Five of ';
        } else if (rank === 6) {
            return 'Six of ';
        } else if (rank === 7) {
            return 'Seven of ';
        } else if (rank === 8) {
            return 'Eight of ';
        } else if (rank === 9) {
            return 'Nine of ';
        } else if (rank === 10) {
            return 'Ten of ';
        } else if (rank === 11) {
            return 'Jack of ';
        } else if (rank === 12) {
            return 'Queen of ';
        } else if (rank === 13) {
            return 'King of ';
        } else {
            return false;
        }
    },
    
    stringifySuit: function(suit) {
        if (suit === 1) {
            return 'Hearts';
        } else if (suit === 2) {
            return 'Diamonds';
        } else if (suit === 3) {
            return 'Spades';
        } else if (suit === 4) {
            return 'Clubs';
        } else {
            return false;
        }
    },

	//someExtraProperty: whatever...
	name: function(card) {
        if (this.checkCard(card)) {
            return this.stringifyRank(this.rank(card)) + this.stringifySuit(this.suit(card));
        }
	},

	precedes: function(cardA,cardB) {
        if (this.checkCard(cardA) && this.checkCard(cardB)) {
            if ((cardA === 51 && cardB === 0) || (this.rank(cardB) === 13 && this.rank(cardA) === 1)) {
                return true;
            } else if ((this.rank(cardB) - this.rank(cardA)) === 1) {
                // test
                console.log(this.rank(cardA), this.rank(cardB));
                return true;
            } else {
                // test
                console.log(this.rank(cardA), this.rank(cardB));
                return false;
            }
        }
	},

	sameColor: function(cardA,cardB) {
        if (this.checkCard(cardA) && this.checkCard(cardB)) {
            if (this.color(cardA) === this.color(cardB)) {
                return true;
            } else if (this.color(cardA) !== this.color(cardB)) {
                return false;
            }
        }
	},

	nextInSuit: function(cardA) {
        if (this.checkCard(cardA)) {
            if (cardA >= 0 && cardA < 48) {
                return cardA + 4;
            } else if (cardA === 48) {
                return 0;
            } else if (cardA === 49) {
                return 1;
            } else if (cardA === 50) {
                return 2;
            } else if (cardA === 51) {
                return 3;
            }
        } else {
            return 'Invalid input';
        }
	},

	prevInSuit: function(cardB) {
        if (this.checkCard(cardB)) {
            if (cardB > 3) {
                return cardB - 4;
            } else if (cardB === 0) {
                return 48;
            } else if (cardB === 1) {
                return 49;
            } else if (cardB === 2) {
                return 50;
            } else if (cardB === 3) {
                return 51;
            }
        } else {
            return 'Invalid input';
        }
	}
};




// TESTING:
var alias = cardReader;//change as needed

function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(alias.rank(0)===1,"Test 1 failed");
assert(alias.rank(3)===1,"Test 2 failed");
assert(alias.rank(51)===13,"Test 3 failed");
assert(alias.suit(0)===1,"Test 4 failed");
assert(alias.suit(5)===2,"Test 5 failed");
assert(alias.suit(51)===4,"Test 6 failed");
assert(alias.cardID(1,1)===0,"Test 7 failed");
assert(alias.cardID(13,4)===51,"Test 8 failed");
assert(alias.cardID(8,3)===30,"Test 9 failed");
assert(alias.color(0)==='red',"Test 10 failed");
assert(alias.color(2)==='black',"Test 11 failed");
assert(alias.name(5)==='Two of Diamonds',"Test 12 failed");
assert(alias.name(51)==='King of Clubs',"Test 13 failed");
assert(!alias.precedes(0,1),"Test 14 failed");
assert(alias.precedes(0,5),"Test 15 failed");
assert(alias.precedes(51,0),"Test 16 failed");
assert(alias.precedes(50,2),"Test 17 failed");
assert(alias.sameColor(0,1),"Test 18 failed");
assert(!alias.sameColor(1,2),"Test 19 failed");
assert(alias.nextInSuit(0)===4,"Test 20 failed");
assert(alias.nextInSuit(51)===3,"Test 21 failed");
assert(alias.nextInSuit(48)===0,"Test 22 failed");
assert(alias.prevInSuit(0)===48,"Test 23 failed");
assert(alias.prevInSuit(3)===51,"Test 24 failed");
assert(alias.prevInSuit(5)===1,"Test 25 failed");

// Extra testing!
// These tests check that invalid arguments produce invalid output.
// They may need rewriting for certain error-reporting schemes.
assert(!alias.rank(52),"Test 26 failed");
assert(!alias.rank("0"),"Test 27 failed");
assert(!alias.rank(-1),"Test 28 failed");
assert(!alias.suit(52),"Test 29 failed");
assert(!alias.suit(false),"Test 30 failed");
assert(!alias.suit(true),"Test 31 failed");
assert(isNaN(alias.cardID(0,1)),"Test 32 failed");
assert(isNaN(alias.cardID("1",1)),"Test 33 failed");
assert(isNaN(alias.cardID(1,5)),"Test 34 failed");
assert(isNaN(alias.cardID(14,1)),"Test 35 failed");
assert((typeof alias.color('apple'))!='string',"Test 36 failed");
assert((typeof alias.name(false))!='string',"Test 37 failed");
assert((typeof alias.precedes(51,52))!='boolean',"Test 38 failed");
assert((typeof alias.precedes(-1,0)),"Test 39 failed");
assert((typeof alias.sameColor("0","1"))!='boolean',"Test 40 failed");
assert(isNaN(alias.nextInSuit(52)),"Test 41 failed");
assert(isNaN(alias.prevInSuit(52)),"Test 42 failed");
