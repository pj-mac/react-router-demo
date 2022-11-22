import React, { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "React - Page Not Found";
    });

    return (
        <div>
            <h2>404 - Page Not Found</h2>
        </div>
    )
};

export default NotFound;