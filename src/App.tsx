import { useState, useEffect } from "react";

import { TopBar } from "./components/TopBar.jsx";
import { TotalScoreDisplay } from "./components/TotalScoreDisplay.jsx";
import { BullButtons } from "./components/BullButtons.jsx";
import { ScoreInputColumn } from "./components/ScoreInputColumn.jsx";
import { MultipleScoreButtons } from "./components/MultipleScoreButtons.jsx";

function App() {
  // カラムで選ばれた点数（１～２０）
  const [selectedScore, setSelectedScore] = useState(1);

  // 何ラウンド目か、何投目か
  const [roundDisplay, setRoundDisplay] = useState("ROUND 1 ●○○");
  
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
    if(scoreSheet.length){
      console.log(scoreSheet.length + "投目："+scoreSheet[scoreSheet.length-1].label);
      console.log(scoreSheet);

      // TODO:ラウンド表示
    }

    if (scoreSheet.length === 24) {
      isGameSetHandle();
    }
  }, [scoreSheet]);

  return (<>
  <TopBar score={score} setScore={setScore} setScoreSheet={setScoreSheet} />
  <TotalScoreDisplay score={score} />
  <BullButtons
    score={score}
    setScore={setScore}
    scoreSheet={scoreSheet}
    setScoreSheet={setScoreSheet}
  />
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
  </>);
}

export default App;
