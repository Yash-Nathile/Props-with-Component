import React from "react";
const students = [
    { id: 601, name: "Yash Nathile", age: 22, grade: "10th", school: "Greenwood High" },
    { id: 602, name: "Anup borode", age: 17, grade: "11th", school: "Sunrise Academy" },
    { id: 603, name: "Ram Sinhe", age: 18, grade: "12th", school: "Riverdale School" }
];

function Students() {
    return (
        <>
        {students.map((student) => (
            <div key={student.id}>
                <h2>Name: {student.name}</h2>
                <p>Age: {student.age}</p>
                <p>Grade: {student.grade}</p>
                <p>School: {student.school}</p>
                <hr />
            </div>
        ))}
        </>
    );
}
export default Students;