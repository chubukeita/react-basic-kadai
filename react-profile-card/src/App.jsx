import "./App.css";

import { ProfileCard } from "./ProfileCard";
import { useState } from "react";

// 社員のプロフィール情報
const profiles = [
  {
    name: "侍健太",
    age: 37,
    bio: "プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。",
  },
  {
    name: "刀沢彩香",
    age: 32,
    bio: "フルスタックエンジニア。新規サービスの設計から運用まで担当しています。",
  },
  {
    name: "戦国広志",
    age: 24,
    bio: "若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。",
  },
  {
    name: "武士山美咲",
    age: 27,
    bio: "UI/UXデザイナー。使いやすく美しいデザインを追求しています。",
  },
  {
    name: "武者小路勇気",
    age: 29,
    bio: "フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。",
  },
];

function App() {
  // インデックスをstateとして管理
  const [index, setIndex] = useState(0); // 初期値は0

  return (
    <>
      <ProfileCard
        profile={profiles[index]}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default App;
