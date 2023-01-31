module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = String(n);
    let reverse = +str.split('').reverse().join('');    
    return reverse;
}


// module.exports = function reverse (n) {
  
// }
