export default function taskBlock(trueOrFalse) {
  // making use of constant variables
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
