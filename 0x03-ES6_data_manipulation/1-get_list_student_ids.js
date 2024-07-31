/*
*retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns
 */
export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [] 
} 
{ 
   return array.map((a) => a.id)
  }
  return [];
};
