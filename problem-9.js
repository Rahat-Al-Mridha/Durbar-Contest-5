function groupStudentsByGradeBand(students) {
  const result = {
    A: [],
    B: [],
    C: [],
    F: []
  };

  students.forEach((student) => {
    if (student.marks >= 80) {
      result.A.push(student);
    } else if (student.marks >= 70) {
      result.B.push(student);
    } else if (student.marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  });

  return result;
}

console.log(groupStudentsByGradeBand([{"marks":85,"name":"Alice"},{"marks":72,"name":"Bob"},{"marks":58,"name":"Charlie"},{"marks":91,"name":"David"}]))
console.log(groupStudentsByGradeBand([{"marks":65,"name":"Eve"},{"marks":60,"name":"Frank"}]))