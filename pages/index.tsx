import { useEffect, useState } from "react";
import Head from "next/head";
import { MyPost } from "../interfaces/post";
import { NextPageContext } from "next";
import Request from "../services/axios.service";
import SimpleCard from "../src/components/dataCell";

interface PostsPageProps {
    posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts);

    if (!posts) {
        return (
            <div>
                <p>Loading posts...</p>
            </div>
        );
    }

    const postsToDisplay = posts
        .filter(
            (post) =>
                post.title && post.body !== "" && typeof post.id === "number"
        )
        .reverse();

    const lastPost = postsToDisplay.reduce((prev, current) => {
        return prev.id > current.id ? prev : current;
    });

    const lastPostId = String(lastPost.id + 1);

    useEffect(() => {
        localStorage.setItem("id", lastPostId);
    }, [lastPostId]);

    return (
        <div>
            <h1>Posts Page</h1>
            <ul>
                {postsToDisplay.map((post) => (
                    <div key={post.id}>
                        <SimpleCard post={post} />
                    </div>
                ))}
            </ul>
        </div>
    );
}

Posts.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const res = await Request({
            method: "GET",
            url: "/posts",
        });
        const posts: MyPost[] = res.data;
        return {
            posts,
        };
    } catch (error) {
        console.log("res", error);
        return {
            error,
        };
    }
};
