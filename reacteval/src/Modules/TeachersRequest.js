export const TeachersRequest = () => {
    return fetch("http://localhost:5000/teacher");
};


export const TeacherDetailRequest = (id) => {
    return fetch("http://localhost:5000/teacher/" + id + "/subject");
};

export const TeacherCreate = (teacher) => {
    return fetch("http://localhost:5000/teacher/", {
        "method": "POST",
        "headers": {"content-type": "application/json; charset=utf-8"},
        "body": JSON.stringify(teacher)
    })
}