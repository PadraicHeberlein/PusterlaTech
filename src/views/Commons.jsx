import React, { useState } from "react";
import "../styles/Commons.css";
import SVGListIcons from "../util/SVG-list-icons.jsx";

import svg_prod from "../svg/prod.svg";
import svg_mech from "../svg/mech.svg";
import svg_whouse from "../svg/whouse.svg";

const Commons = {
    main: function() {
        return (
            <div className="main-view" >
                <div className="title">
                    {SVGListIcons.commons}
                    <h1 className="title">COMMONS</h1>
                </div>  
                <ul className="links">
                    <li className="link">
                        {SVGListIcons.docs}
                        <a 
                            href="/commons/documentation" 
                            className="text"
                        >Documentation</a>
                    </li>
                    <li className="link">
                        {SVGListIcons.msgs}
                        <a 
                            href="/commons/message-boards" 
                            className="text"
                        >Message Boards</a>
                    </li>
                    <li className="link">
                        {SVGListIcons.extra}
                        <a 
                            href="/commons/external-resources" 
                            className="text"
                        >External Resources</a>
                    </li>
                </ul>
            </div>
        );
    },
    docs: function() {
        return (
            <div className="main-view" >
                <div className="title">
                    {SVGListIcons.docs}
                    <h1 className="title">DOCUMENTATION</h1>
                </div>  
                <ul className="links">
                    <li className="link">
                        <img src={svg_prod} alt="" />
                        <a href="/commons/documentation/production" className="text">Production</a>
                    </li>
                    <li className="link">
                        <img src={svg_mech} alt="" />
                        <a href="/commons/documentation/maintenance" className="text">Maintenance</a>
                    </li>
                    <li className="link">
                        <img src={svg_whouse} alt="" />
                        <a href="/commons/warehouse" className="text">Warehouse</a>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Commons;