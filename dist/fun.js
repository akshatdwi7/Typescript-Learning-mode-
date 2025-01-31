"use strict";
function CalculateTax(income, taxyear) {
    if (taxyear < 2020)
        return 0.30 * income + 'This your tax for the finanial year ' + taxyear;
    return 'NO tax is calculated beyond the 2020 year duh! ';
}
console.log(CalculateTax(200000, 2019));
//# sourceMappingURL=fun.js.map