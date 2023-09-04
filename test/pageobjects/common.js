export default class Common{
    constructor(){
    }
async isDecenting (listedPrices) {
    const sortedPrices = [...cleanedPrices].sort((a, b) => b - a);
    if (sortedPrices.length>0){
        return false;
    }
    return true;
}
    };
