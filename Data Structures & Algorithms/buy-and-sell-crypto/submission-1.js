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
    //prices = [10, 1, 5, 6, 7, 1]
    //Day(i)	Price(prices[i])	minPrice	PotentialProfit(prices[i]-minPrice)	maxProfit	Action
    //
    //0             10               10              10 - 10 = 0                  0           Update minPrice = 10
    //1             1                 1               1 - 1 = 0                   0           Update minPrice = 1
    //2             5                 1               5 - 1 = 4                   4           Update maxProfit = 4
    //3             6                 1               6 - 1 = 5                   5           Update maxProfit = 5
    //4             7                 1               7 - 1 = 6                   6           Update maxProfit = 6
    //5             1                 1               1 - 1 = 0                   6           minPrice stays 1
}
