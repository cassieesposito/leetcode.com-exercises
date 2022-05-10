/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

ANY = '.'
REPEAT = '*'

isMatch = (string, pattern) => {
    s = [...string]
    p = [...pattern]
    sI = pI = 0

    while (sI < s.length || pI < p.length) {
        if (p[pI] == s[sI] || p[pI] == ANY) {
            sI++;
            pI++;
            continue
        }
        if (p[pI + 1] == REPEAT) {
            pI++
            continue
        }

        // Recursive handler
        if (p[pI] == REPEAT) {
            return handleStar(string.slice(sI == 0 ? 0 : sI - 1), pattern.slice(pI - 1))
        }

        while (s[sI + 1] >= s.length && p[pI + 1] < p.length) {
            if (p[pI + 2] == REPEAT) {
                pI += 2
                continue
            }
            return false
        }
        return false
    }
    return true
}

handleStar = (string, pattern) => {
    while (true) {
        debugger
        if (isMatch(string, pattern.slice(2))) {
            return true
        }
        if (!string && pattern[0] == ANY) {
            pattern = pattern.slice(2)
        }
        if (pattern[0] == ANY || pattern[0] == string[0]) {
            string = string.slice(1)
            continue
        }
        debugger
        return false
    }
}

console.log(isMatch("aaa", "ab*ac*a"))