let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*π·π΄π!! π΄π» π°π½ππΈπ»πΈπ½πΊ π΄πππ° π°π²ππΈππΎ, πΏπ΄ππΎ π΄ππ΄π ππ½ π°π³πΌπΈπ½ π, ππ°π»ππ°π³πΎ/π°!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*γ ππππ πππππ γ*\n*AdiΓ³s Perra, ${await this.getName(m.sender)} Rompiste Las Reglas Del Grupo, SerΓ‘s Eliminad@...!!*${isBotAdmin ? '' : '\n\n*[βππππβ] El Bot No Es Admin, No Puede Eliminar Personas :v *'}`, author, ['π³π΄ππ°π²ππΈππ°π π°π½ππΈπ»πΈπ½πΊπ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[βππππβ] El Propietario Del Bot No Tiene Habilitado Las Restricciones (#ππππππ ππππππππ) π²πΎπ½ππ°π²ππ΄ π²πΎπ½ π΄π» πΏπ°ππ° πππ΄ π»πΎ π·π°π±πΈπ»πΈππ΄*')
}
return !0
}
