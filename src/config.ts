import type { Site, SocialObjects } from "./type";

import config from "config.json";

const author = config.config[0].options[0].value;
const desc = config.config[1].options[0].value;
const title = config.config[2].options[0].value;
const herf = "https://www.4everland.org/";

export const SITE: Site = {
  website: "https://www.4everland.org/",
  author: author ? author : "4everland",
  desc: desc
    ? desc
    : "4EVERLAND is a Web 3.0 cloud computing platform that integrates storage, computing, and network as its core capabilities. It aims to help users make a smooth leap from Web 2.0 to Web 3.0 and become the infrastructure for millions of Web 3.0 developers and applications.",
  title: title ? title : "CV",
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: herf,
    linkTitle: ` ${SITE.title} on Github`,
  },
  {
    name: "Facebook",
    href: herf,
    linkTitle: `${SITE.title} on Facebook`,
  },
  {
    name: "Instagram",
    href: herf,
    linkTitle: `${SITE.title} on Instagram`,
  },
  {
    name: "LinkedIn",
    href: herf,
    linkTitle: `${SITE.title} on LinkedIn`,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
  },
  {
    name: "Twitter",
    href: herf,
    linkTitle: `${SITE.title} on Twitter`,
  },
  {
    name: "Twitch",
    href: herf,
    linkTitle: `${SITE.title} on Twitch`,
  },
  {
    name: "YouTube",
    href: herf,
    linkTitle: `${SITE.title} on YouTube`,
  },
  {
    name: "WhatsApp",
    href: herf,
    linkTitle: `${SITE.title} on WhatsApp`,
  },
  {
    name: "Snapchat",
    href: herf,
    linkTitle: `${SITE.title} on Snapchat`,
  },
  {
    name: "Pinterest",
    href: herf,
    linkTitle: `${SITE.title} on Pinterest`,
  },
  {
    name: "TikTok",
    href: herf,
    linkTitle: `${SITE.title} on TikTok`,
  },
  {
    name: "CodePen",
    href: herf,
    linkTitle: `${SITE.title} on CodePen`,
  },
  {
    name: "Discord",
    href: herf,
    linkTitle: `${SITE.title} on Discord`,
  },
  {
    name: "GitLab",
    href: herf,
    linkTitle: `${SITE.title} on GitLab`,
  },
  {
    name: "Reddit",
    href: herf,
    linkTitle: `${SITE.title} on Reddit`,
  },
  {
    name: "Skype",
    href: herf,
    linkTitle: `${SITE.title} on Skype`,
  },
  {
    name: "Steam",
    href: herf,
    linkTitle: `${SITE.title} on Steam`,
  },
  {
    name: "Telegram",
    href: herf,
    linkTitle: `${SITE.title} on Telegram`,
  },
  {
    name: "Mastodon",
    href: herf,
    linkTitle: `${SITE.title} on Mastodon`,
  },
];
