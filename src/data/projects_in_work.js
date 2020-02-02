//metalltechnik kuhn config
import metalltechnik_kuhn_config from "../images/projects/metalltechnik_kuhn_config.jpg";
import vorschau_metalltechnik_config from "../images/projects/metalltechnik_kuhn_config/vorschau.jpg";
import zaun_auswahl_briefkasten from "../images/projects/metalltechnik_kuhn_config/zaun_auswahl_briefkasten.jpg";
import zaun_auswahl_farbe from "../images/projects/metalltechnik_kuhn_config/zaun_auswahl_farbe.jpg";
import zaun_auswahl_luxus from "../images/projects/metalltechnik_kuhn_config/zaun_auswahl_luxus.jpg";
import zaun_vorschau_pdf from "../images/projects/metalltechnik_kuhn_config/zaun_vorschau_pdf.jpg";

//movement metropolitan
import about_us_metropolitan from "../images/projects/movement_metropolitan/about_us.jpg";
import home_2_metropolitan from "../images/projects/movement_metropolitan/home_2.jpg";
import home_metropolitan from "../images/projects/movement_metropolitan/home.jpg";
import intro_metropolitan from "../images/projects/movement_metropolitan/intro.jpg";
import plattformen_metropolitan from "../images/projects/movement_metropolitan/plattformen.jpg";

export const projects_in_work = [
      {
        img: metalltechnik_kuhn_config,
        images: [vorschau_metalltechnik_config, zaun_auswahl_briefkasten, zaun_auswahl_farbe, zaun_auswahl_luxus, zaun_vorschau_pdf],
        titel: "Metalltechnik Kuhn - Konfigurator",
        titel_url: "Metalltechnik_Kuhn_Konfigurator",
        url: "kuhnmetalltechnikconfig.netlify.com",
        branche: "Metalltechnik",
        tasks: "Erstellung eines zusätzlichen Konfigurators",
        tools: "Bootstrap, SCSS, React, Adobe Photoshop, Adobe Illustrator"
      },

      {
        img: about_us_metropolitan,
        images: [about_us_metropolitan, home_2_metropolitan, home_metropolitan, intro_metropolitan, plattformen_metropolitan],
        titel: "Movement Metropolitan",
        titel_url: "Movement_Metropolitan",
        url: "movement-metropolitan.netlify.com",
        branche: "Interkultureller Verein aus lokalen und internationalen Künstlern",
        tasks: "Erstellung einer neuen Webplattform",
        tools: "Bootstrap, CSS, GatsbyJS, Adobe Photoshop"
      },
]