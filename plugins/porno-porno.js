import fetch from "node-fetch";
let handler = async (m, { conn, args, usedPrefix, command }) => {

  let res = await fetch('https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51')
let json = await res.json()
conn.sendMessage(m.chat, { video: { url: json.result }, mimetype: "video/mp4", fileName: 'xd' + '.mp4'},{ quoted: m })
}
handler.tags = ["info"];
handler.command = handler.help = ["hjpajero", "hjporno"];
handler.premiun = true;