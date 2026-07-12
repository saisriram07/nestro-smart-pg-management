import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import TenantForm from "../components/TenantForm";
import TenantTable from "../components/TenantTable";

import {
    getTenants,
    createTenant,
} from "../services/tenantService";

function Tenants() {

    const [tenants, setTenants] = useState([]);

    useEffect(() => {

        loadTenants();

    }, []);

    const loadTenants = async () => {

        try {

            const response = await getTenants();

            console.log(response.data);

            setTenants(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleAddTenant = async (tenant) => {

        try {

            await createTenant(tenant);

            alert("Tenant Added Successfully");

            loadTenants();

        } catch (error) {

            console.log(error);

            alert("Failed to Add Tenant");

        }

    };

    return (

        <DashboardLayout>

            <h2 className="mb-4">

                Tenant Management

            </h2>

            <TenantForm
                onAdd={handleAddTenant}
            />

            <TenantTable
                tenants={tenants}
            />

        </DashboardLayout>

    );

}

export default Tenants;