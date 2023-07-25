export function taskFirst() {
  // using const variables
  const task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  // returning " is okay"
  return " is okay";
}

export function taskNext() {
  // using let variables
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
