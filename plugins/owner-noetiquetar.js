let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*[ ⚠ ️] 𝙽𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚂𝙸 𝙴𝚂 𝙰𝙻𝙶𝙾 𝚄𝚁𝙶𝙴𝙽𝚃𝙴 𝙴𝚂𝙲𝚁𝙸𝙱𝙴𝙻𝙴 𝙰 𝚂𝚄 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾*` ,m, { contextInfo:{ externalAdReply: {title: '𝐍𝐎-𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀𝐑', body: 'ᴇsᴄʀɪʙɪʀʟᴇ ᴀᴘʟᴀsᴛᴀɴᴛᴏ ᴀǫᴜɪ', sourceUrl: 'https://wa.me/524437863111', thumbnail: imagen7}}})
}
handler.customPrefix = /@524437863111/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md, thumbnail: imagen7}}})
