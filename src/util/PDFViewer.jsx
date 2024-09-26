import React from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer ({path}) {
    console.log(window.innerHeight);
    return (
        <div>
            <iframe 
                src={path}
                width={window.innerWidth}
                height={window.innerHeight - 70}px
            />
        </div>
    );
};

export default PDFViewer;