 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://xcelsama:excelsama@xcelsama.ol54706.mongodb.net/?retryWrites=true&w=majority&appName=xcelsama";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241","233268374753";
global.sudo = process.env.SUDO || "2347045035241","233268374753";
global.owner = process.env.OWNER_NUMBER || "2347045035241","233268374753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJYd2xIZDAwWG5wQU9zMUI4VmRaVzdZMU1OeHZFMHVOUExBSHpJWEZWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZlQ0NtT1k0TTBXQkQwRzFMd1NHN2wvdHMxSzk1b1lQak45V0pDQ3gxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRUhPbVdjb0xNRXkrdUdlMXJ3eGFiOHhqeXg0eTRpaEU4Z2pya0NBSUhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZk9qMnNqV2ZIU2hzRXRIbjk5L09aQll6eVJIa1hkeWpEcSt2YmtwQzA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMbklWVzZqWkJBTXAxNUtWU0krVmZOeHE4NnhHWmhyK1pWeWxEbzJ1MDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9zUHdlK0Z4M1NqNFNqdTR3bmlrVTNCT0xUbWw2RWlYM1BBUDd1c1pGUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lBcDVOSnlXT0Vya1FKOE11U3QvWlF2dmJRM0k3OVo1dk8rSjZZQ0FsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGRkZ21FcFVlc0YrTUZoVkdjWm05TFdFMGcrdlFsQzgzVVhSa0NFVS9GND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpaMFhTYmNBNi9CWC9lbmtNMkdpUkF6M3JNUzlWYWhJZHA1dGNLZWt6QzFmWFg2VkNia0U4cmU5VXFYZCtmN1JaY29iRlAvcDBmTHp6dmw3MzZUQkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJldEd0VW5xcDZueEU2VmJiNER5SEt6eVV0MkFqVEVwS09oQTFVcGgzamkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoZHl0SGplV1R6cUlzMzlmTW5MT2h3IiwicGhvbmVJZCI6IjMxNmJiZTc1LTMwODMtNDdiOC1iMmIxLWRjYWQ4MTcxM2RiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjcTEzbE16aWk0ZDBJODNRYjZDaEJad0R1L0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzZHOVdKQmx3RVhyVVBwcUpSem9pSkl0anNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJFS0ZGM01KIiwibWUiOnsiaWQiOiIyMzQ3MDg5ODE2ODY2Ojk0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbUxqWVVHRU9lUWlzQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzeE9ERXc0VlFBbzFKai9vODk5ZU0yQldIMHB0bDdXMHlybElISm5jUlVjPSIsImFjY291bnRTaWduYXR1cmUiOiJ5LzVQOXVNTzhFL2MzSE50QXg1WVFZamJuNEtLVUc4NlBPOHQ3elorWC9iMTRrYXZ5ZTdYcElNOW5tTDBEVUxBSkVCSThpbkRKMk5DNVVZckxEZldDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSHpUSVdjRnA2RG01UzdMWDN1ZlpIVmZEQWVVUytCVzZ4cnlHOEZIS2JRL2J0RGVNSDYxMVVPSXVJckdhVXZrTERadTRIcUxoYW55b0JzVDdDem0wQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDg5ODE2ODY2Ojk0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ4VGd4TU9GVUFLTlNZLzZQUGZYak5nVmg5S2JaZTF0TXE1U0J5WjNFVkgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQ5OTY0NjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGNkIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`xᴄᴇʟ_ʙᴏᴛ ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "xᴄᴇʟ_ʙᴏᴛ",
  botname: process.env.BOT_NAME || "Xcel_bot",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
