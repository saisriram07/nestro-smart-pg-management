import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import PropertyForm from "../components/PropertyForm";
import PropertyTable from "../components/PropertyTable";

import {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty,
} from "../services/propertyService";

function Properties() {

    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        loadProperties();
    }, []);

    const loadProperties = () => {

        getProperties()
            .then((response) => {
                setProperties(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleAddProperty = (property) => {

        createProperty(property)
            .then(() => {
                loadProperties();
                alert("Property Added Successfully");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleUpdateProperty = (id, property) => {

        updateProperty(id, property)
            .then(() => {
                loadProperties();
                setSelectedProperty(null);
                alert("Property Updated Successfully");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleDeleteProperty = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this property?"
        );

        if (!confirmDelete) return;

        deleteProperty(id)
            .then(() => {
                loadProperties();
                alert("Property Deleted Successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("Delete Failed");
            });

    };

    return (

        <DashboardLayout>

            <h2 className="mb-4">

                Property Management

            </h2>

            <PropertyForm
                onAdd={handleAddProperty}
                onUpdate={handleUpdateProperty}
                selectedProperty={selectedProperty}
            />

            <PropertyTable
                properties={properties}
                onEdit={setSelectedProperty}
                onDelete={handleDeleteProperty}
            />

        </DashboardLayout>

    );

}

export default Properties;