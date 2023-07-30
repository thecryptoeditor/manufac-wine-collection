export const calculateMean = (values) => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
};