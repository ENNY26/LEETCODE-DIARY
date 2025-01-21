var reverseWords = function(s) {
    const newS = s.trim()
    const splitS= newS.split(/\s+/)
    const reversedS = splitS.reverse()
    const joinedS = reversedS.join(' ')
    return joinedS
 };