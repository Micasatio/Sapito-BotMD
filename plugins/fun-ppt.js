let handler = async (m, { text, usedPrefix }) => {
let salah = `*_Hola ππ», bienvenido al juego de piedra, papel o tijera_*\n\n*_Opciones Disponibles:_*\n*_piedra, papel o tijera_*\n\n*_${usedPrefix}ppt tijera_*\n\n*_Use las opciones en minusculas como se indica en el ejemplo, no use los _ ni los * para que el Bot lo detecte correctamente_*\n\n_Β©Sapito - Bot_`
if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
m.reply(`*_π° Empate!_*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].money += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else {
throw salah
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler
