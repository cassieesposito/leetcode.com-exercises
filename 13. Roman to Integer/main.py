CONST_ROMAN_VALUES = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}


class Solution:
    def romanToInt(self, roman: str) -> int:
        arabic = 0

        for i, numeral in enumerate(roman):
            if str(CONST_ROMAN_VALUES[numeral])[0] == "1" and len(roman) > i + 1:
                if CONST_ROMAN_VALUES[numeral] in (
                    CONST_ROMAN_VALUES[roman[i + 1]] / 5,
                    CONST_ROMAN_VALUES[roman[i + 1]] / 10,
                ):
                    arabic -= 2 * CONST_ROMAN_VALUES[numeral]
            arabic += CONST_ROMAN_VALUES[numeral]

        return arabic


print(Solution().romanToInt("MMCDI"))
