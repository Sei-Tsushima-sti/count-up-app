import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { CalcTotalScore } from "./CalcTotalScore.jsx";


export const ResultDialog = (props) => {
    const { resultOpen, setResultOpen, scoreSheet, setScoreSheet } = props;

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Fade ref={ref} {...props} />;
    });

    const handleClose = () => {
        setScoreSheet([]);
        setResultOpen(false);
    };

    return (
        <>
            <Dialog
                fullScreen
                open={resultOpen}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ visibility: 'hidden' }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                textAlign: 'center',
                                flexGrow: 1,
                            }}
                        >
                            Result
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexGrow: 1,
                    }}>
                    <DialogContentText sx={{ fontSize: '8rem' }}>
                        {CalcTotalScore(scoreSheet)}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}