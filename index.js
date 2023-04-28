// Using the following criteria, your first assignment is to create the logic for their checkout system
// that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

//Function to calculate price after refill
function calculate (customer){ 
  const price = customer.pricePerRefill * customer.refills;
  return price 
}
//console.log(calculate(rocky));

//Function for 25% discount with subscription after refill
function discount (customer){
  if (customer.subscription === true){
  const percent25 = calculate(customer) - calculate(customer) * 0.25
  return percent25  
} else return calculate(customer)
}
//console.log(discount(rocky))

//Function if customer has a coupon receives $10 discount after the subscription discount.
function coupon (customer){
if (customer.coupon === true){
  const coupon10 = discount(customer) - 10 
  return coupon10
} else return discount(customer)
}
//console.log(coupon(rocky))

//Declare final amount for each customer
const finalAmountTimmy= coupon(timmy)
const finalAmountSarah = coupon(sarah)
const finalAmountRocky = coupon(rocky) 

//Prints on console results
console.log(`Timmy => "Your grand total is $${finalAmountTimmy}"`)
console.log(`Sarah => "Your grand total is $${finalAmountSarah}"`)
console.log(`Rocky => "Your grand total is $${finalAmountRocky}"`)



//-----------------------------------------------------------------------------------------------------------------------//
//Original code but forgot I needed three functions for the workshop
const calculate1 = (pricePerRefill, refills, subscription, coupon) => {
  const product = pricePerRefill * refills;

  if (subscription === true && coupon === true) {
    const total = product * 0.25;
    const grandTotal = product - total - 10;
    return grandTotal;
  } else if (subscription === false && coupon === true) {
    const grandTotal = product - 10;
    return grandTotal;
  } else if (subscription === true && coupon === false) {
    const total = product * 0.25;
    const grandTotal = product - total;
    return grandTotal;
  } else return product;
};

console.log(`Grand Total for Timmy: $${calculate1(timmy.pricePerRefill,timmy.refills,timmy.subscription,timmy.coupon)}`);

console.log(`Grand Total for Sarah: $${calculate1(sarah.pricePerRefill,sarah.refills,sarah.subscription,sarah.coupon)}`);

console.log(`Grand Total for Rocky: $${calculate1(rocky.pricePerRefill,rocky.refills,rocky.subscription,rocky.coupon)}`);

//console.log(total(sarah));
