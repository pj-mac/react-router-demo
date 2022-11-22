import React from "react";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";
import { Posts, Post, PostLists } from "./Post";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />}>
                    <Route index element={<PostLists />} />
                    <Route path=":slug" element={<Post />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;