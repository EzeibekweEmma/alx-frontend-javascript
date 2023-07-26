export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const rtask = true;
    const task2 = false;
  }

  return [task, task2];
}
