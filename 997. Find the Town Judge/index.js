/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */


let findJudge = (n, trust) => {
    if (n == 1) { return 1 }
    let trusts = new Set()
    let trustedBy = new Object()
    trust.forEach(e => {
        trusts.add(e[0])
        if (!(e[1] in trustedBy)) { trustedBy[e[1]] = new Set() }
        // console.log(e[0])
        trustedBy[e[1]].add(e[0])
            // console.log(trustedBy[e[1]])
    })
    trusts.forEach(e => { delete trustedBy[e] })

    keys = Object.keys(trustedBy)
    if (keys.length == 1 && (trustedBy[keys[0]].size == n - 1)) { return keys[0] }
    return -1
};


console.log(findJudge(5, [
    [1, 3],
    [2, 3],
    [4, 3],
    [5, 3],
    [1, 2],
    [1, 4],
    [3, 1]
]))