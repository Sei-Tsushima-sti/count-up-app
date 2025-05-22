import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ReplayIcon from '@mui/icons-material/Replay';
import Box from '@mui/material/Box';

export const TopBar = (props) => {
  const { score, setScore, setScoreSheet } = props;
  const onClickReplay = () => {
    setScoreSheet([]);
    setScore(0);

    console.log("点数をリセットしました");
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            {"Count Up!"}
          </Typography>
          <IconButton
            onClick={onClickReplay}
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ marginLeft: "auto" }}
          >
            <ReplayIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};