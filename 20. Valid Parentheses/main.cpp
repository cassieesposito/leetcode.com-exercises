#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <stack>
using namespace std;



class Solution {
	public:
		bool isValid(string s) {
			unordered_set<char> openers = {'(','[','{'};
			unordered_map<char, char> closers = {
				{')','('},
				{']','['},
				{'}','{'}
			};

			stack<char> st;

			for (char c : s) {
				if (openers.count(c)) {
					st.push(c);
					continue;
				}
				if (st.empty()) return false;
				if (st.top() == closers[c]) {
					st.pop();
					continue;
				}
				return false;
			}
			if (st.empty()) return true;
			return false;
		};
};

int main () {
	Solution testCase;
	cout <<testCase.isValid("[][][]((({})))") <<endl <<endl;
	return 0;
}
