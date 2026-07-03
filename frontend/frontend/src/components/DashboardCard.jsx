function DashboardCard({ title, value, color }) {

    return (

        <div className="col-md-3 mb-4">

            <div className={`card border-0 shadow text-center bg-${color} text-white`}>

                <div className="card-body">

                    <h5>{title}</h5>

                    <h2 className="fw-bold mt-3">
                        {value}
                    </h2>

                </div>

            </div>

        </div>

    );

}

export default DashboardCard;