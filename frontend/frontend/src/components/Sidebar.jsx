import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="bg-dark text-white p-3"
            style={{ minHeight: "100vh" }}
        >
            <h4 className="mb-4">
                Dashboard
            </h4>

            <hr />

            <ul className="nav flex-column">

                <li className="nav-item mb-3">
                    <Link
                        to="/dashboard"
                        className="nav-link text-white"
                    >
                        🏠 Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link
                        to="/properties"
                        className="nav-link text-white"
                    >
                        🏢 Properties
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <span className="nav-link text-secondary">
                        🏗 Buildings
                    </span>
                </li>

                <li className="nav-item mb-3">
                    <span className="nav-link text-secondary">
                        🚪 Rooms
                    </span>
                </li>

                <li className="nav-item mb-3">
                    <span className="nav-link text-secondary">
                        🛏 Beds
                    </span>
                </li>

                <li className="nav-item mb-3">
                    <span className="nav-link text-secondary">
                        👤 Tenants
                    </span>
                </li>

                <li className="nav-item mb-3">
                    <span className="nav-link text-secondary">
                        💰 Payments
                    </span>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;