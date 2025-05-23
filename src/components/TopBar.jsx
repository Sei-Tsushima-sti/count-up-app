import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ReplayIcon from '@mui/icons-material/Replay';
import MenuIcon from '@mui/icons-material/Menu';

export const TopBar = (props) => {
  const { scoreSheet, setScoreSheet } = props;
  const onClickReplay = () => {
    if (scoreSheet.length) {
      setScoreSheet(scoreSheet.slice(0, -1));
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>

          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: 'center',
            }}
          >
            {"Count Up!"}
          </Typography>

          {/* 右領域: IconButtonを配置 */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={onClickReplay}
              size="large"
              edge="end"
              color="inherit"
              aria-label="replay"
            >
              <ReplayIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};