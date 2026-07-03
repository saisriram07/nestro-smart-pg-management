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
                    🏠 Dashboard
                </li>

                <li className="nav-item mb-3">
                    🏢 Properties
                </li>

                <li className="nav-item mb-3">
                    🏗 Buildings
                </li>

                <li className="nav-item mb-3">
                    🚪 Rooms
                </li>

                <li className="nav-item mb-3">
                    🛏 Beds
                </li>

                <li className="nav-item mb-3">
                    👤 Tenants
                </li>

                <li className="nav-item mb-3">
                    💰 Payments
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;