import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20) return m.reply('[❗]\n\n𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙦𝙪𝙚 𝙘𝙖𝙧𝙜𝙖 𝙚𝙨 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙤 𝙜𝙧𝙖𝙣𝙙𝙚, 𝙡𝙚 𝙨𝙪𝙜𝙚𝙧𝙞𝙢𝙤𝙨 𝙦𝙪𝙚 𝙘𝙤𝙧𝙩𝙚 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙜𝙧𝙖𝙣𝙙𝙚 𝙖 𝙪𝙣 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙢𝙨 𝙥𝙚𝙦𝙪𝙚𝙤, 10-20 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙇𝙤𝙨 𝙙𝙖𝙩𝙤𝙨 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤 𝙨𝙤𝙣 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚𝙨 𝙥𝙖𝙧𝙖 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙘𝙖𝙧.');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
♫ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰 ♫︎

• 📌 𝚃𝙸𝚃𝚄𝙻𝙾: ${title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃𝙰: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'No encontrado'}
• 🌐 𝙶𝙴𝙽𝙴𝚁𝙾: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}
• 📆 𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾: ${release_date || 'No encontrado'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*';
};
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
export default handler;
