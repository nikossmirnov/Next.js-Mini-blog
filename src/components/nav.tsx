import Link from "next/link";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    link: {
        textDecoration: "none",
    },
}));

const Nav = () => {
    const classes = useStyles();
    return (
        <header>
            <AppBar position='static'>
                <Toolbar className={classes.root}>
                    <Button color='secondary'>
                        <Link href='/'>
                            <a className={classes.link}>All Posts</a>
                        </Link>
                    </Button>
                    <Button color='inherit'>
                        <Link href='/posts/new'>
                            <a className={classes.link}>Create a New Post</a>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Nav;
