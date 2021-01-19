import { useState, useEffect } from "react";
import Link from "next/link";
import { MyPost } from "../../interfaces/post";
import Request from "../../services/axios.service";
import { useDispatch } from "react-redux";
import { currentPost } from "../../src/redux/AppReducer";
import { Button, makeStyles } from "@material-ui/core";

interface PostPageProps {
    post: MyPost;
}
const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "-1px 6px 15px 0px rgba(0,0,0,0.75)",
        padding: "2%",
        margin: "2%",
    },
    link: {
        textDecoration: "none",
    },
    button: {
        border: "1px solid black",
        margin: "2%",
    },
}));

export default function Post({ post: serverPost }: PostPageProps) {
    const classes = useStyles();
    const [post, setPost] = useState(serverPost);
    const dispatch = useDispatch();
    console.log(post);
    useEffect(() => {
        dispatch(currentPost(post));
    }, [post]);

    if (!post) {
        return (
            <div>
                <p>Loading ...</p>
            </div>
        );
    }

    return (
        <div>
            <div className={classes.root}>
                <div>
                    <h1>{post.title}</h1>
                    <hr />
                    <p>{post.body}</p>
                </div>
            </div>

            <Button className={classes.button}>
                <Link href={"/"}>
                    <a className={classes.link}>Back to all posts</a>
                </Link>
            </Button>
        </div>
    );
}

Post.getInitialProps = async ({ query }) => {
    try {
        const res = await Request({
            method: "GET",
            url: `/posts/${query.id}`,
        });
        const post: MyPost[] = await res.data;

        return {
            post,
        };
    } catch (error) {
        console.log("res", error);
        return {
            error,
        };
    }
};
