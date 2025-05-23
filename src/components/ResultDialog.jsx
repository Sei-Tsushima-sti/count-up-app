import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ResultDialog = (props) => {
    const { isDialogOpen, setIsDialogOpen, score, setScoreSheet } = props;

    const handleClose = () => {
        setScoreSheet([]);
        setIsDialogOpen(false);
    };

    return (
        <>
            <Dialog
                open={isDialogOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    {"SCORE"}
                </DialogTitle>
                <DialogContent align="center">
                    <DialogContentText id="alert-dialog-description" sx={{ fontSize: '4rem' }}>
                        {score}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Play again
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}