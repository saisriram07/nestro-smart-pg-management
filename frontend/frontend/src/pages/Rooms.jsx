import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import RoomForm from "../components/RoomForm";
import RoomTable from "../components/RoomTable";

import {
    getRooms,
    createRoom,
    updateRoom,
    deleteRoom,
} from "../services/roomService";

function Rooms() {

    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => {

        loadRooms();

    }, []);

    const loadRooms = async () => {

        try {

            const response = await getRooms();

            setRooms(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleAddRoom = async (room) => {

        try {

            if (room.id) {

                await updateRoom(room.id, room);

                alert("Room Updated Successfully");

            } else {

                await createRoom(room);

                alert("Room Added Successfully");

            }

            setSelectedRoom(null);

            loadRooms();

        } catch (error) {

            console.log(error);

            alert("Operation Failed");

        }

    };

    const handleDeleteRoom = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this room?"
        );

        if (!confirmDelete) return;

        try {

            await deleteRoom(id);

            alert("Room Deleted Successfully");

            loadRooms();

        } catch (error) {

            console.log(error);

            alert("Failed to Delete Room");

        }

    };

    const handleEditRoom = (room) => {

        setSelectedRoom(room);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (

        <DashboardLayout>

            <h2 className="mb-4">

                Room Management

            </h2>

            <RoomForm
                onAdd={handleAddRoom}
                selectedRoom={selectedRoom}
            />

            <RoomTable
                rooms={rooms}
                onEdit={handleEditRoom}
                onDelete={handleDeleteRoom}
            />

        </DashboardLayout>

    );

}

export default Rooms;