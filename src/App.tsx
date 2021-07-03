import React, { useState } from "react";
import "./App.css";

import { parse, differenceInMinutes } from "date-fns";

const HOUR = 60;

function App() {
  const [timeStart, setTimeStart] = useState("1435");
  const [timeEnd, setTimeEnd] = useState("1650");
  const [rotateNumber, setRotateNumber] = useState("");
  const [rotateNumberPerHour, setRotateNumberPerHour] = useState(0);
  const [elapsedMinutes, setElapsedMinutes] = useState(0);

  const changeTimeStart = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTimeStart(event.target.value);
  };
  const changeTimeEnd = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTimeEnd(event.target.value);
  };
  const changeRotateNumber = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRotateNumber(event.target.value);
  };

  // 計算ボタン押下
  const calcRotateNumberPerHour = () => {
    // 時間の文字列を日付オブジェクトに変換する。
    const dateStart = parse(timeStart, "HHmm", new Date());
    const dateEnd = parse(timeEnd, "HHmm", new Date());

    // 日付オブジェクトから差の分数（経過分数）を求める。
    const elapsedMinutesResult: number = differenceInMinutes(dateEnd, dateStart);
    setElapsedMinutes(elapsedMinutesResult);

    // (回転数 / 経過分数)で1分辺りの回転数を計算する。
    const rotateNumberPerMinuteResult = Number(rotateNumber) / elapsedMinutesResult;
    // 時速の回転数を求める、小数点なしにしたい。四捨五入する。
    const rotateNumberPerHourResult = Math.floor(rotateNumberPerMinuteResult * HOUR);
    setRotateNumberPerHour(rotateNumberPerHourResult);
  };

  return (
    <div className="App">
      <label htmlFor="">開始時刻</label>
      <input
        className="input"
        type="text"
        value={timeStart}
        onChange={(event) => {
          changeTimeStart(event);
        }}
      />
      <label htmlFor="">終了時刻</label>
      <input
        className="input"
        type="text"
        value={timeEnd}
        onChange={(event) => {
          changeTimeEnd(event);
        }}
      />
      <label htmlFor="">回転数</label>
      <input
        className="input"
        type="text"
        value={rotateNumber}
        onChange={(event) => {
          changeRotateNumber(event);
        }}
      />
      <button className="calcBtn" onClick={calcRotateNumberPerHour}>
        計算
      </button>

      <div className="display">
        <span>経過時間</span>
        <span className="number">{elapsedMinutes}</span>
        <span>分</span>
        <span>時速</span>
        <span className="number">{rotateNumberPerHour}</span>
        <span>回転</span>
      </div>
    </div>
  );
}

export default App;
