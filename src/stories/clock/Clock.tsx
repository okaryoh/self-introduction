import { useEffect, useState } from "react";
import "../../style.css"

interface ClockProps {
  /** フォントサイズ (デフォルト12px) */
  fontSize?: number;
  /** モード (both: 両方 / onlyDate: 日付のみ / onlyTime: 時間のみ) */
  mode?: 'both' | 'onlyDate' | 'onlyTime';
}

/**
 * Primary UI component for user interaction
 */
export const Clock = ({
  fontSize = 12,
  mode = "both",
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

  const result: string = (() => {
    if (mode === 'both') {
      return `${dateState} ${timeState}`
    }
    if (mode === 'onlyDate') {
      return dateState;
    }
    return timeState;
  })()
  return (
    <div className="clock"
      style={{
        fontSize: `${fontSize}px`
      }}>
      {result}
    </div >
  );
};

const zeroPadding = (str: number, end: number): string => {
  return `0${str}`.slice(-1 * end);
};
