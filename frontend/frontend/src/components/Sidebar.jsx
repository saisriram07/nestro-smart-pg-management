import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

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

                <li className="nav-item mb-2">
                    <Link
                        to="/dashboard"
                        className={`nav-link ${
                            location.pathname === "/dashboard"
                                ? "text-warning fw-bold"
                                : "text-white"
                        }`}
                    >
                        🏠 Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/properties"
                        className={`nav-link ${
                            location.pathname === "/properties"
                                ? "text-warning fw-bold"
                                : "text-white"
                        }`}
                    >
                        🏢 Properties
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/buildings"
                        className={`nav-link ${
                            location.pathname === "/buildings"
                                ? "text-warning fw-bold"
                                : "text-white"
                        }`}
                    >
                        🏗 Buildings
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/rooms"
                        className={`nav-link ${
                            location.pathname === "/rooms"
                                ? "text-warning fw-bold"
                                : "text-white"
                        }`}
                    >
                        🚪 Rooms
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/beds"
                        className={`nav-link ${
                            location.pathname === "/beds"
                                ? "text-warning fw-bold"
                                : "text-white"
                        }`}
                    >
                        🛏 Beds
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/tenants"
                        className={`nav-link ${
                            location.pathname === "/tenants"
                                ? "text-warning fw-bold"
                                : "text-white"
                        }`}
                    >
                        👤 Tenants
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <span className="nav-link text-secondary">
                        💰 Payments
                    </span>
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;