import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

// スコア入力
const basePointList = [...Array(20)].map((v, i) => i + 1);

export const ScoreInputColumn = (props) => {
  const { selectedScore, setSelectedScore } = props;

  const onChangeDropDown = (e) => {
    setSelectedScore(parseInt(e.target.value));
  };

  return (
    <Grid container sx={{ mb: 2 }} justifyContent="center">
      <TextField
        select
        fullWidth
        label="Select"
        defaultValue="1"
        size="small"
        onChange={onChangeDropDown}
        value={selectedScore}
      >
        {basePointList.map((point) => (
          <MenuItem key={point} value={point}>
            {point}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};
