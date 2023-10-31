let handler = (m) => m;
handler.all = async function (m) {
  

  if (/^HacheJota|Hj|hj|hachejota|Hachejota|HACHEJOTA$/i.test(m.text)) {
    var hj = `𝙲𝚁𝙴𝙰𝙳𝙾𝚁 @${global.suittag} 𝚄𝙽 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙰 𝙸𝙽𝚅𝙾𝙲𝙰𝙳𝙾`;

    m.reply(hj, m.chat, { mentions: conn.parseMention(fliveLoc)});
    //sem prefixo
    /*conn.reply(
      m.chat,
      `𝙲𝚁𝙴𝙰𝙳𝙾𝚁 @${global.suittag} 𝚄𝙽 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙰 𝙸𝙽𝚅𝙾𝙲𝙰𝙳𝙾`,fliveLoc,
      m
    );*/ //wm, null, [['Menu', '#menu']], m) botones :V
  }
  return !0;
};
export default handler;
