// declare a function named addSubmission
// parameter(s): array, newName, newScore, newDate

let submissions = [
    {name: "Jane",
     score: 95,
     date: "2020-01-24",
     passed: true},
    {name: "Joe",
     score: 77,
     date: "2018-05-14",
     passed: true},
    {name: "Jack",
     score: 86,
     date: "2019-07-05",
     passed: false},
    {name: "Jill",
     score: 66,
     date: "2020-04-22",
     passed: true}
]

const addSubmission = (array, newName, newScore, newDate) => {
    // construct an object
    const submission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(submission);
    console.log(array);
}
addSubmission(submissions, "Jason", 99, "2020-09-27");

const deleteSubmissionByIndex = (array, index) => {
    // remove the object from the array at the specified index using the splice method
    // example: months.splice(1, 0, 'Feb');
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
    // remove the object from the array that has the provided name
    let index = array.findIndex(element => element.name === name);
    // incorporate the findIndex method and the splice method
    console.log(array.findIndex(element => element.name === name));
    array.splice(index, 1); // removes name
    console.log(submissions);
}
deleteSubmissionByName(submissions, "Jill");

const editSubmission = (array, index, score) => {
    // update objects score in the array at index
    array[index].score = score;
    console.log(array[index].score);
    array[index].passed = score >= 60;
}
editSubmission(submissions, 0, 87);

const findSubmissionByName = (array, name) => {
    // return the object in the array that has the provided name
    // use the find method
    array.find(element => element.name === name);
    console.log(array.find(element => element.name === name));
}
findSubmissionByName(submissions, "Jane");

const findLowestScore = (array) => {
    // return the object in the array that has the lowest score
    // use the forEach method too loop whole array
    let lowestScore = 100;
    array.forEach(element => {
        if (element.score < lowestScore) {
            lowestScore = element.score;
        }
    })
    console.log(lowestScore);
    array.find(element => element.score === lowestScore);
    console.log(array.find(element => element.score === lowestScore));
}
findLowestScore(submissions);

const findAverageScore = (array) => {
    // return average quiz score
    // use for of loop
    let total = 0;
    for (const submission of array) {
        total += submission.score;
    }
    let average = total / array.length;
    return average;
}
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
    // return a new array using the filter method
    // filter method should find objects in array with passing scores
    const passing = array.filter(element => element.score >= 60);
    return passing;
}
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
    // return a new array using the filter method
    // filter method should find objects in array that have scores >= 90
    const passing = array.filter(element => element.score >= 90);
    return passing;
}
console.log(filter90AndAbove(submissions));