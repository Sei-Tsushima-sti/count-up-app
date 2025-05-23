import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// 合計スコア表示
export const TotalScoreDisplay = (props) => {
  const { score } = props;


  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary" }}>
          score
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
