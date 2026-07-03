import { useEffect, useState } from "react";
import api from "../services/api";

import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";

import BedChart from "../charts/BedChart";
import RevenueChart from "../charts/RevenueChart";

function Dashboard() {

    const [dashboard, setDashboard] = useState({});

    useEffect(() => {

        api.get("dashboard/")
            .then((response) => {

                setDashboard(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);

    return (

        <DashboardLayout>

            <h2 className="mb-4">

                Nestro Dashboard

            </h2>

            {/* Dashboard Cards */}

            <div className="row">

                <DashboardCard
                    title="Properties"
                    value={dashboard.total_properties}
                    color="primary"
                />

                <DashboardCard
                    title="Buildings"
                    value={dashboard.total_buildings}
                    color="success"
                />

                <DashboardCard
                    title="Rooms"
                    value={dashboard.total_rooms}
                    color="warning"
                />

                <DashboardCard
                    title="Beds"
                    value={dashboard.total_beds}
                    color="danger"
                />

                <DashboardCard
                    title="Occupied Beds"
                    value={dashboard.occupied_beds}
                    color="secondary"
                />

                <DashboardCard
                    title="Vacant Beds"
                    value={dashboard.vacant_beds}
                    color="info"
                />

                <DashboardCard
                    title="Tenants"
                    value={dashboard.total_tenants}
                    color="dark"
                />

                <DashboardCard
                    title="Revenue"
                    value={`₹ ${dashboard.total_revenue}`}
                    color="success"
                />

            </div>

            {/* Charts */}

            <div className="row mt-4">

                <div className="col-lg-6 mb-4">

                    <BedChart
                        occupied={dashboard.occupied_beds}
                        vacant={dashboard.vacant_beds}
                    />

                </div>

                <div className="col-lg-6 mb-4">

                    <RevenueChart
                        revenue={dashboard.total_revenue}
                    />

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;