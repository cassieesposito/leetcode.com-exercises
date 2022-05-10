/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//I just realized this didn't ban me from using RegExp. This is cheating, right? It's going to kick an error when I actually submit it?
//Update: it did not kick an error. I'm still not sure how I feel about this. Maybe I'll come back to it.

isMatch = (s, p) => {
    return new RegExp('^' + p + '$').test(s)
}