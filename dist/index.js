"use strict";
function assignGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function createStudent(name, age, korean, math, society, science, english) {
  return {
    name, // name : name
    age,
    scores: {
      korean,
      math,
      society,
      science,
      english,
    },
  };
}
// 평균
function calculateAverage(student) {
  const sum =
    student.scores.korean +
    student.scores.math +
    student.scores.society +
    student.scores.science +
    student.scores.english;
  //   const average = sum / 5;
  const average = sum / Object.keys(student.scores).length;
  return average;
}

function printResult(student) {
  const average = calculateAverage(student);
  const grade = assignGrade(average);
  console.log(
    `${student.name} (${student.age}세) - 평균: ${average.toFixed(
      2
    )}, 학점: ${grade}`
  );
}

function main() {
  const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
  printResult(spartan);
}

main(); // main 함수를 호출하는 코드가 당연히 있어야 실행이 되겠죠?
