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

//Need function to calculate 25% discount with subscription after refill
//and if has a coupon receives $10 discount after the subscription discount.

const calculate = (pricePerRefill, refills, subscription, coupon) => {
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
//const total = (pricePerRefill, refills, subscription, coupon) => {
//  const product = pricePerRefill *refills
// for (keys in sarah){
//   let totalSum = prescription * refills * 0.25
//   return totalSum
//   console.log(totalSum)
//  } if (subscription === true && coupon === false){
// let totalSum = product * 0.25
//   return totalSum
// }

console.log(
  "Grand Total for Timmy: $",
  calculate(
    timmy.pricePerRefill,
    timmy.refills,
    timmy.subscription,
    timmy.coupon
  )
);
console.log(
  "Grand Total for Sarah: $",
  calculate(
    sarah.pricePerRefill,
    sarah.refills,
    sarah.subscription,
    sarah.coupon
  )
);
console.log(
  "Grand Total for Rocky: $",
  calculate(
    rocky.pricePerRefill,
    rocky.refills,
    rocky.subscription,
    rocky.coupon
  )
);

//console.log(total(sarah));
