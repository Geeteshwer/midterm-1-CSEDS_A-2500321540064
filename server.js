const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    {
        id: 1,
        courseName: "Java",
        courseCode: "CS101",
        department: "CSEDS"
    }
];
// Create
app.post('/courses', (req, res) => {
    courses.push(req.body);
    res.send("Course Added Successfully");
});
// Read
app.get('/courses', (req, res) => {
    res.json(courses);
});
// update
app.put('/courses/:id', (req, res) => {
    let course = courses.find(c => c.id == req.params.id);

    if (course) {
        course.courseName = req.body.courseName;
        course.courseCode = req.body.courseCode;
        course.department = req.body.department;

        res.send("Course Upodated Successfully");
    }
    else{
        res.send("Course Not Found");
    }
});
// delete
app.delete('/courses/:id', (req, res) => {
    courses = courses.filter(c => c.id != req.params.id);
    res.send("Course Deleted Successfully");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});



