import avatar from "../assets/avatar.jpg";
import instagram from "../assets/icons/instagram.png";
import telegram from "../assets/icons/telegram.png";
import facebook from "../assets/icons/facebook.png";
import whatsapp from "../assets/icons/whatsapp.png";
import background from "../assets/background.jpg";

const telegramUrl = "https://t.me/justony_eu";
const instagramUrl = "https://www.instagram.com/justony_eu";
const whatsappUrl = "tel:+37122034990";
const facebookUrl = "https://www.facebook.com/tolqin.rahimov.92";
const telegramChannel = "https://t.me/tonyschanneltv";

const name = "Tulkin Rakhimov";

const socialMediaData = [
  { title: "Instagram", url: instagramUrl, icon: instagram },
  { title: "Facebook", url: facebookUrl, icon: facebook },
  { title: "WhatsApp", url: whatsappUrl, icon: whatsapp },
  { title: "Telegram", url: telegramUrl, icon: telegram },
  { title: "Telegram channel", url: telegramChannel, icon: telegram },
];

const followMeMsg = "Welcome! You can follow me here 👇";

export {
  background,
  avatar,
  instagram,
  telegram,
  facebook,
  whatsapp,
  telegramUrl,
  whatsappUrl,
  instagramUrl,
  facebookUrl,
  name,
  socialMediaData,
  followMeMsg,
};
