import { useState, useEffect } from "react";

import { getProperties } from "../services/propertyService";

function BuildingForm({ onAdd }) {

    const [buildingName, setBuildingName] = useState("");
    const [propertyId, setPropertyId] = useState("");

    const [properties, setProperties] = useState([]);

    useEffect(() => {

        getProperties()

            .then((response) => {

                setProperties(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        onAdd({

            property: propertyId,
            building_name: buildingName,

        });

        setBuildingName("");
        setPropertyId("");

    };

    return (

        <div className="card p-4 mb-4">

            <h3 className="mb-4">

                Add Building

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Select Property

                    </label>

                    <select
                        className="form-select"
                        value={propertyId}
                        onChange={(e) => setPropertyId(e.target.value)}
                        required
                    >

                        <option value="">
                            Select Property
                        </option>

                        {properties.map((property) => (

                            <option
                                key={property.id}
                                value={property.id}
                            >

                                {property.property_name}

                            </option>

                        ))}

                    </select>

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Building Name

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={buildingName}
                        onChange={(e) => setBuildingName(e.target.value)}
                        required
                    />

                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >

                    Add Building

                </button>

            </form>

        </div>

    );

}

export default BuildingForm;