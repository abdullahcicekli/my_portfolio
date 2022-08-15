import self from "../img/memoji.png"
import mock1 from "../img/mock1.png"
import memoji from "../img/memoji.png"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["#2a9d8f", "#e9c46a"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */
export const techs = {
    java :  {
        name: "Java",
        color: "#fbfbfb",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
    },
    php :  {
        name: "Php",
        color: "#fbfbfb",
        logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
    }
    ,
    laravel :  {
        name: "Laravel",
        color: "#fbfbfb",
        logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"
    }
    ,
    postgresql :  {
        name: "PostgreSQL",
        color: "#fbfbfb",
        "logo":"https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
    }
    ,
    html :  {
        name: "HTML5",
        color: "#fbfbfb",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
    }
    ,
    css :  {
        name: "CSS3",
        color: "#fbfbfb",
        logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
    }
    ,
    boostrap :  {
        name: "Boostrap",
        color: "#fbfbfb",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
    }
    ,
    redis :  {
        name: "Redis",
        color: "#fbfbfb",
        logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
    }
    ,
    figma :  {
        name: "Figma",
        color: "#fbfbfb",
        logo : "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
    },
    bash: {
        name: "Bash",
        color: "#fbfbfb",
        logo : "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
    }
    ,
    git: {
        name: "Git",
        color: "#fbfbfb",
        logo : "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    }
    ,
    bash: {
        name: "Bash",
        color: "#fbfbfb",
        logo : "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
    }
}

export const info = {
    firstName: "Abdullah",
    lastName: "Çiçekli",
    initials: memoji, // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self , // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by tea'
        },
        {
            emoji: '🌎',
            text: 'based in the Tukiye 🇹🇷'
        },
        {
            emoji: "💼",
            text: "Sofware Engineer at Sahibinden"
        },
        {
            emoji: "📧",
            text: "abdulahcicekli@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/cicekli_abdullah/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/abdullahcicekli",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/abdullahcicekli/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/bdullahC",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Abdullah. I'm a software engineer for Sahibinden. I studied ForensicEng at Fırat University in Turkey, I worked as a cyber security engineer for a long time. But my passion for software made me change the industry. I am here now. You should hire me!",
    skills:
        {
            proficientWith: ['python','flask', 'linux', 'git',"bash", 'html5', 'figma','java', 'spring boot', 'postgresql', 'mysql', 'javascript','boostrap', 'css3'],
            exposedTo: ["cyber security",'reactjs','matlab','elasticsearch','adobe photoshop', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'designing',
            emoji: '✏️'
        },
        {
            label: 'second hand shopping',
            emoji: '🛒'
        },
        {
            label: 'technological tools',
            emoji: '🕹'
        },
        {
            label: 'fishing',
            emoji: '🎣'
        },
        {
            label: 'hot wheels',
            emoji: '🚘'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "İngilizce Bitmiştir",
            desc : "Landing page design, online education system design and web application",
            live: "https://portal.ingilizcebitmistir.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1,
            tech: [techs.php,techs.redis,techs.bash,techs.laravel,techs.html,,techs.css,,techs.boostrap,techs.figma,techs.postgresql],
            crew: [
                {
                    name: 'Abdullah',
                    surname: "Çiçekli",
                    pict: "https://pbs.twimg.com/profile_images/1552392128860487682/IWwhqhTT_400x400.jpg",
                    link: "https://twitter.com/bdullahC",
                    desc: "Software Developer"
                },{
                    name: 'Okan',
                    surname: "İmamoğlu",
                    pict: "https://pbs.twimg.com/profile_images/1460350094268669952/a6Iem61c_400x400.jpg",
                    link: "https://twitter.com/okanimamoglu",
                    desc: "Senior Software Developer"
                },
            ]
        },
        
    
    ]
}