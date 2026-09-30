// ===========================================
// STUDENT MANAGEMENT SYSTEM
// ===========================================

// Array to store student records
let students = [];

// Student ID counter
let studentID = 1;

// ===========================================
// GET HTML ELEMENTS
// ===========================================

const studentForm = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");

const addStudentBtn = document.getElementById("addStudentBtn");
const resetFormBtn = document.getElementById("resetFormBtn");

const tableBody = document.getElementById("tableBody");

const searchInput = document.getElementById("search");

const studentCount = document.getElementById("studentCount");

const formMessage = document.getElementById("formMessage");

const pageTitle = document.getElementById("pageTitle");

const logoutBtn = document.getElementById("logoutBtn");

// ===========================================
// ADD STUDENT
// ===========================================

addStudentBtn.addEventListener("click", addStudent);

function addStudent() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const age = ageInput.value.trim();
    const course = courseInput.value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Clear previous message
    formMessage.innerHTML = "";
    formMessage.className = "";

    // Validation

    if (name === "") {

        showError("Student name is required.");
        nameInput.focus();
        return;

    }

    if (email === "") {

        showError("Email address is required.");
        emailInput.focus();
        return;

    }

    if (phone === "") {

        showError("Phone number is required.");
        phoneInput.focus();
        return;

    }

    if (age === "") {

        showError("Age is required.");
        ageInput.focus();
        return;

    }

    if (gender === null) {

        showError("Please select a gender.");
        return;

    }

    if (course === "") {

        showError("Please select a course.");
        courseInput.focus();
        return;

    }

    // Registration Date

    const today = new Date();

    const dateRegistered =
        today.toLocaleDateString();

    // Student Object

    const student = {

        id: studentID,

        name: name,

        email: email,

        phone: phone,

        age: age,

        gender: gender.value,

        course: course,

        date: dateRegistered

    };

    // Store in Array

    students.push(student);

    // Increase ID

    studentID++;

    // Change Heading

    if (students.length === 1) {

        pageTitle.innerHTML = "Registered Students";

    }

    // Display Students

    displayStudents(students);

    // Update Counter

    updateCounter();

    // Success Message

    showSuccess("Student registered successfully.");

    // Clear Form

    studentForm.reset();

}

// ===========================================
// DISPLAY STUDENTS
// ===========================================

function displayStudents(studentArray) {

    tableBody.innerHTML = "";

    for (let i = 0; i < studentArray.length; i++) {

        tableBody.innerHTML += `

        <tr>

            <td>${studentArray[i].id}</td>

            <td>${studentArray[i].name}</td>

            <td>${studentArray[i].email}</td>

            <td>${studentArray[i].phone}</td>

            <td>${studentArray[i].age}</td>

            <td>${studentArray[i].gender}</td>

            <td>${studentArray[i].course}</td>

            <td>${studentArray[i].date}</td>

            <td>

                <button
                    class="deleteBtn"
                    onclick="deleteStudent(${studentArray[i].id})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    }

}

// ===========================================
// DELETE STUDENT
// ===========================================

function deleteStudent(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {

        return;

    }

    students = students.filter(function(student){

        return student.id !== id;

    });

    displayStudents(students);

    updateCounter();

    if (students.length === 0) {

        pageTitle.innerHTML = "Student Dashboard";

    }

}

// ===========================================
// SEARCH
// ===========================================

searchInput.addEventListener("keyup", function(){

    const searchText =
        searchInput.value.toLowerCase();

    const filteredStudents =
        students.filter(function(student){

        return student.name
            .toLowerCase()
            .includes(searchText);

    });

    displayStudents(filteredStudents);

});

// ===========================================
// STUDENT COUNTER
// ===========================================

function updateCounter(){

    studentCount.innerHTML = students.length;

}

// ===========================================
// SUCCESS MESSAGE
// ===========================================

function showSuccess(message){

    formMessage.innerHTML = message;

    formMessage.className = "success";

}

// ===========================================
// ERROR MESSAGE
// ===========================================

function showError(message){

    formMessage.innerHTML = message;

    formMessage.className = "error";

}

// ===========================================
// RESET BUTTON
// ===========================================

resetFormBtn.addEventListener("click", function(){

    formMessage.innerHTML = "";

    formMessage.className = "";

});

// ===========================================
// LOGOUT
// ===========================================

logoutBtn.addEventListener("click", function(){

    const logout = confirm(
        "Are you sure you want to logout?"
    );

    if(logout){

        window.location.href = "index.html";

    }

});