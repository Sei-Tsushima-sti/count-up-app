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

  // スコアシート、1ラウンドに何点取ったかみたいな
  const [scoreSheet, setScoreSheet] = useState([]);

  // リザルト表示フラグ
  const [resultOpen, setResultOpen] = useState(false);

  useEffect(() => {
    // 24投で発火
    if (scoreSheet.length === 24) {
      setResultOpen(true); // リザルト表示
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
    <ScoreTableSingle
      scoreSheet={scoreSheet} />
    <TopBar
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <TotalScoreCard scoreSheet={scoreSheet} />
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
      resultOpen={resultOpen}
      setResultOpen={setResultOpen}
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <ScoreTable scoreSheet={scoreSheet} />
  </MainContent>);
}

export default App;
