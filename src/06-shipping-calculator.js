/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  // Your code here
  let weights = Number(weight);
  let countrys = String(country).trim();
  let orderTotals = Number(orderTotal);
  let shipping;
  if(weights<=0 || orderTotals<0){
    return -1
  }
  if(countrys ==="US" && orderTotals >50){
    return 0; 
  }
  if(countrys !=="US" && orderTotals >100){
    return 0;
  }
  if(countrys ==="US"){
    if(weight<=1){
      shipping = 5;
    }else if(weights<=5){
      shipping = 10;
    }else if(weights<=10){
      shipping = 15
    }
  }else{
    if(weights<=1){
      shipping = 15;
    }else if(weights<=5){
      shipping = 25;
    }else if(weights<=10){
      shipping = 40;
    }
  }
  return shipping;
}
