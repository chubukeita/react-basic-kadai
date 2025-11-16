import { useState } from "react";

export function Calculator() {
  // 表示欄の状態管理
  const [display, setDisplay] = useState("");

  // 計算を実行するメソッドの定義
  const calculate = (expression) => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // 有効な式であるかチェック
    const match = expression.match(validExpression);
    if (!match) {
      throw new Error("無効な式です。");
    }

    const num1 = Number(match[1]); // 1つ目の整数
    const operator = match[2]; // 演算子
    const num2 = Number(match[3]); // 2つ目の整数
    let calcNum = ""; // 計算結果

    if (operator === "+" && (calcNum = num1 + num2));
    if (operator === "-" && (calcNum = num1 - num2));
    if (operator === "*" && (calcNum = num1 * num2));
    if (operator === "/" && num2 !== 0 && (calcNum = num1 / num2));
    if (operator === "/" && num2 === 0) {
      throw new Error("0で割り算はできません");
    }
    return calcNum;
  };

  // displayを更新するイベントハンドラ
  const handleClick = (btn) => {
    // Cが押されたとき、displayを’’にクリアする。
    if (btn === "C") {
      setDisplay("");
      return;
    }

    // =が押されたとき、現在のdisplayをもとに計算を実行し、その結果をdisplayに設定。
    // 計算失敗時は「エラー」を設定する。計算処理は、後述するcalculate()メソッドで行う。
    if (btn === "=") {
      try {
        setDisplay(calculate(display));
      } catch {
        setDisplay("エラー");
      }
      return;

      // エラーの詳細を出力するなら、上のtry文をコメントアウトにして、以下のコメントアウトを外す
      // try {
      //  setDisplay(calculate(display))};
      // } catch (e) {
      //  setDisplay(e.message);
      // }
      // return;
    }

    // 数字や演算子の時,、そのボタン名（+、1など）をdisplayの末尾に追加する
    setDisplay((prev) => prev + btn);
  };

  // ボタンUI用配列の宣言
  // ボタンの配置を表す配列（記述順に表示）
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  // UIの構築
  return (
    <div>
      <h2>電卓アプリ</h2>
      <div className="caluculator-container">
        {display === "" ? "\u00A0" : display}
      </div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
