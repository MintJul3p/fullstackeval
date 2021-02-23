export const StudentCreate = (student) => {
    return fetch("http://localhost:5000/student/", {
        "method": "POST",
        "headers": {"content-type": "application/json; charset=utf-8"},
        "body": JSON.stringify(student)
    })
}