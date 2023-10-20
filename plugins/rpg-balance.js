const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
┌───⊷ *ᗷᗩᒪᗩᑎᑕᗴ* ⊶
▢ *𝙽𝙾𝙼𝙱𝚁𝙴:* ${name}
▢ *𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${global.db.data.users[who].limit}💎
└──────────────
*𝙽𝙾𝚃𝙰:* 
*𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎 𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜*
➪ *${usedPrefix}buy <cantidad>*
➪ *${usedPrefix}buyall*`);
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
