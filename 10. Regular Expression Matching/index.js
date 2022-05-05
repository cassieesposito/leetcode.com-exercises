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

        if (p[pI] == REPEAT) {
            if (p[pI-1] == s[sI]) {sI++; continue}
            if (p[pI-1] == ANY) { return dotStar(string.slice(sI-1), pattern.slice(pI+1)); }
            pI++; continue
        }

        while (s[sI+1] >= s.length && p[pI+1] < p.length) {
            if (p[pI+2] == REPEAT) {pI += 2; continue}
            return false
        }

        return false
    }
    return true
}

dotStar = (string, pattern) => { 
    if (!pattern) {return true}
    while (string) {
        if (isMatch(string, pattern)) {return true}
        string = string.slice(1)
    }
    return false
}

console.log(isMatch("aaa", "a*a"))