import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

function RevenueChart({ revenue }) {

    const data = {
        labels: ["Revenue"],
        datasets: [
            {
                label: "₹",
                data: [revenue],
                backgroundColor: "#0d6efd",
            },
        ],
    };

    return (

        <div className="card shadow p-3">

            <h4 className="text-center mb-3">

                Revenue Analytics

            </h4>

            <Bar data={data} />

        </div>

    );

}

export default RevenueChart;