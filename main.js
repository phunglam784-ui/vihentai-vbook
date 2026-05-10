const BASE_URL = 'const BASE_URL = 'https://vihentai.xxx';

async function search(keyword, page) {
  const res = await fetch(`${BASE_URL}/search?query=${keyword}`);
  const html = await res.text();

  return [];
}

async function detail(url) {
  const res = await fetch(url);
  const html = await res.text();

  return {};
}

async function chapters(url) {
  return [];
}

async function images(url) {
  return [];
}';

async function search(keyword, page) {
  const res = await fetch(`${BASE_URL}/search?query=${keyword}`);
  const html = await res.text();

  return [];
}

async function detail(url) {
  const res = await fetch(url);
  const html = await res.text();

  return {};
}

async function chapters(url) {
  return [];
}

async function images(url) {
  return [];
}
