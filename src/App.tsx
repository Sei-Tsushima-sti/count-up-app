import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';

import { TopBar } from "./components/TopBar.jsx";
import { TotalScoreCard } from "./components/TotalScoreCard.jsx";
import { BullButtons } from "./components/BullButtons.jsx";
import { ScoreInputColumn } from "./components/ScoreInputColumn.jsx";
import { MultipleScoreButtons } from "./components/MultipleScoreButtons.jsx";
import { MissButton } from "./components/MissButton.jsx";
import { ResultDialog } from "./components/ResultDialog.jsx";
import { ScoreTable, ScoreTableSingle } from "./components/ScoreTable.jsx";

function App() {
  // カラムで選ばれた点数（１～２０）
  const [selectedScore, setSelectedScore] = useState(1);

  // スコアの合計点
  // useEffectでscoreSheetから自動反映
  const [score, setScore] = useState(0);

  // スコアシート、1ラウンドに何点取ったかみたいな
  const [scoreSheet, setScoreSheet] = useState([]);

  // 結果表示ダイアログのフラグ
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const propertyToSum = "value";
    const sum = scoreSheet.reduce((accumulator, currentObject) => {
      return accumulator + currentObject[propertyToSum];
    }, 0);
    setScore(sum);

    // 24投で発火
    if (scoreSheet.length === 24) {
      setIsDialogOpen(true);
      return;
    }
  }, [scoreSheet]);

  // トップバーの下に何も置かないやつ
  const MainContent = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.mixins.toolbar.minHeight,
  }));

  return (<MainContent>
    <TopBar
      score={score}
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <TotalScoreCard score={score} />
    <ScoreInputColumn
      selectedScore={selectedScore}
      setSelectedScore={setSelectedScore}
    />
    <MultipleScoreButtons
      selectedScore={selectedScore}
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <BullButtons
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <MissButton
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <ResultDialog
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
      score={score}
      setScoreSheet={setScoreSheet}
    />
    <ScoreTable scoreSheet={scoreSheet} />
  </MainContent>);
}

export default App;
