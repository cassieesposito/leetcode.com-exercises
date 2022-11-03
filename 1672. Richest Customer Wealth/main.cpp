#include <iostream>
#include <vector>
using namespace std;


class Solution {
	public:
		int maximumWealth(vector<vector<int>>& accounts) {
			int maxWealth = -1;
			for (vector<int> customer : accounts) {
				int wealth=0;
				for (int bank : customer) { wealth += bank; }
				maxWealth = max(wealth, maxWealth);
			}
			return maxWealth;
		}
};

int main () {
	vector<vector<int>> accounts {{1,2,3},{4,5,60},{22},{21,3}};
	Solution sol;
	cout <<sol.maximumWealth(accounts) <<endl;
	return 0;
}
