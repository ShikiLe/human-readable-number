module.exports = function toReadable (number) {
    var a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const decim = Math.floor((number % 100) / 10);
    const dec = number % 100;
    const lastNum = dec % 10;
    const hundred = Math.floor(number / 100);
    if (number === 0) {
        return 'zero';
    }
    if (number < 20) {
        return a[number];
    }
    if (dec === 0) {
        return a[hundred] + ' hundred';
    }
    if (dec === 0 && lastNum < 10) {
        return a[hundred] + ' hundred ' + a[lastNum];
    }
    if (number > 19 && number < 100) {
        if (lastNum === 0) {
            return b[decim];
        }
            if (dec === 0) {
                return b[decim];
            }
        return b[decim] + ' ' + a[lastNum];
    } 
    
     if (number > 99 && number < 1000) {
          if (dec < 20 && dec > 9) {
           return a[hundred] + ' hundred ' + a[dec];
         }
         if (decim > 0 && decim < 10 && lastNum === 0) {
             return a[hundred] + ' hundred ' + b[decim];
         }
         if (decim === 0 && lastNum > 0 && lastNum < 10) {
             return a[hundred] + ' hundred ' + a[lastNum];
         }
         if (lastNum === 0 && decim > 19) {
        return a[hundred] + ' hundred ' + b[decim];
        } else {
         return a[hundred] + ' hundred ' + b[decim] + ' ' + a[lastNum];}
     } 
}
