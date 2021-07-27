process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinner = (character, delayTime) => {
  
  setTimeout(() => {
    process.stdout.write(`\r${character} `);
  }, delayTime);

};
// let incr = 100;

spinner('|', 100);
spinner('/', 300);
spinner('-', 500);
spinner('\\', 700);
spinner('/', 900);
spinner('-', 1100);
spinner('|', 1300);

setTimeout(() => {
  process.stdout.write("\n");
}, 2500);