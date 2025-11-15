export function ProfileCard({ profile, index, setIndex }) {
  // インデックスを1つ進める関数
  const handleClick = () => {
    if (0 <= index && index < 4) {
      setIndex(index + 1); // 現在のインデックスに1を加算
    } else {
      setIndex(0);
    }
  };

  return (
    <main>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <h2>{profile.name}</h2>
        <p>【年齢】{profile.age}歳</p>
        <p>【自己紹介】{profile.bio}。</p>
        <button onClick={handleClick}>次のプロフィール</button>
      </div>
    </main>
  );
}
