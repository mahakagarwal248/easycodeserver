import React from 'react';
import Cards from './Card';
import '../css/MainContent.css';

function MainContent() {
    return (
        <div className="maincontent">
            <section className="s1">
                ##content
            </section>
            <section className="s2">
                <Cards/>
            </section>
            <section className="s3">
                ##content
            </section>
        </div>
    )
}

export default MainContent;
