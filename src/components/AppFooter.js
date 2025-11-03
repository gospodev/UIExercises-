import React from "react";

const AppFooter = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer">
            {`Copyright © UNWE Code ${year}`}
        </footer>
    );
}

export default AppFooter;