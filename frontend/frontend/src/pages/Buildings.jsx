import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import BuildingForm from "../components/BuildingForm";
import BuildingTable from "../components/BuildingTable";

import {
    getBuildings,
    createBuilding,
} from "../services/buildingService";

function Buildings() {

    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        loadBuildings();
    }, []);

    const loadBuildings = async () => {

        try {

            const response = await getBuildings();

            console.log("Buildings API:", response.data);

            setBuildings(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleAddBuilding = async (building) => {

        try {

            await createBuilding(building);

            alert("Building Added Successfully");

            loadBuildings();

        } catch (error) {

            console.error(error);

            alert("Failed to Add Building");

        }

    };

    return (

        <DashboardLayout>

            <h2 className="mb-4">

                Building Management

            </h2>

            <BuildingForm onAdd={handleAddBuilding} />

            <BuildingTable buildings={buildings} />

        </DashboardLayout>

    );

}

export default Buildings;