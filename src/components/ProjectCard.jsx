import React from "react";
import "./ProjectCard.css"; // CSSファイルをインポート
import { useNavigate } from "react-router-dom";

function ProjectCard() {
  const navigate = useNavigate();

  
  const onClickPage1 = () => {
    navigate("/topic-page-1"); // トピック1へのパス
  };
  const onClickPage2 = () => {
    navigate("/topic-page-2"); // トピック2へのパス
  };
  const onClickPage3 = () => {
    navigate("/topic-page-3"); // トピック3へのパス
  };

  return (
    <div className="topics-container">
      <h2 className="topics-title">過去作品</h2>

      <div className="topics-items">
        <div className="topic-item" onClick={onClickPage1}>
          <img src="no1_b.png" alt="" />
          <h3 className="topic-subtitle">Music Atelier</h3>
          <p>ゲーム感覚で手軽に音楽が製作できる 創作活動を楽しんでほしい</p>
        </div>

        <div className="topic-item" onClick={onClickPage2}>
          <img src="no2.png" alt="" />
          <h3 className="topic-subtitle">
            革命機神テクノブレイブ 　～暗黒学院 桃山～
          </h3>
          <p>
            ARMORED COREシリーズ ガンダムシリーズ ゲッター スーパーロボット対戦
            上記の好きなものを追い求めた作品を作りたい
          </p>
        </div>

        <div className="topic-item" onClick={onClickPage3}>
          <img src="no3_a.png" alt="" />
          <h3 className="topic-subtitle">大学生のひまつぶし</h3>
          <p>
            「パチンコを打ちに行くために教授へ言い訳をして円満に授業を休もう！」
            ChatGPTを用いて対話型でかつ、毎回言い訳の文や、教授からの応答文が変わるようにした。
            スマホ向けアプリの開発
          </p>
        </div>

        <div className="topic-item" onClick={onClickPage3}>
          <img src="aaa.png" alt="" />
          <h3 className="topic-subtitle">限界☆ギリギリ卒論制作!</h3>
          <p>
            中学・高校、そして社会人が行わず、
            大学生だけが行うことは卒論制作じゃね？と
          </p>
        </div>

        <div className="topic-item" onClick={onClickPage3}>
          <img src="Mytech.png" alt="" />
          <h3 className="topic-subtitle">
            革命機神ギリギリMusic 〜俺はパチンコが打ちたいんだ〜
          </h3>
          <p>
            大学生だからできること=>趣味を深めること=> 創作活動を行う=>
            創作活動を楽しんで行ってほしいゲームをしてもらう =>
            ゲームを通して創作を楽しんでほしい => 自由 => ロボット => 攻撃対象=>
            日常のストレス対象 => 学校、会社=>卒論制作
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
