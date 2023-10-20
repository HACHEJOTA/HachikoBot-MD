const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*✅ 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙰𝙼𝙴𝙽𝚃𝙴*');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^setdesk|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
