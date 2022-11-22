import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "React - Home";
    });

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome! Here&apos;s a basic example of the React Router.</p>
        </div>
    )
};

export default Home;