#include <iostream>
#include <map>
using namespace std;



class Solution {
	public:
		bool isValid(string s) {

			map <char, char> pairs = {
				{'(',')'},
				{'[',']'},
				{'{','}'}
			};

			while (s[0]) {
				bool noChanges = 1;
				string newS = "";

				int x=s.length();

				for (int i = 0; i < s.length() - 1; i++) {
					// if (pairs.find(s[i]) -> second == s[i+1]) {
					// 	i++;
					// 	noChanges = 0;
					// } else { newS += s[i]; }

					newS += s[i];
					if (pairs.find(s[i]) -> second == s[i+1]) {
						newS.pop_back();
						i++;
						noChanges = 0;
					}
				}

				if (s.length() > 1) {
					if (pairs.find(s[s.length()-2]) -> second != s[s.length()-1]) {
						newS += s[s.length()-1];
					}
				}
				if (noChanges) { return false; }
				s = newS;
			}
			return true;
		};
};

int main () {
	Solution testCase;
	cout <<testCase.isValid("[][][]((({})))") <<endl <<endl;
	return 0;
}
