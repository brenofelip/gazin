import {Navigate, Route, Routes} from "react-router-dom";

import {Home} from "../pages/Home";

export function RoutesPages() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}