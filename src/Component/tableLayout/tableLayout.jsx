import React from 'react';

export default function TableLayout({ tableHead, tableData }) {
    return (
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {
                        tableHead.map(
                            (headName, index) => index === 0 ? <th key={index} scope="col" colSpan={2} >{headName}</th> : <th key={index} scope="col" >{headName}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map(
                        (tableRow, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row" >{index + 1}</th>
                                    {
                                        tableRow.map(
                                            (rowValue, index) => index === 0 ? <td colSpan={2} >{rowValue}</td> : <td>{rowValue}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
}