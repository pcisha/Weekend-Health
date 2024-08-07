# Weekend-Health

## Objective

Find Words
Challenge: https://weekendhealth.notion.site/Weekend-Health-Take-home-Challenge-327d5972824041829cf9ddc32cb7acd6

Implement a function `findWords` that returns an array of words from the dictionary that can be formed by rearranging
some or all of the letters in the input string.

## Solution

### Approach

The solution involves the following key steps:

1. **Character Count Comparison**:
   - For each word in the dictionary, check if it can be formed using the characters from the input string by comparing
     character counts.

2. **Helper Functions**:
   - `countChars`: Counts the occurrences of each character in a string.
   - `canFormWord`: Checks if a word can be formed from the character counts of the input string.

3. **Main Function**:
   - `findWords`: Iterates through the dictionary and uses `canFormWord` to determine if each word can be formed from
     the input string's characters.

### Execution

Compile and run the TypeScript file:

`npx tsc findWords.ts`

`node findWords.js`

### Tech Stack

TypeScript, Node.js, npm, Git, IntelliJ IDEA.

### Time and Space Complexity

`countChars` Function:

Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(1), since the maximum number of unique characters (lowercase English letters) is constant (26).

`canFormWord` Function:

Time Complexity: O(m), where m is the length of the word.
Space Complexity: O(1), for the same reason as above.

`findWords` Function:

Time Complexity: O(d * k), where d is the number of words in the dictionary and k is the average length of the words.
Space Complexity: O(d), for the result array.

## Summary

This `README.md` file includes a clear description of the problem and the approach taken to solve,
time and space complexity analysis, and instructions on how to run the code.
This should provide a comprehensive overview for anyone reviewing the repository.

Author: Prachi Shah

Date: August 7, 2024.
