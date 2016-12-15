function romanify (digits){
  //the following code works when digits are 1,2,or 3
  if(digits <= 3){
    let numbers = new Array(digits)
    return numbers.fill("I").join('')
  } else if(digits == 4){
    return "IV"
  } else if (digits > 4 && digits <=8){
    return `V${romanify(digits - 5)}`
  } else if (digits == 9){
    return "IX"
  } else if (digits >9 && digits <= 39){
    return `X${romanify(digits - 10)}`
  } else if (digits >=40 && digits <=49){
    return `XL${romanify(digits - 40)}`
  } else if (digits >49 && digits <=89){
    return `L${romanify(digits - 50)}`
  } else if (digits > 90 && digits <=99){
    return `XC${romanify(digits - 90)}`
  } else if (digits >= 100 && digits <=399){
    return `C${romanify(digits - 100)}`
  } else if (digits >= 400 && digits <=499){
    return `CD${romanify(digits - 400)}`
  } else if (digits >= 500 && digits <=899){
    return `D${romanify(digits - 500)}`
  } else if (digits >= 900 && digits <=999){
    return `CM${romanify(digits - 900)}`
  }
    return `M${romanify(digits - 1000)}`




}
module.exports = romanify
