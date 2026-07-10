function BedTable({ beds }) {

    return (

        <table className="table table-bordered mt-4">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Bed Number</th>
                    <th>Room</th>
                    <th>Occupied</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {beds.length === 0 ? (

                    <tr>

                        <td
                            colSpan="5"
                            className="text-center"
                        >
                            No Beds Found
                        </td>

                    </tr>

                ) : (

                    beds.map((bed) => (

                        <tr key={bed.id}>

                            <td>{bed.id}</td>

                            <td>{bed.bed_number}</td>

                            <td>{bed.room_name}</td>

                            <td>

                                {bed.is_occupied ? (

                                    <span className="badge bg-danger">
                                        Occupied
                                    </span>

                                ) : (

                                    <span className="badge bg-success">
                                        Available
                                    </span>

                                )}

                            </td>

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

export default BedTable;