import { useState, useEffect } from "react";
import _ from "lodash";

import Request from "../../services/axios.service";
import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        border: "1px solid black",
        margin: "5%",
        borderRadius: "5px",
        padding: "3%",
        marginBottom: "16px",
    },
    button: {
        border: "1px solid black",
        margin: "10% 1% 1% 0%",
    },
    content: {
        marginTop: "10%",
    },
});

export default function NewPost() {
    const classes = useStyles();
    const router = useRouter();
    const [newTitle, setNewTitle] = useState<String>("");
    const [newBody, setNewBody] = useState<String>("");
    const [id, setId] = useState<Number>();

    useEffect(() => {
        const id = Number(window.localStorage.getItem("id"));
        setId(id);
    }, [id, newTitle]);

    const addPost = async () => {
        const requestData = {
            id: id,
            title: newTitle,
            body: newBody,
        };
        const postTitle = _.isEmpty(newTitle);
        const postBody = _.isEmpty(newBody);

        if (postTitle && postBody) {
            router.push("/errors/tryAgain");
        } else {
            try {
                const res = await Request({
                    method: "POST",
                    url: "/posts",
                    data: requestData,
                });
                if (res) {
                    router.push("/");
                } else {
                    router.push("/errors/oops");
                }
            } catch (error) {
                console.log("res", error);
                return {
                    error,
                };
            }
        }
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.form}>
                <TextField
                    id='standard-basic'
                    label={"Title"}
                    type={"name"}
                    value={newTitle}
                    onChange={(e) => {
                        setNewTitle(e.target.value);
                    }}
                />
                <TextField
                    className={classes.content}
                    id='outlined-basic'
                    variant='outlined'
                    label={"Content"}
                    type={"name"}
                    multiline
                    rows='4'
                    value={newBody}
                    onChange={(e) => {
                        setNewBody(e.target.value);
                    }}
                />

                <Button
                    className={classes.button}
                    type='submit'
                    onClick={addPost}
                >
                    Submit
                </Button>
            </FormControl>
        </div>
    );
}
