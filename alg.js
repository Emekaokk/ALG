function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        // Increment sentence length counter
        sentenceLength++;

        // Check if the character is a letter (excluding whitespace)
        if (char.match(/[a-z]/i)) {
            // Increment word count if character is preceded by a space
            if (i === 0 || sentence[i - 1] === ' ') {
                wordCount++;
            }

            // Check if the character is a vowel (case-insensitive)
            if (char.match(/[aeiou]/i)) {
                vowelCount++;
            }
        }
    }

    // Display results
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage:
const sentence = prompt("Enter a sentence (ending with a period): ");
analyzeSentence(sentence);
