// 作品データ（ここを書き換えると、一覧と作品ページの両方が変わります）
// cat: web=Webサイト / ad=広告 / video=動画編集 / app=アプリ・ツール
// images: 1枚目が一覧のサムネイル。2枚目以降は作品ページに並びます
// goal: 作品ページの「目的」／ result: 作品ページの「結果」（書いた作品だけに出ます）
// ここに書いた順番で、一覧ページに上から並びます
const CATEGORIES = {
  web: 'Webサイト',
  video: '動画編集',
  app: 'アプリ・ツール',
  ad: '広告',
};

// ジャンルごとに使ったソフト（一覧の見出しの下と、作品ページに出ます）
// 作品ごとに違うときは、その作品に tools: '...' を書くと、そちらが優先されます
const CAT_TOOLS = {
  web: 'Claude Code / HTML・CSS・JavaScript / GitHub Pages',
  ad: 'Photoshop / Illustrator',
  video: 'Premiere Pro / After Effects / Photoshop',
  app: 'Claude Code / HTML・CSS・JavaScript・C言語・Python',
};

const WORKS = [
  // ===== Webサイト =====
  {
    id: 'portfolio-site', cat: 'web',
    title: 'Webサイト / このポートフォリオサイト',
    desc: 'いま見ている、この作品集サイトです。デザインを考え、AI（Claude Code）と一緒に作り、GitHub Pagesで公開しています。',
    goal: 'Web制作会社のデザイナーに、動画・デザイン・アプリの作品を迷わず見比べてもらうため',
    points: [
      'AIに案をいくつか出してもらい、並べて比べてから自分で選んで決定',
      'ヘッダーも左揃えにして、見出し・作品一覧・プロフィールと左の線をそろえた',
      'ヘッダーの背景に作品をうっすら並べ、何を作る人かが開いてすぐ伝わるように',
      '差し色は薄いオレンジ1色にまとめ、紺の中で目を引くポイントに',
      'スマホではタブを1列にして横にスクロール、プロフィールは縦1列に',
      '動きはヘッダーと押せる場所だけ。動きを減らす設定の人には動かさない',
      '作品はデータ1か所にまとめ、足すと一覧・作品ページ・背景に自動で反映',
    ],
    link: { url: 'https://github.com/ishi061-svg/portfolio', label: 'GitHubでコードを見る' },
    images: ['web/portfolio-site-v4.png'], // パソコン＋スマホの画面を並べた版・スマホ枠を細く・インカメラ入り（前の版は portfolio-site.png / -v2 / -v3）
  },

  // ===== 広告 =====
  {
    id: 'seminar-banner', cat: 'ad',
    title: 'バナー / 経営者向けセミナー',
    desc: '「働き方講座」1DAYセミナーの告知バナーです。',
    images: ['ad/seminar-banner.png'],
  },
  {
    id: 'modelhouse-open', cat: 'ad',
    title: 'モデルハウスの広告 / 開放感',
    desc: '吹き抜けのある室内写真を大きく使った、モデルハウスのオープン告知です。',
    images: ['ad/modelhouse-open.jpg'],
  },
  {
    id: 'modelhouse-simple', cat: 'ad',
    title: 'モデルハウスの広告 / シンプル',
    desc: '外観写真を切り抜いて、余白を活かしたシンプルなモデルハウスのオープン告知です。',
    images: ['ad/modelhouse-simple.jpg'],
  },
  {
    id: 'meishi', cat: 'ad',
    title: '名刺（横向き）',
    desc: 'YouTubeの再生画面を模した、自己紹介用の名刺です。動画編集ができることがひと目で伝わるよう、再生バーや操作ボタンを配置し、自己紹介の一言を字幕（テロップ）風に入れました。',
    images: ['ad/meishi-v2.png'], // 電球→「i」マーク・Illustratorを大文字に（元の版は meishi.png）
  },

  // ===== 動画編集 =====
  // youtube: { id: '動画のID' } か { list: '再生リストのID' }。作品ページの中で再生されます
  //   embed: false … 埋め込みが許可されていない動画。代わりに「YouTubeで見る」ボタンを出します
  {
    id: 'tv-dodododotjp', cat: 'video',
    title: 'テレビ番組 / どどどどっとJP',
    desc: '音声収録・テロップ・クロマキー処理・エフェクト・整音を担当しました。<br>(アーカイブがあるテレビ番組が少ないので、一部のみ掲載しています。)', // <br> は改行
    youtube: { id: 'XGJQA4u6KLY' },
    images: ['video/tv-dodododotjp.png'],
  },
  {
    id: 'cm-aoonisui', cat: 'video',
    title: 'テレビCM / 青鬼水',
    desc: '音声収録・テロップ・クロマキー処理・エフェクト・整音を担当しました。',
    youtube: { id: '7Bq-Td_Fky0', embed: false },
    images: ['video/cm-aoonisui.png'],
  },
  {
    id: 'cm-isuzu', cat: 'video',
    tools: 'Premiere Pro / After Effects', // Photoshop は使っていないので、ジャンル共通の表記より優先
    title: 'テレビCM / いすゞのトラック',
    desc: 'いすゞのトラック「ELF mio」のテレビCMです。撮影サポート・カット・エフェクト・整音・カラーコレクションを担当しました。',
    youtube: { id: 'c_3CcZP-p54' },
    images: ['video/cm-isuzu.webp'],
  },
  {
    id: 'shorts-daywork', cat: 'video',
    tools: 'Premiere Pro / Photoshop', // After Effects は使っていないので、ジャンル共通の表記より優先
    title: 'YouTube / ショート動画',
    desc: 'バイトアプリPR。1日農業バイトアプリ「デイワーク」の縦型ショート動画です。',
    youtube: { list: 'PLSuonXJytkRo' },
    images: ['video/short-collage-white.png'],
  },
  {
    id: 'business-design', cat: 'video',
    tools: 'Premiere Pro / Photoshop', // After Effects は使っていないので、ジャンル共通の表記より優先
    title: 'YouTube / ビジネス向けデザイン',
    desc: '動画の内容がひと目で伝わるよう意識した、ビジネス系YouTubeのサムネイルとテロップです。',
    images: ['video/thumb-owakon.png', 'video/telop-fukugyou-1.png', 'video/telop-fukugyou-2.png'],
  },
  {
    id: 'thumb-fukugyou', cat: 'video',
    featured: true, // ジャンルの一番上に大きく出す「まず見てほしい作品」
    title: 'YouTube / ビジネス動画「今オススメの副業は動画編集！？」',
    desc: 'ビジネス・バラエティ向けの編集サンプルです。',
    youtube: { id: 'AJlMxHQk7U8' },
    images: ['video/thumb-fukugyou.png'],
  },
  {
    id: 'thumb-mosyu', cat: 'video',
    tools: 'Premiere Pro / Photoshop', // After Effects は使っていないので、ジャンル共通の表記より優先
    title: 'YouTube / ゲーム実況',
    desc: 'ゲーム実況動画のサムネイル制作と編集を担当しました。',
    youtube: { id: 'aoorcTJ3Gl8' },
    images: ['video/thumb-mosyu.png'],
  },
  {
    id: 'thumb-game-pro', cat: 'video',
    tools: 'Premiere Pro / Photoshop', // After Effects は使っていないので、ジャンル共通の表記より優先
    title: 'YouTube / ゲーム実況',
    desc: 'ゲーム実況動画のサムネイル制作と編集を担当しました。',
    youtube: { id: 'D3gQ0gbi-D8' },
    images: ['video/thumb-game-pro-v2.png'], // 人物を拡大・怒りマーク入り（元の版は thumb-game-pro.png）
  },
  {
    id: 'ai-katsuyou', cat: 'video',
    tools: 'Premiere Pro / Photoshop', // After Effects は使っていないので、ジャンル共通の表記より優先
    title: 'YouTube / AI出力動画（Fable 5.2）',
    desc: 'AI（Fable 5.2）で出力した、動画編集者のAI活用を紹介する解説動画です。',
    youtube: { id: 'FYzqt8YA9g8' },
    images: ['video/ai-katsuyou.png'], // 動画を読みこむまでの絵・ヘッダー背景に使う
    loop: 'video/ai-katsuyou-loop.mp4', // 掲載画像の代わりに動かす（タイムラインの場面だけ・60fps・音なし）
  },

  // ===== アプリ・ツール =====
  {
    id: 'kururin-gif', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript・gifenc',
    title: 'くるりん GIF',
    desc: 'スマホで撮った動画の一部分を、再生と逆再生をつないだ「行って戻る」往復ループの GIF にする Web アプリです。スマホのブラウザだけで動き、X・Discord・LINE に貼れる大きさに自動で収めます。',
    goal: 'パソコン用に作った「GIF ループツール」を、スマホだけでも使えるようにするため',
    points: [
      'シークバーと1フレーム送りで範囲を決め、1:1・9:16 などの切り抜き枠を指で調整',
      '再生スピード・なめらかさ（fps）・横幅と、貼り付け先（X・Discord・LINE）を選ぶだけ',
      '数枚だけ先に GIF にして大きさを見積もり、上限に入る横幅を最初から選ぶ',
      '動画を流しながら絵を写して、1枚ずつ取り出すより速く作る',
      '折り返しで止まって見えないよう、逆再生側の最初と最後の1枚を外す',
      '動画はスマホの中だけで GIF にし、どこにも送らない',
    ],
    link: { url: 'https://ishi061-svg.github.io/kururin-gif/', label: '使ってみる' },
    images: ['app/kururin-gif.gif'],
  },
  {
    id: 'gif-loop-tool', cat: 'app',
    tools: 'Claude Code / Python・tkinter・tkinterdnd2・ffmpeg',
    title: 'GIF ループツール（PC版）',
    desc: '動画（MP4 など）の一部分を、再生と逆再生をつないだ「行って戻る」往復ループの GIF にする Windows のアプリです。動画を見ながら範囲と切り抜く場所を決め、Discord や X に貼れる大きさに自動で収めます。',
    points: [
      'シークバー・1フレーム送り・キーボードで範囲を決め、切り抜き枠はドラッグで調整',
      '貼り付け先（X・Discord・LINE）を選ぶと、上限に収まるまで横幅 → fps の順に下げて自動で作り直す',
      '保存する前にプレビューで再生。設定が同じなら、作り直さずにそのまま保存',
      '進み具合と「あと約○秒」を出し、［やめる］で途中で止められる',
      'シークバーを動画編集ソフトのように拡大・縮小できる',
      'スマホ版「くるりん GIF」と同じ見た目・同じ言葉にそろえ、ダブルクリックで使える exe にした',
    ],
    link: { url: 'https://github.com/ishi061-svg/gif-loop-tool', label: 'GitHubで見る' },
    images: ['app/gif-loop-tool.gif'],
  },
  {
    id: '3d-model-tool', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript・Three.js / Blender',
    title: '3Dモデル指示ツール',
    desc: '人の形の3Dモデル（素体）にポーズを付けて並べ、演者さんや画像生成AIにポーズや構図を伝えるためのWebツールです。画像・ポーズのデータ（JSON）・3Dデータ（glb）で書き出せます。',
    goal: '演者さんや画像生成AIに、ポーズや構図を正確に伝えるため',
    points: [
      '1〜3人を男性（青）・女性（赤）で出し、9種類のポーズから選んで調整',
      '関節のつまみをドラッグ、または「前後・ひねり・横」のスライダーで曲げる',
      '手の形は、開く・握る・指さし・ピース・グッド・OK の6種類',
      '椅子・テーブル・丸テーブルを置いて、座る場面も作れる',
      '16:9・9:16・1:1 の画像、ポーズの JSON、骨入りの glb で保存',
      '素体は利用規約を確かめ、Blender で骨の結び付けなどの加工をして使用',
    ],
    link: { url: 'https://ishi061-svg.github.io/3d-model-tool/', label: '使ってみる' }, // GitHubに 3d-model-tool を作って公開してから有効になる
    images: ['app/3d-model-tool.png'],
  },
  {
    id: 'daihon-viewer', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript', // C言語は使っていないので、ジャンル共通の表記より優先
    title: '台本表示ツール',
    desc: '台本を貼り付けるだけで、タブレットにセリフを1ページずつ大きく表示するWebツールです。収録や撮影のとき、離れた場所からでも台本が読めるように作りました。',
    points: [
      'セリフごとに、画面の端まで入るいちばん大きな文字へ自動で調整',
      '「名前：セリフ」で人ごとに色分けし、名前には座布団を敷いて見やすく',
      '区切り・（ ）・名前をワンボタンで入力。ページの区切り方も選べる',
      '文字の太さ・フチ・行間を調整し、確認ウィンドウでその場で確認',
      'どの機器でも見られるよう、1ページずつ16:9のJPGで保存（ZIPでまとめて）',
      'タップやスワイプでめくり、Androidでは全画面・横向きに自動で固定',
    ],
    link: { url: 'https://ishi061-svg.github.io/daihon-viewer/', label: '使ってみる' }, // GitHubに daihon-viewer を作って公開してから有効になる
    images: ['app/daihon-viewer.png'],
  },
  {
    id: 'lightsout', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript', // C言語は使っていないので、ジャンル共通の表記より優先
    title: 'ゲームアプリ / パズル「ライツアウト」',
    desc: 'Claude Codeで作成したゲームアプリです。スマートフォンでも遊べます。',
    goal: 'ルールがすぐに分かり、見た目もプレイも気軽に楽しめるゲームを作るため',
    result: '自分で実際に遊んで使用した',
    points: [ // 作品ページの「工夫したところ」に箇条書きで出ます（一覧には出ません）
      '動き方や見た目を自分で決め、AIと1ステップずつ制作',
      '押したマスと上下左右が切り替わる、5×5のパズル',
      '毎回違う問題を自動で作り、必ず解けるように工夫',
      '「新しい問題」でマスがカードのように裏返る演出',
      '押した音は素材、クリアの音はプログラムで作成',
      'スマホでも崩れずに遊べるデザイン',
    ],
    link: { url: 'https://ishi061-svg.github.io/lights-out/', label: '遊んでみる' },
    images: ['app/lightsout-v2.png'], // 背景色・アプリ名入り（元の版は lightsout.png）
  },
  {
    id: 'lightsout-c', cat: 'app',
    title: 'ゲームアプリ / ライツアウト（C言語版）',
    desc: 'JavaScriptで作ったライツアウトを、C言語で作り直したコンソール版です。組み込みの仕事を目指して、盤面をビット演算で管理し、最短の答えを表示するヒント機能と自動テストも作りました。',
    goal: 'C言語を覚えるため。C言語・C++を使う組み込みの仕事を目指し、同じゲームを2つの言語で作って、違いを説明できるようにした',
    tools: 'Claude Code / C言語・GCC',
    points: [
      'JavaScript版を、組み込みの仕事を目指してC言語で作り直し',
      '25マスの盤面を数字1つで管理し、押す処理を計算1回に（ビット演算）',
      '「h」で、今の盤面から最短で消せる押し方を表示',
      '5689個の確認を約1秒で行う自動テストを作成',
      'おかしな入力でも止まらず、理由を出して聞き直す作り',
      '仕様書とREADMEを書き、GitHubで公開',
    ],
    link: { url: 'https://github.com/ishi061-svg/lights-out-c', label: 'GitHubで見る' },
    images: ['app/lightsout-c.png'],
  },
  {
    id: 'kaimono-memo', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript', // C言語は使っていないので、ジャンル共通の表記より優先
    title: 'アプリ / 買い物メモ',
    desc: 'Claude Codeで作成したアプリです。スマートフォンでも使用できます。',
    goal: '毎日使うもので、「書く・見る・直す・消す」と「データの保存」というアプリの基本を身につけるため',
    result: '家族が買い物で使っている',
    points: [
      '動き方を自分で決め、AIと1ステップずつ制作',
      'よく買う物は、追加した回数から自動でボタン化（☆で登録も可）',
      '買った物は自動で下に移り、買い忘れを防止',
      '同じ物を重ねて追加すると個数が増え、二重買いを防ぐ',
      'ブラウザを閉じてもリストが残る保存機能つき',
      'スマホで片手でも押しやすいデザイン',
    ],
    link: { url: 'https://ishi061-svg.github.io/shopping-memo/', label: '使ってみる' },
    images: ['app/kaimono-memo-v4.png'], // タイトルをアプリと同じフォーク Pro H に（太らせた版は v3、前の版は kaimono-memo-v2.png、元の版は kaimono-memo.png）
  },
  {
    id: 'ytmusic-tag-writer', cat: 'app',
    tools: 'Claude Code / Python・tkinter・ytmusicapi・mutagen',
    title: 'YouTube Music タグ書き込み',
    desc: 'YouTube Music のアルバムページの URL を貼るだけで、MP3 に曲名・アルバム名・アーティスト・トラック番号・ジャケットをまとめて書き込むアプリです。',
    points: [
      '曲名が近いもの同士を自動で組み合わせる。日本語と英語、どちらの曲名でも照合できる',
      '曲名で見つからない曲は並び順で当てはめ、一覧で色を変えて知らせる',
      '書き込む前に「今 → 新」を一覧で確認でき、ダブルクリックで対応する曲を選び直せる',
      'ジャケットは 1200×1200 で取得。すでに入っている画像を置き換えるかはチェックで選べる',
      'ローマ字の曲名を、YouTube Music の日本語の曲名に書き換えることもできる',
      '書き込む前にバックアップを作り、チェックの状態も覚えている',
      'ドラッグ＆ドロップでフォルダや URL を入れられる',
      'ダブルクリックで使える exe にして、GitHub で公開',
    ],
    link: { url: 'https://github.com/ishi061-svg/ytmusic-tag-writer', label: 'GitHubで見る' },
    images: ['app/ytmusic-tag-writer.png'],
  },
  {
    id: 'gamelib', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript', // C言語は使っていないので、ジャンル共通の表記より優先
    title: 'Webページ / ゲームライブラリ',
    desc: '持っているゲームの一覧ページです。メモアプリ（UPNOTE）のメモから作り、機種ごとのクリア状況やクリア率をひと目で確認できます。タイトル検索もできます。',
    link: { url: 'https://claude.ai/artifact/WPdBzssejJ6zYyquDQVAzS', label: '見てみる' },
    images: ['app/gamelib.png'],
  },
  {
    id: 'hayamiru', cat: 'app',
    tools: 'Claude Code / Python・tkinter・Pillow・ffmpeg',
    title: 'ハヤミル（動画一覧アプリ）',
    desc: '登録したフォルダの動画を一覧にして、すぐ並べ替え・検索・再生できるアプリです。動画が何千本あっても軽く動くことを一番の目標にしました。',
    goal: 'エクスプローラーで動画の多いフォルダを並べ替えると時間がかかり、見たい動画をすぐ探せなかったため',
    result: '自分の動画の整理に実際に使用している。使いながら出た「遅い」「手間」という声を、毎回時間を測って直した',
    points: [
      '試験用の5,000本で、読み込み0.08秒・並べ替え0.1秒前後',
      '打つたびに絞り込む検索。ファイル名を右クリックするか、なぞるだけでも検索できる',
      'よく使う言葉を「ジャンル・シリーズ」などに分けてボタンにし、1回押すだけで検索',
      'ファイル名によく出る言葉を数えて並べ、ボタン1回で分類。待ち時間を約5秒から約0.1秒に改善',
      '長さとサムネイルは裏で少しずつ作り、見えている分だけを描くので、何千本でも重くならない',
      'タグ・星・ワンクリック再生。見た目は速さを測りながら整えた',
      'ダブルクリックで使える exe にして、GitHub で公開',
    ],
    link: { url: 'https://github.com/ishi061-svg/hayamiru', label: 'GitHubで見る' }, // GitHubに hayamiru を作って公開してから有効になる
    images: ['app/hayamiru.png'],
  },
  {
    id: 'premiere-plugins', cat: 'app',
    title: 'Premiereプラグイン',
    desc: 'エフェクトを一覧からワンボタンで適用するプラグイン（エフェクトパレット）と、無音部分だけカットするプラグイン（無音カットツール）です。',
    tools: 'Claude Code / HTML・CSS・JavaScript・ExtendScript・PowerShell・Python', // 2つのプラグインの中身で確認（PowerShell＝エフェクトパレット、Python＝無音カット）
    images: ['app/premiere-plugins-v2.png'], // 背景色・名前入り（元の版は premiere-plugins.png）
  },
  {
    id: 'premiere-folder-template', cat: 'app',
    tools: 'Claude Code / Python・tkinter',
    title: 'Premiere フォルダテンプレート',
    desc: '動画編集を始めるときのフォルダを、ボタン1つでまとめて作るツールです。作品名と日付を入れると「作品名_2026-11-15」のフォルダができ、Premiere に入れるとそのままの形でビンになります。',
    goal: '動画編集の作業をスマートに進められるよう、フォルダをきれいにそろえるため',
    result: 'フォルダを手で作らなくてよくなり、いつも同じ形にそろうようになった。作業効率が上がった',
    points: [
      '素材・音声・画像・書き出しなど22個のフォルダを、ボタン1つで作成',
      'いらないフォルダはチェックで OFF。親を外すと中も作らない',
      'フォルダの形はメモ帳で書き換えられ、書き間違いは行番号で表示',
      '前回の場所とチェックを覚えていて、日付は今日が自動で入る',
      'Premiere に入れると、空のフォルダもそのままビンになることを確認',
      'ダブルクリックで使える exe にして、GitHub で公開',
    ],
    link: { url: 'https://github.com/ishi061-svg/premiere-folder-template', label: 'GitHubで見る' },
    images: ['app/premiere-folder-template-v2.png'],
  },
  {
    id: 'telop-tool', cat: 'app',
    tools: 'Claude Code / HTML・CSS・JavaScript', // C言語は使っていないので、ジャンル共通の表記より優先
    title: 'テロップ作成ツール',
    desc: 'Premiereで動画編集の作業効率向上のために作成しました。動画に重ねるテロップを作って、背景が透明なPNGで保存できます。',
    goal: '動画編集の仕事で毎日使うテロップ作りを、ブラウザだけで手早くできるようにするため',
    result: 'テロップ作りに実際に使用した',
    points: [
      '動画編集で毎日使うテロップ作りを、ブラウザだけで手早く',
      '文字の色・フォント・2重の縁取り・影・座布団を自由に設定',
      '「バラエティ風」「ビジネス風」のテンプレートで一発切り替え',
      '動画と同じ1920×1080か、文字ぴったりの透明PNGで保存',
      '作業はブラウザの中だけで完結し、データは外に送らない',
      'スマホでも使いやすいよう、プレビューを画面に固定',
    ],
    link: { url: 'https://ishi061-svg.github.io/telop-maker/', label: '使ってみる' },
    images: ['app/telop-tool-v2.png'], // 背景色・アプリ名入り（元の版は telop-tool.png）
  },
  {
    id: 'mp4-thumbnail-changer', cat: 'app',
    tools: 'Claude Code / Python・tkinter・ffmpeg',
    title: 'MP4サムネイル変更',
    desc: 'エクスプローラーで見える MP4 のサムネイルを、好きな画像や、動画の中の好きな場面に変えるアプリです。何本かまとめて処理できます。',
    goal: 'MP4のサムネイルをDVDのジャケットやタイトル画面にして、見た目をそろえるため',
    result: '実際に使用した。使ってもらったところ「動画の場面から選ぶ」機能に気づきにくいと分かり、タブにして2つの使い方がいつも見えるように直した',
    points: [
      '動画は作り直さずに表紙の絵だけを足すので、画質が落ちず一瞬で終わる',
      'サムネイルは、画像ファイルか動画の好きな場面から、タブで選べる',
      '場面はスライダーで見ながら、または時間を入れて選べる',
      '元の動画を残すか上書きするかを毎回選べ、失敗しても元は壊れない',
      'ドラッグ＆ドロップで動画・画像・フォルダを入れて、まとめて処理',
      'ダブルクリックで使える exe にして、GitHub で公開',
    ],
    link: { url: 'https://github.com/ishi061-svg/mp4-thumbnail-changer', label: 'GitHubで見る' },
    images: ['app/mp4-thumbnail-changer.png'],
  },
  {
    id: 'audio-track-adder', cat: 'app',
    tools: 'Claude Code / Python・tkinter・ffmpeg',
    title: '音声トラック追加ツール',
    desc: 'MP4 に、MP3・M4A・WAV の音を別の音声トラックとして追加するアプリです。元の音は「足す」「入れ替える」「上書きする」から扱い方を選べます。',
    goal: '動画に副音声を追加するため',
    result: '動画への音声トラックの追加に実際に使用した',
    points: [
      '映像はコピーするだけなので、画質が落ちず速い',
      'MP3・M4A・WAV を最大4つ、並べた順にトラックへ追加',
      '元の音は「足す」「入れ替える」「上書きする」の3つから選べる',
      'ドラッグ＆ドロップの場所が青くなり、入れ方が分かる画面',
      'トラックの並びを1か所で決め、画面と動画の番号がずれない',
      '壊れたファイルなど12通りを試し、理由を出して止まる作り',
      'ダブルクリックで使える exe にして、GitHub で公開',
    ],
    link: { url: 'https://github.com/ishi061-svg/audio-track-adder', label: 'GitHubで見る' },
    images: ['app/audio-track-adder.png'],
  },
  {
    id: 'se-head-trimmer', cat: 'app',
    tools: 'Claude Code / Python・tkinter・ffmpeg',
    title: 'SE頭無音カット',
    desc: 'ダウンロードした SE（効果音）素材の、頭の無音だけを自動で切るアプリです。最後の無音は残し、フォルダごとまとめて処理できます。',
    goal: 'ダウンロードした効果音の頭の無音を、編集のたびに手で詰める手間をなくすため',
    result: '効果音素材の無音カットに実際に使用し、作業効率が上がった',
    points: [
      '無音の基準（dB）と、音の直前に残す余白を画面で調整',
      '切る必要がないファイルは作り直さずスキップし、理由を表示',
      '元のファイルは残し、「cut」フォルダに同じ名前で保存',
      'WAV・MP3 など6形式に対応し、元と同じ音質で保存',
      'ドラッグ＆ドロップでファイルもフォルダも入れられる',
      '壊れたファイルなどをわざと入れて試し、理由を出して止まる作り',
    ],
    link: { url: 'https://github.com/ishi061-svg/se-head-trimmer', label: 'GitHubで見る' },
    images: ['app/se-head-trimmer.png'],
  },
];
