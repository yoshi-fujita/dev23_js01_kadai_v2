# 課題：じゃんけんゲームv２（html、css、JavaScript、jQueryの学習）

## ① 課題内容（どんな作品か）
- html、css、JavaScript、jQuery　を使って、ブラウザ上で動作するじゃんけんゲームを自作する
- 前回課題に対して、音声を追加した

## ② 工夫した点・こだわった点
- スマートフォンで使えるデザイン（レスポンシブではなく、スマホ画像サイズで作っただけ）
- jQuery で画像やテキストの差し替えを行う。フェードイン・フェードアウトなども使ってみる
- 関数も作ってみた。ディレイ表示も試してみた
- ファビコンも入れてみた
- 得点をローカルストレージに入れて、前回までのスコアを保存して続きをできるようにした。（一生リセットできない）

## ③ 質問・疑問（あれば）
- 39行目の $("#buttons").fadeIn(500); がないとうまく動作しないが、これが必要な理由が未だに分かっていない。（試行錯誤的につけてみたら、ようやく期待通りの動作になった）
- 「じゃんけん」でこちらの手を待っている間、相手の手の画像を「グー」「チョキ」「パー」をぐるぐる回転させながら差し替えたかったが、やる方法がわからなかった。　
- faceAPI.js を使ってあっちむてホイにしたかったが、使い方がわからず、途中で断念した。

## ④ その他（感想、シェアしたいことなんでも）
- ディレイ表示は、こちらの記事を参考にしました。（一番最後の「async/awaitでsleep機能を作る」）https://www.sejuku.net/blog/24629
- Github でインターネットに公開したので、スマホでも動作確認できました。https://yoshi-fujita.github.io/dev23_js01_kadai/
