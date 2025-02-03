"use strict";
function kgtolbs(weigth) {
    if (typeof weigth === 'number')
        return weigth * 2.2;
    else {
        return parseInt(weigth) * 2.2;
    }
}
;
const the_conversion = kgtolbs('89');
console.log(the_conversion);
//# sourceMappingURL=weigh.js.map