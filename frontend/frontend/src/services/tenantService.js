import api from "./api";

export const getTenants = () => {
    return api.get("tenants/");
};

export const createTenant = (data) => {
    return api.post("tenants/", data);
};

export const updateTenant = (id, data) => {
    return api.put(`tenants/${id}/`, data);
};

export const deleteTenant = (id) => {
    return api.delete(`tenants/${id}/`);
};