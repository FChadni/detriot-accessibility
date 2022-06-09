import React from 'react';
import Search from "./search";

function Main(props) {
    return (
        <main>
            {/*<h1 className="offscreen">Detroit Accessibility Project</h1>*/}
            <section className="searchEntry">
                {/*<h2 className="offscreen">Search Term Entry</h2>*/}
                {/*<div className="websiteTitle"><h1>Detroit Accessibility Project</h1></div>*/}
                <Search/>
            </section>
        </main>
    );
}

export default Main;