export const calculateMedian = (values) => {

    const sortedValues = values.sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);

    return sortedValues.length % 2 === 0
        ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
        : sortedValues[middle];
};