import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Faculty from './schools';

export default function Academics() {
    return (
        <Routes>
            <Route path="/faculty" element={<Faculty />} />
        </Routes>
    )
}