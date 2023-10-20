import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/bot.mp3';
  const chat = global.db.data.chats[m.chat];

  if (/^bot$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    await m.reply(`*𝙷𝙾𝙻𝙰, ¿𝙲𝙾𝙼𝙾 𝚃𝙴 𝙿𝚄𝙴𝙳𝙾 𝙰𝚈𝚄𝙳𝙰𝚁?*`);
    conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
  }
  return !0;
};
export default handler;
