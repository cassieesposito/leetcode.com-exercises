/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

ANY = '.'
REPEAT = '*'

isMatch = (string,pattern) => {
    s=[...string]
    p = [...pattern]
    sI = pI = 0

    while (sI < s.length || pI < p.length) {
        if (p[pI] == s[sI] || p[pI] == ANY) { sI++; pI++; continue }
        if (p[pI+1] == REPEAT) { pI++; continue }

        // Recursive handler
        if (p[pI] == REPEAT) { debugger; return handleStar(string.slice(sI-1), pattern.slice(pI+1), p[pI-1]) }

        while (s[sI+1] >= s.length && p[pI+1] < p.length) {
            if (p[pI+2] == REPEAT) {pI += 2; continue}
            return false
        }
        return false
    }
    return true
}

handleStar = (string, pattern, character) => { 
    if (!pattern) {return true}
    while (string) {
        debugger
        if (isMatch(string, pattern)) {debugger; return true}
        if (character == ANY || character == string.charAt(0)) { string = string.slice(1); continue }
        return false
    }
}

console.log(isMatch("mississippi","mis*is*p*."))