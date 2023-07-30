export const calculateMode = (values) => {

    const valueCountMap = {};
    let maxCount = 0;
    let mode = null;
  
    values.forEach((val) => {
        
        if (valueCountMap[val]) {
            valueCountMap[val]++;
        }
        else {
            valueCountMap[val] = 1;
        }

        if (valueCountMap[val] > maxCount) {
            maxCount = valueCountMap[val];
            mode = val;
        }
    });
  
    return mode;
};