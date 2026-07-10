import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import BedForm from "../components/BedForm";
import BedTable from "../components/BedTable";

import {
    getBeds,
    createBed,
} from "../services/bedService";

function Beds() {

    const [beds, setBeds] = useState([]);

    useEffect(() => {
        loadBeds();
    }, []);

    const loadBeds = async () => {

        try {

            const response = await getBeds();

            console.log(response.data);

            setBeds(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleAddBed = async (bed) => {

        try {

            await createBed(bed);

            alert("Bed Added Successfully");

            loadBeds();

        } catch (error) {

            console.log(error);

            alert("Failed to Add Bed");

        }

    };

    return (

        <DashboardLayout>

            <h2 className="mb-4">

                Bed Management

            </h2>

            <BedForm
                onAdd={handleAddBed}
            />

            <BedTable
                beds={beds}
            />

        </DashboardLayout>

    );

}

export default Beds;