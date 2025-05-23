import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

export const MultipleScoreButtons = (props) => {
  const { selectedScore, scoreSheet, setScoreSheet } = props;
  const onClickSingleButton = () => {
    const newThrowObject = {
      value: selectedScore,
      label: "Single " + selectedScore,
    };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };
  const onClickDoubleButton = () => {
    const newThrowObject = {
      value: selectedScore * 2,
      label: "Double " + selectedScore,
    };
    setScoreSheet([...scoreSheet, newThrowObject]);
  };

  const onClickTripleButton = () => {
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
