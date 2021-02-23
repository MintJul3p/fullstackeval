
export const SectionsRequest = () => {
    return fetch("http://localhost:5000/section");
};

export const SectionByIdRequest = (id) => {
    return fetch("http://localhost:5000/section/" + id);
};


export const SectionDetailRequest = (id) => {
    return fetch("http://localhost:5000/section/" + id + "/student");
};