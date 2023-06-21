import { useEffect, useState } from "react";
import "../../style.css"

interface ClockProps {
}

/**
 * Primary UI component for user interaction
 */
export const Clock = ({
}: ClockProps) => {
  const [dateState, setDate] = useState<string>("");
  const [timeState, setTime] = useState<string>("");

  // 1秒ごとにclock関数を呼び出す
  useEffect(() => {
    setInterval(() => {
      // 現在の日時・時刻の情報を取得
      const d = new Date();

      // 年を取得
      const year = d.getFullYear();
      // 月を取得
      const month = zeroPadding(d.getMonth() + 1, 2);
      // 日を取得
      const date = zeroPadding(d.getDate(), 2);
      // 曜日を取得
      const dayNum = d.getDay();
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = weekday[dayNum];
      // 時を取得
      const hour = zeroPadding(d.getHours(), 2);
      // 分を取得
      const min = zeroPadding(d.getMinutes(), 2);
      // 秒を取得
      const sec = zeroPadding(d.getSeconds(), 2);
      // 日付・時刻の文字列を作成
      setDate(`${year}.${month}.${date} ${day}`);
      setTime(`${hour}:${min}:${sec}`);
    }, 1000)
  }, [])

  return (
    <div className="clock">
      {dateState} {timeState}
    </div>
  );
};

const zeroPadding = (str: number, end: number): string => {
  return `0${str}`.slice(-1 * end);
};
