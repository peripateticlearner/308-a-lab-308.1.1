
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// ------------------EXAMPLES----------------------------------------

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



// ------------PART ONE OF LAB--------------------

// Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(allDivBy5)
// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast)
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticChain = ((n2 - n1) * n3) % n4;
console.log(arithmeticChain);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
// in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25);



// ----------------PART TWO OF LAB--------------------------------
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Log the results of your calculations using string concatenation or template literals.
const totalMiles = 1500;
const fuelBudget = 175;
const costOfFuelPerGallon = 3

const speed55 = 55;
const mpg55 = 30;

const speed60 = 60;
const mpg60 = 28;

const speed75 = 75;
const mpg75 = 23;

// 55 mph
const gallonsNeeded55 = totalMiles / mpg55;
const fuelCost55 = mpg55 * costOfFuelPerGallon;
const tripTime55 = totalMiles / mpg55;
const withinBudget55 = fuelCost55 <= fuelBudget;
console.log(`At 55mph:
    Gallons needed: ${gallonsNeeded55},
    Fuel cost: ${fuelCost55},
    Trip time: ${tripTime55},
    Within budget: ${withinBudget55}`)


// 60 mph
const gallonsNeeded60 = totalMiles / mpg60;
const fuelCost60 = mpg60 * costOfFuelPerGallon;
const tripTime60 = totalMiles / mpg60;
const withinBudget60 = fuelCost60 <= fuelBudget;
console.log(`At 60mph:
    Gallons needed: ${gallonsNeeded60},
    Fuel cost: ${fuelCost60},
    Trip time: ${tripTime60},
    Within budget: ${withinBudget60}`)

// 75 mph
const gallonsNeeded75 = totalMiles / mpg75;
const fuelCost75 = mpg75 * costOfFuelPerGallon;
const tripTime75 = totalMiles / mpg75;
const withinBudget75 = fuelCost75 <= fuelBudget;
console.log(`At 75mph:
    Gallons needed: ${gallonsNeeded75},
    Fuel cost: ${fuelCost75},
    Trip time: ${tripTime75},
    Within budget: ${withinBudget75}`)

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip? 
// Answer: It depends on the user, if they prefer less time traveled even if the amount is still within budget. For purposes of providing an answer I think 60mph makes most sense interms of a medium between time spent traveling and cost of travel.
