class Common {
    constructor() {
        
    }

    async isAscending(array) {
        console.log(array);
        for (let i = 0; i < array.length - 1; i++) { // Iterate up to the second-to-last element
            if (array[i] >= array[i + 1]) { // Check if the current element is greater than or equal to the next element
                return false;
            }

        }
        return true;
    }
}

module.exports = Common;

