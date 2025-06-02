import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';

import { ScoreInputColumn } from "./components/calcScore/ScoreInputColumn.jsx";
import { MultipleScoreButtons } from "./components/calcScore/MultipleScoreButtons.jsx";
import { BullButtons } from "./components/calcScore/BullButtons.jsx";
import { MissButton } from "./components/calcScore/MissButton.jsx";

import { TotalScoreCard } from "./displayScore/TotalScoreCard.jsx";
import { ResultDialog } from "./displayScore/ResultDialog.jsx";
import { ScoreTable, ScoreTableSingle } from "./displayScore/ScoreTable.jsx";

import { TopBar } from "./components/bars/TopBar.jsx";
import { BotBar } from "./components/bars/BotBar.jsx";

function App() {
  // カラムの開閉フラグ
  const [selectOpen, setSelectOpen] = useState(false);

  // 何倍か
  const [ratio, setRatio] = useState(1);

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
            selectOpen={selectOpen}
            setSelectOpen={setSelectOpen}
            scoreSheet={scoreSheet}
            setScoreSheet={setScoreSheet}
            ratio={ratio}
            setRatio={setRatio}
          />
          <MultipleScoreButtons
            setSelectOpen={setSelectOpen}
            setRatio={setRatio}
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
    <BotBar
      activePage={activePage}
      setActivePage={setActivePage} />
  </>);
}

export default App;
