import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
export const MissButton = (props) => {
    const { scoreSheet, setScoreSheet } = props;
    const onClickMissButton = () => {
        const newThrowObject = {
            value: 0,
            label: "Miss",
        };
        setScoreSheet([...scoreSheet, newThrowObject]);
    };
    return (
        <>
            <Grid container spacing={1} sx={{ mb: 1 }} justifyContent="center">
                <Grid item>
                    <Button
                        variant="text"
                        color="error"
                        size="large"
                        sx={{ width: "25vw" }}
                        onClick={onClickMissButton}
                    >
                        Miss
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
