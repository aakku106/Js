function createCounter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Output: 1
console.log(counter2()); // Output: 1

console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1

console.log(counter1()); // Output: 3

// Well lest see whats happens here,
// CreateCounter function ley chai aauta count variable with value 0 initilise garxa, asni yo function ley aarko function return garxa that is increment()
// aaba when we call const counter1 = createCounter(); in lien number 12
// counter 1 ma chai aauta closure object aayera basxa with somethign like {*count,*increntnt}
// matlav tho closure object bhitra count variable ko refrence/pointer hunxa which was created by createCounter function adn stored in heap
// ani aarko increment func to refrence hunxa
// and when we call console.log(counter1()); in line number 15
// counter1 ley increment() func ly trigger garxa joslay count ko value o to 1 garxa which was stored in Heap and we had it refrence
// so counter1 ma chai still same counter object xa ie *count ra *increment ley dinay address same xa,
// but tyo specific address/pointer ko value chai change hunxa, i.e in our case *count ko value same xa but count ley dinay
// address to value chai increment function ley change gardiyyo
// Ani jaba samma hamro program ma counter1 ko scope sakinna taba samma heap bata *count safa hunna
