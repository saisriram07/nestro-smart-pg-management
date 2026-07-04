function PropertyTable({ properties, onEdit, onDelete }) {

    return (

        <table className="table table-bordered mt-4">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Property</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {properties.map((property) => (

                    <tr key={property.id}>

                        <td>{property.id}</td>

                        <td>{property.property_name}</td>

                        <td>{property.address}</td>

                        <td>{property.city}</td>

                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => onEdit(property)}
                            >
                                ✏ Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(property.id)}
                            >
                                🗑 Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default PropertyTable;