const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');

    process.exit();
  }
  if (Number(key) >= 1 && Number(key) <= 9) {
    console.log(`setting timer for ${key} seconds...`);

    setTimeout(() => {
      process.stdout.write(`Alarm set for ${key} seconds has gone off!!!\n`);
    }, 1000 * Number(key));
  }
  if (key === '\u0062') {
    console.log('beep!!!');
  }
});

// \u0062 - b -> beep
// \u0031 - 1 -> "setting timer for x seconds"
// \u0039 - 9
