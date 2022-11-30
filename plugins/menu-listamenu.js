let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
 
const sections = [  
{
title: `Sapito_Bot🐸 Menu`,
rows: [
       {title: "/info🔞", description: "para vez el cuentos grupos esta el bot", rowId: `${usedPrefix}grouplist`},
        {title: "/creador🐒", description: "para mostra el numeor del creador", rowId: `${usedPrefix}owner`},
        {title: "😈menu completo😈", description: "para vez la lista del menu completo", rowId: `${usedPrefix}menucompleto`},
      {title: "/hidetag😔", description: "Para mencionar a todos con un texto", rowId: `${usedPrefix}hidetag`},
      {title: "/tagall️😊", description: "Para mencionar a todos en una lista", rowId: `${usedPrefix}tagall`},
      {title: "/del🦧", description: "Para eliminar un mensaje del bot", rowId: `${usedPrefix}del`},
      {title: "/audios♻️", description: "para los audios del bot", rowId: `${usedPrefix}menu2`},
       {title: "/dado👍", description: "para lanzar un dado", rowId: `${usedPrefix}dado`},
      {title: "/mates🐴", description: "para realiza cálculos matematicos y ganas xp", rowId: `${usedPrefix}math`},
      {title: "/ppt🤨", description: "para jugar piedras, papel y tijeras", rowId: `${usedPrefix}ppt`},
      {title: "/slot🥵", description: "para apostar y ganar xp", rowId: `${usedPrefix}slot`},
      {title: "/ib🤩", description: "para vez el top", rowId: `${usedPrefix}ib`},
      {title: "/level👋", description: "para subir del nivel", rowId: `${usedPrefix}levelup`},
      {title: "/buy👈", description: "para comprar mas Diamante", rowId: `${usedPrefix}buy`},
      {title: "/reg💀", description: "para registrarse el bot", rowId: `${usedPrefix}reg`},
      {title: "/unreg👻", description: "para borra tu registros en el bot", rowId: `${usedPrefix}unreg`},
      {title: "/attp🤪", description: "para crear stickers", rowId: `${usedPrefix}attp`},
       {title: "/s😅", description: "para convertir una imagen al sticker", rowId: `${usedPrefix}s`},
        {title: "/robar🥰", description: "para cambia el nombre del stickers", rowId: `${usedPrefix}wm`},
         {title: "/imagen🤩", description: "para buscar una imagen del Google", rowId: `${usedPrefix}imagen`},
          {title: "/pinterest🤩", description: "para biscar una imagen del pinterest", rowId: `${usedPrefix}pinterest`},
           {title: "/add🥳", description: "para añadir alguien al grupo", rowId: `${usedPrefix}add`},
            {title: "/kick😘", description: "para eliminar al alguien del grupo", rowId: `${usedPrefix}kick`},
             {title: "/enable😋", description: "para activa/desactiva algunas opciones", rowId: `${usedPrefix}enable`},
              {title: "/attp😐", description: "para crear stickers", rowId: `${usedPrefix}attp`},
              {title: "/pack😒", description: "para que el bot pase pack", rowId: `${usedPrefix}pack`},
              {title: "/google🙄", description: "para buscar algo del google", rowId: `${usedPrefix}google`},
              {title: "/play😱", description: "descarga musica/video", rowId: `${usedPrefix}play`},
              {title: "/tiktok🍑", description: "para descarga un video del.tiktok", rowId: `${usedPrefix}tiktok`},
              {title: "/mediafire🦽", description: "para descarga algun archivo del mediafire", rowId: `${usedPrefix}mediafire`},
              {title: "/link🛑", description: "para manda el link del grupo", rowId: `${usedPrefix}link`},
              {title: "/tts🚿", description: "para convertir un texto el audio", rowId: `${usedPrefix}tts`},
              {title: "/piropo🧽", description: "piropo para tu amor", rowId: `${usedPrefix}piropo`},
              {title: "/pack🛌", description: "para que bot mande pack", rowId: `${usedPrefix}pack`},
              {title: "/waifu🤺", description: "para que bot mande una waifu", rowId: `${usedPrefix}waifu`},
              {title: "/meme🥰", description: "el bot manda unos memes", rowId: `${usedPrefix}meme`},
              {title: "/daily😜", description: "para recibir una recompensa", rowId: `${usedPrefix}daily`},
              {title: "/work😇", description: "para trabaja y ganar xp", rowId: `${usedPrefix}work`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `╭─「 Sapito_Bot🐸 」
║❥Hola, ${name}! Espero que tengas un lindo día o noche!!
║❥Creador del Bot: wa.me/595983186566
║ 
╰────
*Sapitobot*`, footer: ``, pp,
title: null,
buttonText: "menu", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menú|menusimple|memulista|memúlista|helplisya|info|comandos|menu|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler
