import { useState, useEffect } from "react";

import { getBeds } from "../services/bedService";

function TenantForm({ onAdd }) {

    const [beds, setBeds] = useState([]);

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [email, setEmail] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [monthlyRent, setMonthlyRent] = useState("");
    const [securityDeposit, setSecurityDeposit] = useState("");
    const [bed, setBed] = useState("");

    useEffect(() => {
        loadBeds();
    }, []);

    const loadBeds = async () => {

        try {

            const response = await getBeds();

            setBeds(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onAdd({

            full_name: fullName,
            phone_number: phoneNumber,
            aadhaar_number: aadhaarNumber,
            email,
            joining_date: joiningDate,
            monthly_rent: monthlyRent,
            security_deposit: securityDeposit,
            bed,

        });

        setFullName("");
        setPhoneNumber("");
        setAadhaarNumber("");
        setEmail("");
        setJoiningDate("");
        setMonthlyRent("");
        setSecurityDeposit("");
        setBed("");

    };

    return (

        <div className="card p-4 mb-4">

            <h3 className="mb-4">

                Add Tenant

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Full Name

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Phone Number

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Aadhaar Number

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={aadhaarNumber}
                        onChange={(e) => setAadhaarNumber(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Email

                    </label>

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Joining Date

                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={joiningDate}
                        onChange={(e) => setJoiningDate(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Monthly Rent

                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Security Deposit

                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={securityDeposit}
                        onChange={(e) => setSecurityDeposit(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Select Bed

                    </label>

                    <select
                        className="form-select"
                        value={bed}
                        onChange={(e) => setBed(e.target.value)}
                        required
                    >

                        <option value="">

                            Select Bed

                        </option>

                        {beds.map((item) => (

                            <option
                                key={item.id}
                                value={item.id}
                            >

                                Bed {item.bed_number} (Room {item.room_name})

                            </option>

                        ))}

                    </select>

                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >

                    Add Tenant

                </button>

            </form>

        </div>

    );

}

export default TenantForm;