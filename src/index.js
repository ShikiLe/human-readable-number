module.exports = function toReadable (number) {
    var a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let result = '';
    let decim = Math.floor((number % 100) / 10);
    let dec = number % 100;
    let lastNum = dec % 10;
    let hundred = Math.floor(number / 100);
    if (number < 20) {
    result += a[number];
}
if (number > 19 && number < 100) {
    result += b[decim] + ' ' + a[lastNum];
} 
 if (number > 99 && number < 1000) {
     result += a[hundred] + 'hundred ' + b[decim] + ' ' + a[lastNum];
 }
    return result;
}
