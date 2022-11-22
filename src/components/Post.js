import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import postStyles from "./Post.module.css";

const BlogPosts = {
    "1": {
        title: "#1 Blog Post",
        description: "This is blog post #1."
    },
    "2": {
        title: "#2 Blog Post",
        description: "Next is blog post #2."
    },
    "3": {
        title: "#3 Blog Post",
        description: "Then on to blog post #3."
    },
    "4": {
        title: "#4 Blog Post",
        description: "Finally blog post #4."
    }
};

const Posts = () => {
    useEffect(() => {
        document.title = "React - Post";
    });

    return (
        <div style={{ padding: 20 }}>
            <h2>Blog</h2>
            {/* Render any matching child. */}
            <Outlet />
        </div>
    );
}

const PostLists = () => {
    return (
        <ul className={postStyles.listItem}>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const Post = () => {
    const { slug } = useParams();
    const post = BlogPosts[slug];

    useEffect(() => {
        document.title = `React - Post ${slug}`;
    });

    const { title, description } = post;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={"/posts"}>Back</Link>
        </div>
    );
}

export { Post, PostLists, Posts };