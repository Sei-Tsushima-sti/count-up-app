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
import { BottomNavi } from "./components/BottomNavi.jsx";

function App() {
  // カラムで選ばれた点数（１～２０）
  const [selectedScore, setSelectedScore] = useState(1);

  // スコアシート、1ラウンドに何点取ったかみたいな
  const [scoreSheet, setScoreSheet] = useState([]);

  // リザルト表示フラグ
  const [resultOpen, setResultOpen] = useState(false);

  // 現在のタブ
  const [activePage, setActivePage] = useState(0);

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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  }));

  // タブ切り替え
  const renderActivePage = () => {
    if (activePage == 0) {
      return (
        <MainContent>
          <ScoreTableSingle
            scoreSheet={scoreSheet} />

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
        </MainContent>);
    }
    if (activePage == 1) {
      return (
        <MainContent>
          <ScoreTable scoreSheet={scoreSheet} />
        </MainContent>);
    }
  }

  return (<>
    <TopBar
      scoreSheet={scoreSheet}
      setScoreSheet={setScoreSheet}
    />
    {renderActivePage()}
    <BottomNavi
      activePage={activePage}
      setActivePage={setActivePage} />
  </>);
}

export default App;
