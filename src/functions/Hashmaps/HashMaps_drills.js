const HashMap= require('./hashmaps')
HashMap.MAX_LOAD_RATIO= 0.5
HashMap.SIZE_RATIO=3

function main(){
    const lotr= new HashMap()
    //lotr.set('key','value')
    
    const data= [
        {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},{"Wizard": "Gandalf"}, 
        {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
        {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, 
        {"HalfElven": "Arwen"},{"Ent": "Treebeard"}
    ]
    for (let i=0; i<data.length;i++){
        const key= Object.keys(data[i])[0]
        const value= Object.values(data[i])[0]
        lotr.set(key,value)
    }
    return lotr
    //console.log(lotr)
    
}
const lotr= main()
//console.log(lotr.get('Maiar')) //Sauron ('The Necromancer' was replaced, key must be unique)
//console.log(lotr.get('Hobbit')) //Frodo ('Bilbo' was replaced)
//console.log(lotr._capacity)//when the array length is over 50% of the inital capacity, which is 8, the capacity will be increased by 3 times, which is 24.

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);// value=20 (key has been overridden)

    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);// value=10 (key has been overridden)

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
//What is the output of the following code? explain your answer: str1 gets the value of 20, and str3 gets the value of 10

/*
1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

3) Remove duplicates

4) Any permutation a palindrome

5) Anagram grouping

6) Separate Chaining
*/
 