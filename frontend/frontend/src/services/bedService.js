import api from "./api";

export const getBeds = () => {
    return api.get("beds/");
};

export const createBed = (data) => {
    return api.post("beds/", data);
};

export const updateBed = (id, data) => {
    return api.put(`beds/${id}/`, data);
};

export const deleteBed = (id) => {
    return api.delete(`beds/${id}/`);
};