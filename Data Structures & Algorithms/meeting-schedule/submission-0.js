/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const time = intervals.sort((a,b)=>a.start - b.end)
        for(let i=0; i<intervals.length-1; i++){
            if(time[i].end <= time[i+1].start){
                continue;
            }else{
                return false;
            }
        }
        return true;
    }
}
