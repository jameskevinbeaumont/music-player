import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, setLibraryStatus }) {
    return (
        <nav className="nav">
            <h1 className="nav__title">Waves...a musical journey</h1>
            <button className="nav__library-button"
                onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
            <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav