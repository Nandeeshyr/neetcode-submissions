class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // MaxPriorityQueue keeps the largest elements at the top automatically
        let maxHeap = new MaxPriorityQueue();
        for(let stone of stones){
            maxHeap.enqueue(stone);
        }
        console.log("maxHeap=",maxHeap);
        while(maxHeap.size()>1){
            let y = maxHeap.dequeue(); //Largest
            let x = maxHeap.dequeue(); //second largest
            console.log("y=",y,"x=",x);
            if(x!==y){
                maxHeap.enqueue(y-x);
            }
        }
        return maxHeap.isEmpty() ? 0 : maxHeap.dequeue();
    }
}
