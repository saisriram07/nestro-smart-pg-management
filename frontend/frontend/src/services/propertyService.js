import api from "./api";

export const getProperties = () => {
    return api.get("properties/");
};

export const createProperty = (data) => {
    return api.post("properties/", data);
};

export const updateProperty = (id, data) => {
    return api.put(`properties/${id}/`, data);
};

export const deleteProperty = (id) => {
    return api.delete(`properties/${id}/`);
};