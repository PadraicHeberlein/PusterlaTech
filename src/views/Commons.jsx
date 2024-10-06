import React, { useState } from "react";
import "../styles/Commons.css";

const Commons = {
    main: function() {
        return (
            <div className="main-view" >
                <ul className="links">
                    <li>
                        <a href="/pass-down">Pass Down</a>
                    </li>
                    <li>
                        <a href="/production-lines">Production Lines</a>
                    </li>
                    <li>
                        <a href="/commons">Commons</a>
                    </li>
                </ul>
            </div>
        );
    },
    docs: function() {
        
    }
};

export default Commons;