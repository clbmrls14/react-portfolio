import '../App.css';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import Iframe from 'react-iframe';

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            {/* <Iframe src="/CalebMResume.pdf" /> */}
            <h2>My Resume:</h2>
            <Document file="/CalebMResume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}.</p>
        </div>
    );
}

export default Resume;