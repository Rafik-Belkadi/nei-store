import React from 'react'

export default function Container() {

    return (
        <div className="container">
            <table cellspacing="0" class="content-table">
                <thead>
                    <tr>
                        <th>N° Commande</th>
                        <th>Date de la commande</th>
                        <th>Total de la commande</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>#9999</td>
                        <td>2020 - 01 - 02</td>
                        <td>2400DZD</td>
                        <td id="status">Livré</td>
                    </tr>
                    <tr class="active-row">
                        <td>#9999</td>
                        <td>2020 - 01 - 02</td>
                        <td>2400DZD</td>
                        <td id="status">En Attente</td>
                    </tr>
                </tbody>

            </table>

            <style jsx >{`
                .container {
                    text-align: center;     
                    font-size: 19px;               
                }

                .container > table {
                    width: 80%;
                }
                .content-table {
                    border-collapse: collapse;
                    margin: 25px 0;
                    font-size: 0.9em;
                    border-radius: 5px 5px 0 0;
                    overflow: hidden;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                }
                
                thead tr {
                    background-color: var(--accent);
                    color: #ffffff;
                    text-align: left;
                    font-weight: bold;
                }

                #status {
                    color: var(--secondary);
                    font-weight: bold;
                }
                th,
                td {
                    text-align: center;
                    padding: 12px 15px;
                    border-bottom: 1px solid var(--accent-hover);
                }

                th {
                    height: 80px;
                    font-weight: 400;
                }
                td {
                    height: 60px;
                }
                tbody tr {
                    border-bottom: 1px solid #dddddd;
                }
                
                tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                }
 
            `}</style>
        </div>
    )
}
