// 一覧ページ（index.html）と作品ページ（work.html）の動き
const IMG_BASE = ''; // 画像は同じフォルダの ad / video / app にある


// ---------- 一覧ページ ----------
// 画像の右下に付ける小さい印：動画があれば「▶ 動画」、画像が何枚もあれば「デザイン 3点」など
function mediaTag(w) {
  if (w.youtube) return '<span class="media-tag">▶ 動画</span>';
  if (w.images.length > 1) return `<span class="media-tag design">デザイン ${w.images.length}点</span>`;
  return '';
}

// 掲載画像：loop（音なしでくり返す短い動画）があれば動画、なければ画像を出す
// 動画のあいだも images[0] を「読みこみ中の絵」に使う
function mediaEl(w, extra = '') {
  if (w.loop) {
    extra = extra.replace('loading="lazy"', ''); // 動画に付けると読みこまれず止まったままになるので外す
    return `<video src="${IMG_BASE + w.loop}" poster="${IMG_BASE + w.images[0]}" muted autoplay loop playsinline preload="auto" aria-label="${w.title}" ${extra}></video>`;
  }
  return `<img src="${IMG_BASE + w.images[0]}" alt="${w.title}" ${extra}>`;
}

function renderList() {
  // ヘッダーの背景に、作品のサムネイルを2周分並べる
  const bg = document.getElementById('hero-bg');
  if (bg) {
    const imgs = WORKS.map(w => IMG_BASE + w.images[0]);
    bg.innerHTML = imgs.concat(imgs).map(s => `<img src="${s}" alt="">`).join('');
  }
  const root = document.getElementById('grid');
  // ジャンルごとに「見出し＋仕切り線＋カードの並び」を作る
  root.innerHTML = Object.entries(CATEGORIES).map(([cat, name]) => {
    // featured（まず見てほしい作品）を先頭に並べる
    const items = WORKS.filter(w => w.cat === cat).sort((a, b) => !!b.featured - !!a.featured);
    return `
    <section class="section" data-cat="${cat}">
      <h2 class="section-head">${name}<span class="count">${items.length}件</span></h2>
      <p class="section-tools"><span>使用ソフト</span>${CAT_TOOLS[cat]}</p>
      <div class="grid">${items.map(w => `
        <a class="card${w.featured ? ' featured' : ''}" href="${'work.html?id=' + w.id}">
          <div class="thumb">${mediaEl(w, 'loading="lazy"')}${mediaTag(w)}</div>
          <div class="body">
            ${w.featured ? '<span class="badge">まずはこちら</span>' : ''}
            <h3>${w.title}</h3>
            <p>${w.desc}</p>
          </div>
        </a>`).join('')}
      </div>
    </section>`;
  }).join('');

  const tabs = document.querySelectorAll('.tab');
  function apply(f) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.filter === f));
    root.querySelectorAll('.section').forEach(s => s.classList.toggle('hidden', f !== 'all' && s.dataset.cat !== f));
  }
  tabs.forEach(t => t.addEventListener('click', () => {
    apply(t.dataset.filter);
    history.replaceState(null, '', '#' + t.dataset.filter);
  }));
  // 作品ページから「一覧に戻る」で来たとき、同じタブを開く
  const h = location.hash.slice(1);
  apply(CATEGORIES[h] || h === 'all' ? h : 'all');
}

// ---------- 作品ページ ----------
// YouTubeの動画をページの中で再生する枠を作る（埋め込み禁止の動画はボタンにする）
function videoBlock(yt) {
  if (!yt) return '';
  const watch = yt.list ? 'https://www.youtube.com/playlist?list=' + yt.list
                        : 'https://www.youtube.com/watch?v=' + yt.id;
  if (yt.embed === false) {
    return `<p class="video-link"><a class="cta" href="${watch}" target="_blank" rel="noopener">YouTubeで見る →</a></p>`;
  }
  const src = yt.list ? 'https://www.youtube-nocookie.com/embed/videoseries?list=' + yt.list
                      : 'https://www.youtube-nocookie.com/embed/' + yt.id;
  return `<div class="video"><iframe src="${src}" title="動画" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
}

function renderWork() {
  const id = new URLSearchParams(location.search).get('id');
  const i = WORKS.findIndex(w => w.id === id);
  const root = document.getElementById('work');
  if (i < 0) {
    root.innerHTML = `<p>作品が見つかりませんでした。</p><a class="back" href="${'index.html'}">← 一覧に戻る</a>`;
    return;
  }
  const w = WORKS[i];
  document.title = w.title + ' | 石 博斗';

  // 同じジャンルの前後の作品
  const same = WORKS.filter(x => x.cat === w.cat);
  const j = same.indexOf(w);
  const prev = same[j - 1], next = same[j + 1];

  root.innerHTML = `
    <a class="back" href="${'index.html#' + w.cat}">← 一覧に戻る</a>
    <div class="work-head">
      <span class="label">${CATEGORIES[w.cat]}</span>
      <h1>${w.title}</h1>
    </div>
    ${videoBlock(w.youtube)}
    <figure class="hero-img">${mediaEl(w, 'id="main-img"')}</figure>
    ${w.images.length > 1 ? `<div class="gallery">${w.images.map((src, k) =>
      `<button class="${k === 0 ? 'on' : ''}" data-src="${IMG_BASE + src}"><img src="${IMG_BASE + src}" alt=""></button>`).join('')}</div>` : ''}
    <dl class="info">
      <dt>説明</dt><dd>${w.desc}</dd>
      ${w.goal ? `<dt>目的</dt><dd>${w.goal}</dd>` : ''}
      ${w.points ? `<dt>工夫したところ</dt><dd><ul class="points">${w.points.map(p => `<li>${p}</li>`).join('')}</ul></dd>` : ''}
      ${w.result ? `<dt>結果</dt><dd>${w.result}</dd>` : ''}
      <dt>使ったソフト</dt><dd>${w.tools || CAT_TOOLS[w.cat]}</dd>
      <dt>ジャンル</dt><dd>${CATEGORIES[w.cat]}</dd>
    </dl>
    ${w.link ? `<a class="cta" href="${w.link.url}" target="_blank" rel="noopener">${w.link.label} →</a>` : ''}
    <nav class="pager">
      ${prev ? `<a href="${'work.html?id=' + prev.id}"><small>← 前の作品</small>${prev.title}</a>` : '<span></span>'}
      ${next ? `<a class="next" href="${'work.html?id=' + next.id}"><small>次の作品 →</small>${next.title}</a>` : '<span></span>'}
    </nav>`;

  // ギャラリーの小さい画像を押すと、大きい画像が切り替わる
  root.querySelectorAll('.gallery button').forEach(b => b.addEventListener('click', () => {
    document.getElementById('main-img').src = b.dataset.src;
    root.querySelectorAll('.gallery button').forEach(x => x.classList.toggle('on', x === b));
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('grid')) renderList();
  if (document.getElementById('work')) renderWork();
});
