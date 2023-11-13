import { totalmem, freemem } from 'os'
import os from 'os'
import util from 'util'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

var handler = async (m, { conn }) => {

let timestamp = speed()
let latensi = speed() - timestamp

let _muptime = process.uptime() * 1000
let muptime = clockString(_muptime)

let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])


let texto = `*🚀 𝚅 𝙴 𝙻 𝙾 𝙲 𝙸 𝙳 𝙰 𝙳*
❀ ${latensi.toFixed(4)}

*⌛ 𝙰 𝙲 𝚃 𝙸 𝚅 𝙸 𝙳 𝙰 𝙳*
❀ ${muptime}

*📱 𝙲 𝙷 𝙰 𝚃 𝚂*
❀ ${chats.length} 𝗖𝗵𝗮𝘁𝘀 𝗽𝗿𝗶𝘃𝗮𝗱𝗼𝘀
❀ ${groups.length} 𝗚𝗿𝘂𝗽𝗼𝘀

*🖥️ 𝚂 𝙴 𝚁 𝚅 𝙸 𝙳 𝙾 𝚁*
 ❀ *𝗥𝗔𝗠:* ${format(totalmem() - freemem())} / ${format(totalmem())}`.trim()

conn.sendMessage(m.chat, { text: texto, contextInfo: { externalAdReply: { title: '', body: '𝗛𝗔𝗖𝗛𝗜𝗞𝗢𝗕𝗢𝗧-𝗠𝗗', thumbnailUrl: 'https://telegra.ph/file/6cbf9148b572711e9b000.jpg', sourceUrl: md, mediaType: 1, renderLargerThumbnail: true }}})

}
handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'speed']


export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
