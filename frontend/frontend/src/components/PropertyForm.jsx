import { useState, useEffect } from "react";

function PropertyForm({

    onAdd,
    onUpdate,
    selectedProperty

}) {

    const [propertyName, setPropertyName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {

        if (selectedProperty) {

            setPropertyName(selectedProperty.property_name);
            setAddress(selectedProperty.address);
            setCity(selectedProperty.city);

        } else {

            setPropertyName("");
            setAddress("");
            setCity("");

        }

    }, [selectedProperty]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const propertyData = {

            property_name: propertyName,
            address: address,
            city: city,

        };

        if (selectedProperty) {

            onUpdate(selectedProperty.id, propertyData);

        } else {

            onAdd(propertyData);

        }

        setPropertyName("");
        setAddress("");
        setCity("");

    };

    return (

        <div className="card p-4 mb-4">

            <h3 className="mb-4">

                {selectedProperty ? "Edit Property" : "Add Property"}

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Property Name

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={propertyName}
                        onChange={(e) => setPropertyName(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Address

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        City

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />

                </div>

                <button
                    className="btn btn-primary"
                    type="submit"
                >

                    {selectedProperty ? "Update Property" : "Add Property"}

                </button>

            </form>

        </div>

    );

}

export default PropertyForm;