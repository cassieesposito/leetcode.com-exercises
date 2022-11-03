function isPalindrome(x:number ): boolean {
	if (x < 0) {return false}

	// This is one less than the number of digits
	let digits: number = Math.floor(Math.log(x)/Math.log(10))

	while (digits > 0) {
		let lastDigit: number = x % 10
		let firstDigit: number = Math.floor(x/Math.pow(10,digits))
		if ( lastDigit != firstDigit) {return false}
		x -= firstDigit * Math.pow(10,digits) + lastDigit
		x /= 10
		digits -= 2
	}
	return true
};

console.log (isPalindrome(1234565432))