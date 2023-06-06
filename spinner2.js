process.stdout.write('hello from spinner1.js... \rheyyy\n');

let output = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\n']
let i = 0;
for (const str of output) {
  setTimeout(() => {
    process.stdout.write(str);
  }, 100 + i*200) // <= 1s delay to make it noticeable. Can dial it down later.
  i++;
}