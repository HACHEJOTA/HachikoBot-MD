 const handler = async (m, {conn}) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/jail', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*⛓️ 𝙼𝙸𝚁𝙴𝙽 𝙰 𝙴𝚂𝚃𝙴 𝙿𝚁𝙴𝚂𝙾 ⛓️*', m);
  //await conn.sendMessage(m.chat, {audio: {url: vn}, fileName: `error.mp3`, mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['gay'];
handler.tags = ['maker'];
handler.command = /^(jail|carcel|preso)$/i;
export default handler;
