import logoVideoSrc from '../assets/videos/nav/26537-357886155_small.mp4';
import workVideoSrc from '../assets/videos/nav/21116-315137080_small.mp4';
import servicesVideoSrc from '../assets/videos/nav/107773-678526591_small.mp4';
import servicesVideoSrc1 from '../assets/videos/nav/nav-work.mp4';
import contactVideoSrc from '../assets/videos/nav/contact.mp4';
import logo from '../assets/imges/logo.webp'
const LogoContent={

    name: "logo",
    logSrc:logo,
    link: "",
    videoSrc: logoVideoSrc

}

const NavContent = {
  work: {
    name: "work",
    link: "",
    videoSrc: workVideoSrc
  },
  services: {
    name: "services",
    link: "",
    videoSrc: servicesVideoSrc
  },
  team: {
    name: "Team",
    link: "",
    videoSrc: servicesVideoSrc1
  },
  contact: {
    name: "contact",
    link: "",
    videoSrc: contactVideoSrc
  }
};
export { NavContent, LogoContent };