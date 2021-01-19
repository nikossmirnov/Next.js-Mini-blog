import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 10,
    },

    title: {
        fontSize: 14,
    },
});

interface ErrorPageProps {
    title: String;
}

export default function TryAgain({ title }: ErrorPageProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h6' component='h2'>
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>
                    <Link
                        href={{
                            pathname: "/posts/new",
                        }}
                    >
                        Try again
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}
