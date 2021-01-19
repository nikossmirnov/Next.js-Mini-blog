import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: "3%",
    },

    link: {
        textDecoration: "none",
    },
    button: {
        border: "1px solid black",
    },
}));

export default function SimpleCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h6' component='h2'>
                    {post.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' className={classes.button}>
                    <Link
                        href={{
                            pathname: "/posts/[id]",
                            query: { id: post.id },
                        }}
                    >
                        <div className={classes.link}>See the post</div>
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}
