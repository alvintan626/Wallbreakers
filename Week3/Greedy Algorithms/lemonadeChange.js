/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let change = [0,0]
    for (let i = 0; i < bills.length; i++){
        if (bills[i] > 5){
            if (bills[i] === 10) {
                change[0]--
                change[1]++
           
            }
            else if (bills[i] === 20 && change[1] > 0){
                change[0]--
                change[1]--
     
            }
            else {
                change[0] -= 3
               
            }
        }
        else {change[0]++}
        if (change[0] < 0 || change[1] < 0){return false}
    }
    return true
};