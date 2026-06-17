import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // 開発サーバーのURLを開く
  console.log("Navigating to dev server...");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Reactが完全にハイドレーションされ、DOMがレンダリングされるのを待つ
  await page.waitForSelector('header');
  
  console.log("Extracting HTML...");
  // レンダリングされたDOM全体のHTMLを取得
  let content = await page.content();
  
  // scriptタグ（ReactのJSやデバッグ用スクリプトなど）をすべて除去して、ピュアな静的HTMLにする
  // これによりUTAGE上でのJS衝突を防ぎ、読み込みを劇的に高速化します
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // 不要なManusのデバッグツールバーやインジェクション用タグを除去
  content = content.replace(/<div id="__manus__-collector"[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // 相対パスの画像URLやアセットURLを、公開されている絶対URLに書き換えます
  // これにより、UTAGEにコピペしても画像が壊れずに表示されます
  const publicDomain = "https://knowforce-6aq6kdvl.manus.space";
  content = content.replace(/\/manus-storage\//g, `${publicDomain}/manus-storage/`);
  
  // 出力ファイルパス
  const outputPath = '/home/ubuntu/knowledgeforce_lp_utage.html';
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Static HTML generated successfully at: ${outputPath}`);
  
  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
