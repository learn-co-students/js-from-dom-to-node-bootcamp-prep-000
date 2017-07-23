var dog = {
  [Symbol.iterator](){
    var pup = 2, kitty = 3;
    return {
      [Symbol.iterator]() { return this},

      next() {
        var animal = pup + kitty;
        pup *= pup;
        kitty *= kitty;
        return {value: animal, done: false};
      },

      return (v) {
        console.log("no more aminals");
        return {value: v, done: true};
      }
    };
  }
};

for (let v of dog) {
  console.log(v);
  if (v > 200){
    break;
  };
};
