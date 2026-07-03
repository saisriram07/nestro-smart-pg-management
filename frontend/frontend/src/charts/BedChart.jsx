import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function BedChart({ occupied, vacant }) {

    const data = {
        labels: ["Occupied", "Vacant"],
        datasets: [
            {
                data: [occupied, vacant],
                backgroundColor: [
                    "#198754",
                    "#dc3545",
                ],
            },
        ],
    };

    return (

        <div className="card shadow p-3">

            <h4 className="text-center mb-3">

                Bed Occupancy

            </h4>

            <Doughnut data={data} />

        </div>

    );

}

export default BedChart;