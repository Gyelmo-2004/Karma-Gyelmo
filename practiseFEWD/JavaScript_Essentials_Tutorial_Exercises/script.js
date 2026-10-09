//script.js
console.log("My script is connected!");
const name = "gyelmo";
const age = 21;
const isEnrolled = true;
const subjects = ["HTML", "CSS", "JavaScript"];
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isEnrolled, typeof isEnrolled);
console.log(subjects, typeof subjects);

console.log(`${name} is ${age} years old.`);
const currentYear = 2026;
const yearTurning30 = currentYear + (30 - age);
console.log(`I'll turn 30 in ${yearTurning30}.`);

console.log(age >= 16 && isEnrolled); // true
// change age to 14 and re-check:
// console.log(false && true); // false
// one condition failing changes the whole result

let score = 82;
if (score >= 90) {
console.log("A");
} else if (score >= 75) {
console.log("B");
} else if (score >= 50) {
console.log("C");
} else {
console.log("Needs Improvement");
}

for (let i = 1; i <= 10; i++) {
console.log(`7 x ${i} = ${7 * i}`);
}
let countdown = 5;
while (countdown > 0) {
console.log(countdown);
countdown--;
}

const favoriteSubjects = ["HTML", "CSS", "JavaScript"];
favoriteSubjects.push("Git");
favoriteSubjects.pop();
console.log(favoriteSubjects.length); // 3
let position = 1;
for (const subject of favoriteSubjects) {
console.log(`${position}: ${subject}`);
position++;
}

const student = {
name: "gyelmo",
age: 19,
subjects: ["HTML", "CSS"],
greet: function () {
return `Hi, I'm ${this.name},
studying ${this.subjects.length} subjects.`;
},
};
console.log(student.greet());

function calculateAverage(scores) {
let total = 0;
for (const s of scores) {
total += s;
}
return total / scores.length;
}
const calculateAverageArrow = (scores) => {
let total = 0;
for (const s of scores) {
total += s;
}
return total / scores.length;
};
console.log(calculateAverage([80, 92, 74, 88])); // 83.5
console.log(calculateAverageArrow([80, 92, 74, 88])); // 83.5

const heading = document.querySelector("#message");
const btn = document.querySelector("#changeBtn");
btn.addEventListener("click", () => {
heading.textContent = "You clicked it!";
heading.classList.toggle("highlighted");
});
