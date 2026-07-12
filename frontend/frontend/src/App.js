import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Buildings from "./pages/Buildings";
import Rooms from "./pages/Rooms";
import Beds from "./pages/Beds";
import Tenants from "./pages/Tenants";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/properties"
                    element={
                        <ProtectedRoute>
                            <Properties />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/buildings"
                    element={
                        <ProtectedRoute>
                            <Buildings />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/rooms"
                    element={
                        <ProtectedRoute>
                            <Rooms />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/beds"
                    element={
                        <ProtectedRoute>
                            <Beds />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tenants"
                    element={
                        <ProtectedRoute>
                            <Tenants />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;