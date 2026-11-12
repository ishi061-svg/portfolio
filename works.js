// 作品データ（ここを書き換えると、一覧と作品ページの両方が変わります）
// cat: ad=広告 / video=動画編集 / app=アプリ・ツール
// images: 1枚目が一覧のサムネイル。2枚目以降は作品ページに並びます
// ここに書いた順番で、一覧ページに上から並びます
const CATEGORIES = {
  video: '動画編集',
  app: 'アプリ・ツール',
  ad: '広告',
};

// ジャンルごとに使ったソフト（一覧の見出しの下と、作品ページに出ます）
// 作品ごとに違うときは、その作品に tools: '...' を書くと、そちらが優先されます
const CAT_TOOLS = {
  ad: 'Photoshop / Illustrator',
  video: 'Premiere Pro / After Effects / Photoshop',
  app: 'Claude Code / HTML・CSS・JavaScript・C言語',
};

const WORKS = [
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
    id: 'shorts-daywork', cat: 'video',
    title: 'YouTube / ショート動画',
    desc: 'バイトアプリPR。1日農業バイトアプリ「デイワーク」の縦型ショート動画です。',
    youtube: { list: 'PLSuonXJytkRo' },
    images: ['video/short-collage-white.png'],
  },
  {
    id: 'business-design', cat: 'video',
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
    title: 'YouTube / ゲーム実況',
    desc: 'ゲーム実況動画のサムネイル制作と編集を担当しました。',
    youtube: { id: 'aoorcTJ3Gl8' },
    images: ['video/thumb-mosyu.png'],
  },
  {
    id: 'thumb-game-pro', cat: 'video',
    title: 'YouTube / ゲーム実況',
    desc: 'ゲーム実況動画のサムネイル制作と編集を担当しました。',
    youtube: { id: 'D3gQ0gbi-D8' },
    images: ['video/thumb-game-pro-v2.png'], // 人物を拡大・怒りマーク入り（元の版は thumb-game-pro.png）
  },
  {
    id: 'ai-katsuyou', cat: 'video',
    title: 'YouTube / AI出力動画（Fable 5.2）',
    desc: 'AI（Fable 5.2）で出力した、動画編集者のAI活用を紹介する解説動画です。',
    youtube: { id: 'FYzqt8YA9g8' },
    images: ['video/ai-katsuyou.png'],
  },

  // ===== アプリ・ツール =====
  {
    id: 'lightsout', cat: 'app',
    title: 'ゲームアプリ / パズル「ライツアウト」',
    desc: 'Claude Codeで作成したゲームアプリです。スマートフォンでも遊べます。',
    link: { url: 'https://ishi061-svg.github.io/lights-out/', label: '遊んでみる' },
    images: ['app/lightsout-v2.png'], // 背景色・アプリ名入り（元の版は lightsout.png）
  },
  {
    id: 'lightsout-c', cat: 'app',
    title: 'ゲームアプリ / ライツアウト（C言語版）',
    desc: 'JavaScriptで作ったライツアウトを、C言語で作り直したコンソール版です。組み込みの仕事を目指して、盤面をビット演算で管理し、最短の答えを表示するヒント機能と自動テストも作りました。',
    tools: 'Claude Code / C言語・GCC',
    link: { url: 'https://github.com/ishi061-svg/lights-out-c', label: 'GitHubで見る' },
    images: ['app/lightsout-c.png'],
  },
  {
    id: 'kaimono-memo', cat: 'app',
    title: 'アプリ / 買い物メモ',
    desc: 'Claude Codeで作成したアプリです。スマートフォンでも使用できます。',
    link: { url: 'https://ishi061-svg.github.io/shopping-memo/', label: '使ってみる' },
    images: ['app/kaimono-memo-v2.png'], // 背景色・アプリ名入り（元の版は kaimono-memo.png）
  },
  {
    id: 'gamelib', cat: 'app',
    title: 'アプリ / ゲームライブラリ',
    desc: 'Claude Codeで作成した、持っているゲームの一覧ページです。メモアプリ（UPNOTE）のメモから作り、機種ごとのクリア状況やクリア率をひと目で確認できます。タイトル検索もできます。',
    link: { url: 'https://claude.ai/artifact/WPdBzssejJ6zYyquDQVAzS', label: '見てみる' },
    images: ['app/gamelib.png'],
  },
  {
    id: 'telop-tool', cat: 'app',
    title: 'テロップ作成ツール',
    desc: 'Premiereで動画編集の作業効率向上のために作成しました。動画に重ねるテロップを作って、背景が透明なPNGで保存できます。',
    link: { url: 'https://ishi061-svg.github.io/telop-maker/', label: '使ってみる' },
    images: ['app/telop-tool-v2.png'], // 背景色・アプリ名入り（元の版は telop-tool.png）
  },
  {
    id: 'premiere-plugins', cat: 'app',
    title: 'Premiereプラグイン',
    desc: 'エフェクトを一覧からワンボタンで適用するプラグイン（エフェクトパレット）と、無音部分だけカットするプラグイン（無音カットツール）です。',
    tools: 'Claude Code / HTML・CSS・JavaScript・ExtendScript・PowerShell・Python', // 2つのプラグインの中身で確認（PowerShell＝エフェクトパレット、Python＝無音カット）
    images: ['app/premiere-plugins-v2.png'], // 背景色・名前入り（元の版は premiere-plugins.png）
  },
];
