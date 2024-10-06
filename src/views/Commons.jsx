import React, { useState } from "react";
import "../styles/Commons.css";

const Commons = {
    main: function() {
        return (
            <div className="main-view" >
                <h1 className="title">COMMONS</h1>
                <ul className="links">
                    <li className="link">
                        <a href="/commons/documentation">Documentation</a>
                    </li>
                    <li className="link">
                        <a href="/commons/message-boards">Message Boards</a>
                    </li>
                    <li className="link">
                        <a href="/commons/external-resources">External Resources</a>
                    </li>
                </ul>
            </div>
        );
    },
    docs: function() {
        
    }
};

export default Commons;