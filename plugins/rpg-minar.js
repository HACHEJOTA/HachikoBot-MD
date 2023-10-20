const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 1000);
  const pp = 'https://telegra.ph/file/ed38c5ca8c9e07d1f22ec.jpg';
  const time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*[ ⏰ ] 𝙴𝚂𝙿𝙴𝚁𝙰 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙼𝙸𝙽𝙰𝚁*`;
  const text = `_𝙈𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙢𝙞𝙣𝙖𝙗𝙖𝙨 𝙤𝙗𝙩𝙪𝙫𝙞𝙨𝙩𝙚 ${hasil} 𝙭𝙥_`;
  await conn.reply(m.chat,text,m,{ contextInfo:{ externalAdReply: {title: '𝙶𝙴𝙽𝙸𝙰𝙻 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰 𝙼𝙸𝙽𝙰𝙽𝙳𝙾', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: imagen7 }}});
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minar'];
handler.tags = ['xp'];
handler.command = ['minar', 'miming', 'mine'];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}
