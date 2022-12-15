import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Faculty from './faculty';

export default function Academics() {
    return (
        <Routes>
            <Route path="/faculty" element={<Faculty />} />
        </Routes>
    )
}