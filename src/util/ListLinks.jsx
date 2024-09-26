import React from 'react';

function ListLinks(list_names, list_links) {
    return (
        <div className="list-links">
            <ul className="links">
                <li>
                    <a href="documentation/box-makers">Box Makers</a>
                </li>
                <li>
                    <a href="documentation/robots">Robots</a>
                </li>
                <li>
                    <a href="documentation/lable-makers">Label Makers</a>
                </li>
                <li>
                    <a href="documentation/3d-printer">3D Printer</a>
                </li>
                <li>
                    <a href="documentation/other">Other</a>
                </li>
            </ul>
        </div>
    );
}

export default ListLinks;