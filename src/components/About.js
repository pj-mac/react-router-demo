import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "React - About";
    });

    return (
        <div>
            <h2>About</h2>
            <p>Navigate around to test the routes.</p>
        </div>
    )
};

export default About;