import React, { useState } from "react";
import "../styles/Commons.css";
import emblem from "../svg/glasses-with-circular-lenses-svgrepo-com.svg";
import doc from "../svg/book-closed-svgrepo-com.svg"
import msg from "../svg/oscilloscope-svgrepo-com.svg"
import ext from "../svg/calculator-svgrepo-com.svg"

const Commons = {
    main: function() {
        return (
            <div className="main-view" >
                <div className="title">
                    <img src={emblem} alt="" />
                    <h1 className="title">           
                        COMMONS
                    </h1>
                </div>  
                <ul className="links">
                    <li className="link">
                        <img src={doc} alt="" />
                        <a href="/commons/documentation" className="text">Documentation</a>
                    </li>
                    <li className="link">
                        <img src={msg} alt="" />
                        <a href="/commons/message-boards" className="text">Message Boards</a>
                    </li>
                    <li className="link">
                        <img src={ext} alt="" />
                        <a href="/commons/external-resources" className="text">External Resources</a>
                    </li>
                </ul>
            </div>
        );
    },
    docs: function() {
        
    }
};

export default Commons;