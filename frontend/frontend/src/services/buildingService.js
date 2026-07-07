import api from "./api";

export const getBuildings = () => {
    return api.get("buildings/");
};

export const createBuilding = (data) => {
    return api.post("buildings/", data);
};

export const updateBuilding = (id, data) => {
    return api.put(`buildings/${id}/`, data);
};

export const deleteBuilding = (id) => {
    return api.delete(`buildings/${id}/`);
};