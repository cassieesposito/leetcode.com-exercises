function isPalindrome(x:number ): boolean {
	let n: number = x
	let y: number = 0
	while (n > 0) {
		y = y * 10 + n % 10
		n = Math.floor(n/10)
	}
	return (x==y)
};

console.log (isPalindrome(0))