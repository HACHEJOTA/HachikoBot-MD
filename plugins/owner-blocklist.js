/* Creado por https://github.com/FG98F */

const handler = async (m, {conn}) => {
  await conn.fetchBlocklist().then(async (data) => {
    let txt = `*≡  𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾𝚂*\n\n*𝚃𝙾𝚃𝙰𝙻 :* ${data.length}\n\n┌─⊷\n`;
    for (const i of data) {
      txt += `➵❥︎︎︎︎@${i.split('@')[0]}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw 'No hay números bloqueados';
  });
};
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['blocklist', 'listblock'];
handler.rowner = true;
export default handler;
