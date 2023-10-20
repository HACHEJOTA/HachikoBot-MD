import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `
┌───⊷ *ᑎIᐯᗴᒪ*
▢ 𝙽𝙾𝙼𝙱𝚁𝙴 : *${name}*
▢ 𝙽𝙸𝚅𝙴𝙻 : *${user.level}*
▢ 𝚇𝙿 : *${user.exp - min}/${xp}*
└──────────────

Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`;
    const str = `
┌─⊷ *ᒪᗴᐯᗴᒪ ᑌᑭ*
├📉 𝙽𝙸𝚅𝙴𝙻 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁 : *${before}*
├📈 𝙽𝙸𝚅𝙴𝙻 𝙰𝙲𝚃𝚄𝙰𝙻: *${user.level}*
└──────────────

_𝘾𝙪𝙖𝙣𝙙𝙤 𝙢𝙖𝙨 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙩𝙪𝙚𝙨 𝙘𝙤𝙣 𝙃𝙖𝙘𝙝𝙞𝙠𝙤 𝙢𝙖𝙮𝙤𝙧 𝙨𝙚𝙧𝙖 𝙩𝙪 𝙣𝙞𝙫𝙚𝙡_
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

export default handler;
