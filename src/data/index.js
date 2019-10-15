import logo from "../assets/Logo.png"
import one from "../assets/carousel/1.png"
import two from "../assets/carousel/2.png"
import three from "../assets/carousel/3.png"
import residential from "../assets/featured/residential.png"
import competitif from "../assets/featured/competitif.png"
import commercial from "../assets/featured/commercial.png"
import footerDoodle from "../assets/snowblower.png"

const keywords = [
    "deneigment",
    "holiette"
]

const site = {
    author: "Benzi",
    github: "https://github.com/bernzJ",
    inquiry: "benje@hotmail.ca",
    title: "Déneigement Alexandre Beauséjour",
    description: "Deneigement yo",
    facebook: "FBLINK YO",
    email: "entretienab@gmail.com",
    phone: "450-751-0085",
    lang: "fr",
    logo: logo,
}

const carousel = [
    {
        title: "Soumission Gratuite",
        subtitle: "Appelez maintenant",
        img: one,
    },
    {
        title: "Soumission Gratuite",
        subtitle: "Appelez maintenant",
        img: two,
    },
    {
        title: "Soumission Gratuite",
        subtitle: "Appelez maintenant",
        img: three,
    },
]

const featured = [
    {
        title: "Résidentiel",
        description: "En savoir plus",
        img: residential,
        slug: "#residential",
    },
    {
        title: "Commercial",
        description: "En savoir plus",
        img: commercial,
        slug: "#commercial",
    },
    {
        title: "Prix compétitif",
        description: "En savoir plus",
        img: competitif,
        slug: "#price",
    },
]

const footer = {
    doodle: footerDoodle
}

export {
    site,
    keywords,
    carousel,
    featured,
    footer
}