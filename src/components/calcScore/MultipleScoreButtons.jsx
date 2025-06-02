import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

export const MultipleScoreButtons = (props) => {
  const { setSelectOpen, setRatio } = props;
  const onClickSingleButton = () => {
    setRatio(1);
    setSelectOpen(true);
  };
  const onClickDoubleButton = () => {
    setRatio(2);
    setSelectOpen(true);
  };

  const onClickTripleButton = () => {
    setRatio(3);
    setSelectOpen(true);
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