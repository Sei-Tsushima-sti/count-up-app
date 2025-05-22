import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const BullButtons = (props) => {
  const { score, setScore, scoreSheet, setScoreSheet } = props;
  const onClickSbull = () => {
    setScore(score + 25);
    const newThrowObject = { value: 25, label: "S-Bull" };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };
  const onClickDbull = () => {
    setScore(score + 50);
    const newThrowObject = { value: 50, label: "D-Bull" };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button
          variant="contained"
          color="info"
          size="large"
          sx={{ width: "30vw" }}
          onClick={onClickSbull}
        >
          S-BULL
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ width: "30vw" }}
          onClick={onClickDbull}
        >
          D-BULL
        </Button>
      </Grid>
    </Grid>
  );
};
