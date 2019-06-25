var findComplement = function(num) {
    var str = num.toString(2);
    var ans = "";
    for(var i = 0; i < str.length; i++) {
        ans = ans + (str.charAt(i) === "0" ? "1" : "0");
    }
    return parseInt(ans, 2);
};
