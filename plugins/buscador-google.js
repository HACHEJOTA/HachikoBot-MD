import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `*⚠️ 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙻𝙾 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙱𝚄𝚂𝙲𝙰𝚁*\n\n❕ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*${usedPrefix + command}* Hachiko`, m)
let pp = './storage/menus/Menu1.jpg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*🔍 ${title}*\n\n💻 ${url}\n\n📡 _${description}_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
}).join('\n\n')


try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.register = true

export default handler
  
