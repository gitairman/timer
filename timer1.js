// process.stdout.write('\x07');

const alarms = process.argv.slice(2);
// console.log(alarms);

for (const alarm of alarms) {
  let delay = Number(alarm);

  if (!Number.isInteger(delay) || delay < 0) continue;
  setTimeout(() => {
    process.stdout.write(`Alarm set for ${delay} seconds has gone off!!!\n`);
  }, 1000 * delay);
}
