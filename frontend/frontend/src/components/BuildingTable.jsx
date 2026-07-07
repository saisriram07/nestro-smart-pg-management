function BuildingTable({ buildings }) {

    return (

        <table className="table table-bordered mt-4">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>

                    <th>Building</th>

                    <th>Property ID</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {buildings.length === 0 ? (

                    <tr>

                        <td
                            colSpan="4"
                            className="text-center"
                        >
                            No Buildings Found
                        </td>

                    </tr>

                ) : (

                    buildings.map((building) => (

                        <tr key={building.id}>

                            <td>{building.id}</td>

                            <td>{building.building_name}</td>

                            <td>{building.property}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                >
                                    🗑 Delete
                                </button>

                            </td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

    );

}

export default BuildingTable;