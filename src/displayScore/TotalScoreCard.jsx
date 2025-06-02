import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CalcTotalScore } from "../components/calcScore/CalcTotalScore.jsx";

// 合計スコア表示
export const TotalScoreCard = (props) => {
  const { scoreSheet } = props;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary" }}>
          SCORE
        </Typography>
        <CardActions sx={{ justifyContent: "center" }}>
          <Typography variant="h1" component="div">
            {CalcTotalScore(scoreSheet)}
          </Typography>
        </CardActions>
      </CardContent>
    </Card >
  );
};
