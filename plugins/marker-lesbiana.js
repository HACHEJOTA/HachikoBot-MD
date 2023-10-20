 const handler = async (m, {conn}) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lesbian', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*𝙼𝙸𝚁𝙴𝙽 𝙰 𝙴𝚂𝚃𝙰 𝙻𝙴𝚂𝙱𝙸𝙰𝙽𝙰*', m);
  //await conn.sendMessage(m.chat, {audio: {url: vn}, fileName: `error.mp3`, mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['gay'];
handler.tags = ['maker'];
handler.command = /^(lesbian|lesbia)$/i;
export default handler;
