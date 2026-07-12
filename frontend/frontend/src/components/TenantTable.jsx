function TenantTable({ tenants }) {

    return (

        <>

            <h4 className="mt-4 mb-3">
                Tenant List ({tenants.length})
            </h4>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Bed</th>
                        <th>Rent</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {tenants.length === 0 ? (

                        <tr>

                            <td
                                colSpan="6"
                                className="text-center"
                            >

                                No Tenants Found

                            </td>

                        </tr>

                    ) : (

                        tenants.map((tenant) => (

                            <tr key={tenant.id}>

                                <td>{tenant.id}</td>

                                <td>{tenant.full_name}</td>

                                <td>{tenant.phone_number}</td>

                                <td>{tenant.bed}</td>

                                <td>₹ {tenant.monthly_rent}</td>

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

        </>

    );

}

export default TenantTable;