import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';

import { TopBar } from "./components/TopBar.jsx";
import { TotalScoreDisplay } from "./components/TotalScoreDisplay.jsx";
import { BullButtons } from "./components/BullButtons.jsx";
import { ScoreInputColumn } from "./components/ScoreInputColumn.jsx";
import { MultipleScoreButtons } from "./components/MultipleScoreButtons.jsx";
import { MissButton } from "./components/MissButton.jsx";

function App() {
  // カラムで選ばれた点数（１～２０）
  const [selectedScore, setSelectedScore] = useState(1);

  // 何ラウンド目か、何投目か
  const [currentScoreInfo, setCurrentScoreInfo] = useState({ round: 1, throwNumberInRound: 1 });

  // スコアの合計点
  const [score, setScore] = useState(0);

  // スコアシート、1ラウンドに何点取ったかみたいな
  const [scoreSheet, setScoreSheet] = useState([]);

  // ８ラウンド終了したときに発火
  const isGameSetHandle = () => {
    //setScoreSheet([]);
    //setScore(0);
  };

  useEffect(() => {
    if (scoreSheet.length) {
      setCurrentScoreInfo({ round: (scoreSheet.length / 3 + 1) | 0, throwNumberInRound: (scoreSheet.length % 3 + 1) });
      console.log(currentScoreInfo);

      console.log(scoreSheet);

      // TODO:ラウンド表示
    }

    if (scoreSheet.length === 24) {
      isGameSetHandle();
    }
  }, [scoreSheet]);

  // トップバーの下に何も置かないやつ
  const MainContent = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.mixins.toolbar.minHeight,
  }));

  return (<MainContent>
    <TopBar score={score} setScore={setScore} setScoreSheet={setScoreSheet} setCurrentScoreInfo={setCurrentScoreInfo} />
    <TotalScoreDisplay score={score} currentScoreInfo={currentScoreInfo} />
    <ScoreInputColumn
      selectedScore={selectedScore}
      setSelectedScore={setSelectedScore}
    />
    <MultipleScoreButtons
      score={score}
      setScore={setScore}
      selectedScore={selectedScore}
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <BullButtons
      score={score}
      setScore={setScore}
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    <MissButton
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet} />
  </MainContent>);
}

export default App;
