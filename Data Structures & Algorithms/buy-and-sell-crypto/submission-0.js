class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]; //Consider first element as buying price 
        let profit = 0; //Starting from the profit 0
        for(let i=0;i<prices.length;i++){
            if(prices[i] < minPrice){ 
                minPrice = prices[i]  //Choosing the minimum price to buy
            }else{ //
                let curProfit = prices[i] - minPrice; 
                profit = Math.max(curProfit, profit);
            }
        }
        return profit;
    }
}
