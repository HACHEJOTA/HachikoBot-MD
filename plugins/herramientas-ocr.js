import fetch from 'node-fetch';
import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (/image/.test(mime)) {
    const url = await webp2png(await q.download());
    const res = await fetch(API('https://api.ocr.space', '/parse/imageurl', {apikey: '8e65f273cd88957', url}));
    if (res.status !== 200) throw res.statusText;
    const json = await res.json();
    m.reply(json?.ParsedResults?.[0]?.ParsedText);
  } else throw '*[❗]  𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾, 𝙽𝙾 𝙾𝙻𝚅𝙸𝙳𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽.*';
};
handler.command = /^ocr|totexto$/i;
export default handler;
