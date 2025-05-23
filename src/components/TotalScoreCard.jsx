import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// 合計スコア表示
export const TotalScoreCard = (props) => {
  const { score } = props;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary" }}>
          SCORE
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
