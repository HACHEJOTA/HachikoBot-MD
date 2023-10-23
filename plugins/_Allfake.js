import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
//******* 🅒︎🅡︎🅔︎🅓︎🅘︎🅣︎🅞︎🅢︎ *****/
global.hachejota = '𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰';
global.hb = 'HΔCHIҜΩβΩT-MD';
global.wm = '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳';
global.titulowm2 = `乂  𝐇 𝐀 𝐂 𝐇 𝐈 𝐊 𝐎 - 𝐁 𝐎 𝐓 - 𝐌 𝐃 乂`;
global.gp1 = 'https://chat.whatsapp.com/LRQdtS7nKt89NBUPWJDjzh';
global.md = 'https://www.instagram.com/hachejota16';
global.suittag = ['5214437863111']
//******=****-*-***=*==================*
global.fgclink = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6285736178354-1625305606@g.us", inviteCode: null, groupName:`${hb}`, caption: hb, jpegThumbnail: imagen4}}};

global.fdocs = { key: { participant : "0@s.whatsapp.net" }, message: { documentMessage: { title: wm, jpegThumbnail: imagen4}}};

global.ftoko = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen4}, title: wm,  description: hachejota, currencyCode: "USD", priceAmount1000: "99999999", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}};

global.fimg = { key: { participant: "0@s.whatsapp.net" }, message: { imageMessage: { url: md, mimetype: "image/jpeg", fileLength: fsizedoc, height: 306, width: 366, jpegThumbnail: imagen4}}};

global.ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: {  "extendedTextMessage": { "text":wm, "title": wm, 'jpegThumbnail': imagen4}}};
               
global.fliveLoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"By: " + global.hb ,"h": `${wm}`, 'jpegThumbnail': fs.imagen4}}};
               
global.fliveLoc2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": "hachejota","h": wm, 'jpegThumbnail': imagen4}}};

global.fpoll = {key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { pollCreationMessage: { name: wm, selectableOptionsCount: 1}}};

global.fdocument = {key: { participant: "0@s.whatsapp.net"}, message: {documentMessage: {title: `${wm}\n   ${hachejota}`, jpegThumbnail: imagen4}}};

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"};	

global.faketick = { key: { participant: "0@s.whatsapp.net", "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": imagen4, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" };

global.fakeimg = { key: {participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { imageMessage: { title: `*${hachejota}*`, "h": `Hmm`, 'seconds': '99999', 'imagePlayback': 'true', 'caption': `${hb}\n          ${hachejota}`, jpegThumbnail: imagen4 }}};

global.fakemsg = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { extendedTextMessage: { text: `${hb}\n${hachejota}`, title: `${hb}`, jpegThumbnail: imagen4}}};

global.flocation = {key : {participant : "0@s.whatsapp.net" },message: {locationMessage: {name: `${wm}\n   ${hachejota}`,jpegThumbnail: imagen4}}};
	
global.estiloaudio = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "15075705205-1625305606@g.us" } : {}) }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "99569", ptt: "true" }}};	

global.fvideo = {key: { fromMe: false,participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${wm}`, "h": `Hmm`, 'seconds': '2022', 'caption': `${wm}`, 'jpegThumbnail': imagen4}}};

global.fgclink = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6288213840883-1616169743@g.us", inviteCode: "m", groupName: "hachejotaJs", caption: `${wm}\n      ${hachejota}`, jpegThumbnail: imagen4}}};

global.fproducto2 = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen4}, title: `${wm}`, retailerId: `${hb}`, productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}};	
	
global.fproducto = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { productMessage: { product: { productImage:{ "mimetype": "image/jpeg", jpegThumbnail: imagen4 }, title: `${wm}`, description:`${hb}`, currencyCode: "USD", priceAmount1000: "200000000", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}};

global.fakevoimg = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { imageMessage: { mimetype: 'image/jpeg', caption: wm, jpegThumbnail: imagen4, viewOnce: true }}};

global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: wm, jpegThumbnail: imagen4, viewOnce: true }}};	

global.fpay = { key: { participant: "0@s.whatsapp.net", remoteJid: "6287834993722-1621306547@g.us", fromMe: false, id: "3B64558B07848BD81108C1D14712018E" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: "100000", requestFrom: "50499698072@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: wm }}, expiryTimestamp: "0", amount: { value: "100000", offset: 1000, currencyCode: "USD" }, background: { id: "BBB9307B17C17F928E57A7435E45033E", fileLength: "94896", width: 64, height: 64, mimetype: "image/webp", placeholderArgb: 4288282521, textArgb: 4278190080, subtextArgb: 4288282521}}}};
	
global.estilo = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : +2022, status: 1, surface : 1, message: `${wm}\n${hachejota}`, orderTitle: 'Bang', thumbnail: imagen4, sellerJid: '0@s.whatsapp.net'}}};

global.twa = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"}, message: { groupInviteMessage: { groupJid: "51995386439-1616969743@g.us", inviteCode: "m", groupName: "P", caption: wm, jpegThumbnail: imagen4}}};

global.fakemek = {key: {participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"}, message: {groupInviteMessage: {groupJid: "51995386439-1616969743@g.us", inviteCode: "m",groupName: "P", caption: 'CuriosityBot-MD', jpegThumbnail: null}}};

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche 🌙'; break; case 1: hour = 'una linda noche 💤'; break; case 2: hour = 'una linda noche 🦉'; break; case 3: hour = 'una linda mañana ✨'; break; case 4: hour = 'una linda mañana 💫'; break; case 5: hour = 'una linda mañana 🌅'; break; case 6: hour = 'una linda mañana 🌄'; break; case 7: hour = 'una linda mañana 🌅'; break; case 8: hour = 'una linda mañana 💫'; break; case 9: hour = 'una linda mañana ✨'; break; case 10: hour = 'un lindo dia 🌞'; break; case 11: hour = 'un lindo dia 🌨'; break; case 12: hour = 'un lindo dia ❄'; break; case 13: hour = 'un lindo dia 🌤'; break; case 14: hour = 'una linda tarde 🌇'; break; case 15: hour = 'una linda tarde 🏜️'; break; case 16: hour = 'una linda tarde ☀️'; break; case 17: hour = 'una linda tarde 🌆'; break; case 18: hour = 'una linda noche 🌙'; break; case 19: hour = 'una linda noche 🌃'; break; case 20: hour = 'una linda noche 🌌'; break; case 21: hour = 'una linda noche 🌃'; break; case 22: hour = 'una linda noche 🌙'; break; case 23: hour = 'una linda noche 🌃'; break;}
global.saludo = "Espero que tengas " + hour;

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

//* ************************
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
