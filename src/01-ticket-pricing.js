/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manstringToNumberr hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If stringToNumber is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's stringToNumber
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  let stringToNumber = Number(age);
  if(stringToNumber<0 || isNaN(stringToNumber)){
    return -1;
  }
  let price;
  if(stringToNumber>=0 && stringToNumber<=12){
    price = 8;
  }else if(stringToNumber>=13 && stringToNumber<=17){
    price = 12;
  }else if(stringToNumber>=18 && stringToNumber<=59){
    price = 15;
  }
  else{
    price = 10;
  }
  if(isWeekend){
    price = price +3;
  }
  return price;
}
