const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_45_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE2U0VSWGlITjBsUUo5OVpKOUpxUXU2aVkxMk15bW5VMmt6ZTdDUUtkbUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzA1OTgxODU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQTEzODYwNEU2RkRBQjJFOTVBMjg0ODk2OUY5NUIxQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwNDY2OTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MDU5ODE4NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlGN0Q2NDU1MEFFRUIxMDVGRTA5MzUzNDVCQTY3QTUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDA0NjY5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYVDdpek1XQlFhQ0phaFdQMzYxTnVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFlOTE4N2E4LTk4MmMtNGU3Ny1hYWI1LWU4NmY4MWJkMDA3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxMzcsXG4gICAgICAxNjAsXG4gICAgICAxMTMsXG4gICAgICAxOTQsXG4gICAgICAxNTIsXG4gICAgICAxMTksXG4gICAgICAxNTYsXG4gICAgICAyMzEsXG4gICAgICAxMzIsXG4gICAgICA1MCxcbiAgICAgIDQ3LFxuICAgICAgMjEsXG4gICAgICAxMjUsXG4gICAgICAxMzIsXG4gICAgICA4MSxcbiAgICAgIDE0MCxcbiAgICAgIDEyMixcbiAgICAgIDIxMixcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAxNzcsXG4gICAgICAxNzAsXG4gICAgICAyNTAsXG4gICAgICAxMjAsXG4gICAgICA1OSxcbiAgICAgIDE2NSxcbiAgICAgIDEwOCxcbiAgICAgIDY2LFxuICAgICAgNjYsXG4gICAgICAxNTgsXG4gICAgICAzMSxcbiAgICAgIDEyOSxcbiAgICAgIDEwNSxcbiAgICAgIDIwOCxcbiAgICAgIDIyNyxcbiAgICAgIDE1OCxcbiAgICAgIDExMSxcbiAgICAgIDEwLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQllUTks3Q0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcwNTk4MTg1OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQzODYzNjEwODU5OTc6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM1N4WWdCRU9Pb2w3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIit4T2hHc0NvNFNXb1E2eVliNktaaUMzQkNtL0NtZWcwRDBJNkJwczJ3Rkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMDlQN1VaVUI3Wi8zQ0t1VVhpR3dNeThrSXV0NTVNaUhmUnAwSHNIaTN6VHJxN2ZoNmc1RVZsejFzYmlnU1V5MzhvNXFTMkpiaExzNmxYTkt3UVM0QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVUdMWVBCZmkwVGpTTXdSLzl2MW81dGwxZmNBbWhsRXkwU2JNaGNXWi9KbzdWRnJxUGJwOE45em5WTWsyenAxRlhDaTNMWVpremZ0VWl4S2o0c3ZQaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA1OTgxODU5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDQ2Njk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2ZzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWLzVBSXd5cnZ6eHc1S1pyejRTUmRUczFvcWovTUhhZktSSEVzem1YSFFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NjM1MzY5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDQ2Njk5ODU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
