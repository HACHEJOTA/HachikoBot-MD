import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '⚠️ *_Que quieres que busque en YouTube?_*';
  const results = await yts(text);
  const tes = results.all;
const img = await (await fetch(`${tes[0].thumbnail}`)).buffer();
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
 🏮 *_𝚃𝙸𝚃𝚄𝙻𝙾 :_* ${v.title}
 🔗 *_𝙻𝙸𝙽𝙺 :_* ${v.url}
 🕒 *_𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 :_* ${v.timestamp}
 📥 *_𝚂𝚄𝙱𝙸𝙳𝙾 :_* ${v.ago}
 👁 *_𝚅𝙸𝚂𝚃𝙰𝚂 :_* ${v.views}`;
    }                            
  }).filter((v) => v).join('\n\nꙬꙬꙬꙬꙬꙬꙬꙬꙬꙬ\n\n');

await conn.sendUrl(m.chat, teks, m, {
    externalAdReply: {
       mediaType: 1,
       renderLargerThumbnail: true,
       thumbnail: img,
       thumbnailUrl: img,
       title: wm,
    }})
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 

export default handler
