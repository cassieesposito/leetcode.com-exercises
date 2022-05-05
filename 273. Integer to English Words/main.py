from math import floor

MAGNITUDE = ["", "Thousand", "Million", "Billion"]
ONES = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
TENS = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
]
TEENS = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
]


class Solution:
    def numberToWords(self, num: int) -> str:
        if not num:
            return "Zero"

        wordifiedNum = ""
        for m in MAGNITUDE:
            if num:
                if num % 1000:
                    wordifiedNum = (
                        f" {self.__wordifyThousand(num % 1000)} {m}{wordifiedNum}"
                    )
                num = floor(num / 1000)

        return wordifiedNum.strip()

    def __wordifyThousand(self, num):
        wordifiedNum = ""
        if floor(num / 100):
            wordifiedNum = f" {ONES[floor(num / 100)]} Hundred"
            num -= floor(num / 100) * 100
        if floor(num / 10) == 1:
            wordifiedNum += f" {TEENS[num % 10]}"
            num = 0
        if floor(num / 10):
            wordifiedNum += f" {TENS[floor(num / 10)]}"
            num -= floor(num / 10) * 10
        if num:
            wordifiedNum += f" {ONES[num]}"
        return wordifiedNum[1:]


print(Solution().numberToWords(1000010) + "|")
