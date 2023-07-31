export default function getListStudentIds (arr) {
  try {
    return arr.map((id) => id.id);
  } catch {
    return [];
  }
}
