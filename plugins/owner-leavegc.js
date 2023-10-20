const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*🐶 𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃 𝙰𝙱𝙰𝙽𝙳𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 👋*');
  await conn.groupLeave(id);
};
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
