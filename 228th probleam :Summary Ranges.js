#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> result;
        int n = nums.size();
        
        if (n == 0) {
            return result;
        }
        
        for (int i = 0; i < n; i++) {
            int start = nums[i];
            
            // Advance the index as long as the sequence is contiguous
            while (i + 1 < n && nums[i + 1] == nums[i] + 1) {
                i++;
            }
            
            // If the start and current numbers are the same, it's a single number
            if (start == nums[i]) {
                result.push_back(to_string(start));
            } else {
                // Otherwise, it's a range
                result.push_back(to_string(start) + "->" + to_string(nums[i]));
            }
        }
        
        return result;
    }
};
