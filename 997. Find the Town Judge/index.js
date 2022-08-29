/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */


let findJudge = (n, trust) => {
    if (n == 1) { return 1 }
    let trusts = new Set()
    let trustedBy = new Object()
    for ([truster, trustee] of trust) {
        trusts.add(truster)
        if (!(trustee in trustedBy)) { trustedBy[trustee] = new Set() }
        trustedBy[trustee].add(truster)
    }
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

]))