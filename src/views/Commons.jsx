import React, { useState } from "react";
import "../styles/Commons.css";
import SVGListIcons from "../util/SVGListIcons.jsx";

const Commons = {
    main: function() {
        return (
            <div className="main-view" >
                <div className="title">
                    {SVGListIcons.commons()}
                    <h1 className="title">COMMONS</h1>
                </div>  
                <ul className="links">
                    <li className="link">
                        {SVGListIcons.docs()}
                        <a 
                            href="/commons/documentation" 
                            className="text"
                        >Documentation</a>
                    </li>
                    <li className="link">
                        {SVGListIcons.msgs()}
                        <a 
                            href="/commons/message-boards" 
                            className="text"
                        >Message Boards</a>
                    </li>
                    <li className="link">
                        {SVGListIcons.extra()}
                        <a 
                            href="/commons/external-resources" 
                            className="text"
                        >External Resources</a>
                    </li>
                </ul>
            </div>
        );
    },
    docs: {
        main: () => {
            return (
                <div className="main-view" >
                    <div className="title">
                        {SVGListIcons.docs()}
                        <h1 className="title">DOCUMENTATION</h1>
                    </div>  
                    <ul className="links">
                        <li className="link">
                            {SVGListIcons.prod()}
                            <a 
                                href="/commons/documentation/production" 
                                className="text"
                            >Production</a>
                        </li>
                        <li className="link">
                            {SVGListIcons.mech()}
                            <a 
                                href="/commons/documentation/maintenance" 
                                className="text"
                            >Maintenance</a>
                        </li>
                        <li className="link">
                            {SVGListIcons.warehouse()}
                            <a 
                                href="/commons/documentation/warehouse" 
                                className="text"
                            >Warehouse</a>
                        </li>
                    </ul>
                </div>
            );
        },
    },
    msgs: () => {

    }
};

export default Commons;