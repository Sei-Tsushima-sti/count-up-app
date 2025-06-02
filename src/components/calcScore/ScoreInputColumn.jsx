import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

// スコア入力
const firstSelectList = [...Array(20)].map((v, i) => i + 1);

export const ScoreInputColumn = (props) => {
  const { selectOpen, setSelectOpen, scoreSheet, setScoreSheet, ratio, setRatio } = props;

  const handleOpen = () => {
    setSelectOpen(true);
  };

  const handleClose = () => {
    setSelectOpen(false);
  };

  const onChangeDropDown = (e) => {
    const selectedScore = parseInt(e.target.value);

    if (ratio == 1) {
      const newThrowObject = {
        value: selectedScore * ratio,
        label: "" + selectedScore,
      };
      setScoreSheet([...scoreSheet, newThrowObject]);
    }

    if (ratio == 2) {
      const newThrowObject = {
        value: selectedScore * ratio,
        label: "D" + selectedScore,
      };
      setScoreSheet([...scoreSheet, newThrowObject]);
    }

    if (ratio == 3) {
      const newThrowObject = {
        value: selectedScore * ratio,
        label: "T" + selectedScore,
      };
      setScoreSheet([...scoreSheet, newThrowObject]);
    }

    setRatio(0);
  };

  return (
    <Select
      onChange={onChangeDropDown}
      open={selectOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      sx={{ display: 'none' }}
      MenuProps={{
        PaperProps: {
          sx: {
            width: '95vw',
          },
        }
      }}
    >
      {firstSelectList.map((point) => (
        <MenuItem key={point} value={point}>
          {point}
        </MenuItem>
      ))}
    </Select>
  );
};
