function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanNumerals = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    // Initialize the result string
    let result = "";

    // Iterate over the symbols and values
    for (let i = 0; i < romanNumerals.length; i++) {
        const [symbol, value] = romanNumerals[i];

        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value;     // Subtract the value from the number
        }
    }

    return result; // Return the final Roman numeral
}
