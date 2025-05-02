var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let result = [];

    const backtrack = (path, index) => {
        if (path.length === digits.length) {
            result.push(path);
            return;
        }
        let letters = map[digits[index]];
        for (let letter of letters) {
            backtrack(path + letter, index + 1);  
        }
    }

    backtrack("", 0);
    return result;
};
