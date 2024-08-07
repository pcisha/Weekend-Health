// Function to count the occurrences of each character in a string
function countChars(str: string): Record<string, number> {
    const charCount: Record<string, number> = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

// Function to check if a word can be formed using the characters from the input string
function canFormWord(inputCount: Record<string, number>, word: string): boolean {
    const wordCount = countChars(word);
    for (const char in wordCount) {
        if (wordCount[char] > (inputCount[char] || 0)) {
            return false;
        }
    }
    return true;
}

// Main function to find the words that can be formed from the input string
function findWords(inputString: string, dictionary: string[]): string[] {
    const inputCount = countChars(inputString);
    const result: string[] = [];

    for (const word of dictionary) {
        if (canFormWord(inputCount, word)) {
            result.push(word);
        }
    }

    return result;
}

// Test cases
const dictionary1 = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"];
console.log(findWords("ate", dictionary1)); // output: ["ate", "eat", "tea"]
console.log(findWords("oogd", dictionary1)); // output: ["dog", "do", "god", "goo", "go", "good"]

const dictionary2 = ["cat", "bat", "rat", "drat", "dart", "tad", "trade"];
console.log(findWords("adrt", dictionary2)); // output: ["rat", "drat", "dart", "tad"]

const dictionary3 = ["hello", "world", "low", "how", "owl"];
console.log(findWords("hollow", dictionary3)); // output: ["low", "owl"]

const dictionary4 = ["a", "aa", "aaa", "aaaa"];
console.log(findWords("aaa", dictionary4)); // output: ["a", "aa", "aaa"]

const dictionary5 = ["a", "aa", "aaa", "b", "bb"];
console.log(findWords("a", dictionary5)); // output: ["a"]

const dictionary6 = ["a", "aa", "aaa", "b", "bb", "aab", "abb", "baa"];
console.log(findWords("aab", dictionary6)); // output: ["a", "aa", "aab", "baa"]

const dictionary7 = ["a", "aa", "aaa", "b", "bb"];
console.log(findWords("", dictionary7)); // output: []

const dictionary8 = ["cat", "dog", "fish"];
console.log(findWords("xyz", dictionary8)); // output: []