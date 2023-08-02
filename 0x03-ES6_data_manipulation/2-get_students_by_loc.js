export default function getStudentsByLocation (arr) {
  try {
    return arr.filter((list) => list.location === 'San Francisco');
  } catch {
    '';
  }
}
