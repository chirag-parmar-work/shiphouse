const currentYear = new Date().getFullYear();
const data = {
    sitename: "ShipHouse",
    sitetagline: "Revolutionizing Shipping Management!",
    sitelogo: "",
    title: "Coming Soon!",
    description: "We’re hard at work 👨‍💻 creating a game-changing shipping management platform to streamline your logistics. Stay tuned. something great is coming soon! 🚀",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://github.com/baikaresandip">Baikare Sandip</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/sandeep.baikare/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/BaikareSandeep",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/sandip-baikare/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;

