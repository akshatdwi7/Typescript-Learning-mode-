function kgtolbs(weigth: number | string):number{
if (typeof weigth ==='number')
    return weigth * 2.2 ;
else {
    return parseInt (weigth)*2.2;
}
}
;
const the_conversion = kgtolbs('89')
console.log(the_conversion);