function RoomTable({ rooms, onEdit, onDelete }) {
    return (
        <table className="table table-bordered mt-4">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Building</th>
                    <th>Capacity</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {rooms.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="text-center">
                            No Rooms Found
                        </td>
                    </tr>
                ) : (
                    rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.id}</td>

                            <td>{room.room_number}</td>

                            <td>{room.building_name}</td>

                            <td>{room.capacity}</td>

                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(room)}
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(room.id)}
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

export default RoomTable;