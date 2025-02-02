var canConstruct = function(ransomNote, magazine) {
    
    let counter = {} // object here represents the hash map
    for (let char of magazine ){ //loop through the characters of magazine
        counter[char] = (counter[char] || 0) + 1 // this is the counter function.  charcters are not found 0 is returned otherwise incremented 
    }

    for (let char of ransomNote){
        if(!counter[char]) { //if character does not exist in magazine 
            return false 
        }
        counter[char]--
    }
    
    return true
};
