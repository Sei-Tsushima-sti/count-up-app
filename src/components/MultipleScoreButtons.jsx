import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

export const MultipleScoreButtons = (props) => {
  const { score, setScore, selectedScore, scoreSheet, setScoreSheet } = props;
  const onClickSingleButton = () => {
    setScore(score + selectedScore);
    const newThrowObject = {
      value: selectedScore,
      label: "Single " + selectedScore,
    };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };
  const onClickDoubleButton = () => {
    setScore(score + selectedScore * 2);
    const newThrowObject = {
      value: selectedScore * 2,
      label: "Double " + selectedScore,
    };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };

  const onClickTripleButton = () => {
    setScore(score + selectedScore * 3);

    const newThrowObject = {
      value: selectedScore * 3,
      label: "Triple " + selectedScore,
    };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };
  return (
    <>
      <Grid container spacing={1} sx={{ mb: 1 }} justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            size="large"
            sx={{ width: "25vw" }}
            onClick={onClickSingleButton}
          >
            Single
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="large"
            sx={{ width: "25vw" }}
            onClick={onClickDoubleButton}
          >
            Double
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="large"
            sx={{ width: "25vw" }}
            onClick={onClickTripleButton}
          >
            Triple
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
