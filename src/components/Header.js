import React from 'react';

import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
            <table className="Header">
                <tr>
                    <td>
                        <h1 style={{ fontWeight: 500 }}>CALEB</h1>
                    </td>
                    <td>
                        <h3 style={{ fontWeight: 500, textAlign: 'right', paddingRight: '1em' }}>
                            clbmrls014@gmail.com
                        </h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1 style={{ fontWeight: 700, paddingBottom: '0.25em' }}>MORALES</h1></td>
                    <td>
                        <h3 style={{ fontWeight: 500, textAlign: 'right', paddingRight: '1em' }}>
                            <a href="https://www.linkedin.com/in/caleb-morales-415882199/">Connect with me on LinkedIn!</a>
                        </h3>
                    </td>
                </tr>
            </table>
            <Navbar />
        </div>
    );
}

export default Header;