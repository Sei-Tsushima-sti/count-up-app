import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// 合計スコア表示
export const TotalScoreDisplay = (props) => {
  const { score, currentScoreInfo } = props;

  const currentScoreInfoString = () => {
    var s = currentScoreInfo.round + "/8 ROUND ";
    if (currentScoreInfo.throwNumberInRound === 1)
      return (s + "■□□");
    if (currentScoreInfo.throwNumberInRound === 2)
      return (s += "□■□");
    if (currentScoreInfo.throwNumberInRound === 3)
      return (s += "□□■");
  }

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary" }}>
          {currentScoreInfoString()}
        </Typography>
        <CardActions sx={{ justifyContent: "center" }}>
          <Typography variant="h1" component="div">
            {score}
          </Typography>
        </CardActions>
      </CardContent>
    </Card >
  );
};
