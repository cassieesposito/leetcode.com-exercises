CONST_ROMAN_VALUES = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}


class Solution:
    def romanToInt(self, roman: str) -> int:

        lastIndex = len(roman) - 1
        arabic = CONST_ROMAN_VALUES[roman[lastIndex]]
        for i in range(lastIndex):
            if CONST_ROMAN_VALUES[roman[i]] < CONST_ROMAN_VALUES[roman[i + 1]]:
                arabic -= 2 * CONST_ROMAN_VALUES[roman[i]]
            arabic += CONST_ROMAN_VALUES[roman[i]]

        return arabic


print(Solution().romanToInt("VXXVI"))
