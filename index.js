// write your code below!
const name = 'Rafael';
const age = '31';
const country = 'Brazil';
const framewors = ['react', 'meteor', 'node.js', 'rails'];
const url = 'https://github.com/alohawav';

const Greet = (name, age, framewors, url) => {
  console.log(`Hi, my name is ${name}. I'm ${age} years old and I'm from ${country}`);
  console.log('I have projects that use the following frameworks:')
  framewors.map((framework) => {
    console.log(`* ${framework}`)
  })
  console.log(`On my ${url}. Check them out!`)
}

Greet(name, age, framewors, url);
