//Band
import band from "../images/projects/dci/band.jpg";
import band_img_1 from "../images/projects/dci/band/staff.jpg";
import band_img_2 from "../images/projects/dci/band/services.jpg";
import band_img_3 from "../images/projects/dci/band/contact.jpg";
import band_img_4 from "../images/projects/dci/band/blog.jpg";

//Evernote
import evernote from "../images/projects/dci/evernote.jpg";
import evernote_img_1 from "../images/projects/dci/evernote/at_work.jpg";
import evernote_img_2 from "../images/projects/dci/evernote/focus.jpg";
import evernote_img_3 from "../images/projects/dci/evernote/limited_time.jpg";
import evernote_img_4 from "../images/projects/dci/evernote/popular_features.jpg";

//Login
import login from "../images/projects/dci/login.jpg";
import login_img_1 from "../images/projects/dci/login/confirm.jpg";
import login_img_2 from "../images/projects/dci/login/user.jpg";
import login_img_3 from "../images/projects/dci/login/dashboard.jpg";
import login_img_4 from "../images/projects/dci/login/logout.jpg";

//Weather App
import weather_app from "../images/projects/dci/weather_app.jpg";
import weather_img_1 from "../images/projects/dci/weather_app/show_hamburg.jpg";
import weather_img_2 from "../images/projects/dci/weather_app/show_cities.jpg";
import weather_img_3 from "../images/projects/dci/weather_app/exist_already.jpg";
import weather_img_4 from "../images/projects/dci/weather_app/smartphone.jpg";

//Online Shop
import online_shop from "../images/projects/dci/online_shop.jpg";
import online_shop_img_1 from "../images/projects/dci/online_shop/salate.jpg";
import online_shop_img_2 from "../images/projects/dci/online_shop/chef_salat.jpg";
import online_shop_img_3 from "../images/projects/dci/online_shop/veggie.jpg";
import online_shop_img_4 from "../images/projects/dci/online_shop/orders.jpg";

//todolist
import todolist from "../images/projects/dci/todos.jpg";
import todolist_img_1 from "../images/projects/dci/todos/tasks.jpg";
import todolist_img_2 from "../images/projects/dci/todos/task_done.jpg";
import todolist_img_3 from "../images/projects/dci/todos/smartphone.jpg";
import todolist_img_4 from "../images/projects/dci/todos/smartphone_done.jpg";



export const dciprojects = [
             {img: band,
              images: [band, band_img_1, band_img_2, band_img_3, band_img_4],
              titel: "Overferst & Kuhn",
              url: "overferst-kuhn.netlify.com",
              tasks: "Erstellung einer Onepage-Website in einer Gruppenarbeit. Zulässige Tools: JavaScript",
              tools: "Bootstrap, JavaScript"  },

              {img: login,
               images: [login, login_img_1, login_img_2, login_img_3, login_img_4 ],
               titel: "Login-Area",
               url: "login-area.netlify.com",
               tasks: "Erstellung einer Login-Area",
               tools: "Bootstrap, React"},

              {img: evernote,
               images: [evernote, evernote_img_1, evernote_img_2, evernote_img_3, evernote_img_4 ],
               titel: "Evernote",
               url: "evernote-duplicate.netlify.com",
               tasks: "Erstellung einer Kopie (Onepage-Website) von der Website Evernote in einer Gruppenarbeit",
               tools: "Bootstrap, JavaScript"  },

                {img: weather_app,
                 images: [weather_app, weather_img_1, weather_img_2, weather_img_3, weather_img_4],
                 titel: "Weather App",
                 url: "weather-information.netlify.com",
                 tasks: "Erstellung einer Wetter App",
                 tools: "Bootstrap, React"},

                 {img: online_shop,
                  images: [online_shop, online_shop_img_1, online_shop_img_2, online_shop_img_3, online_shop_img_4],
                  titel: "Jewgeny's Restaurant",
                  url: "jewgenys-restaurant.netlify.com",
                  tasks: "Erstellung eines online Shops",
                  tools: "Bootstrap, React"},

                  {img: todolist,
                   images: [todolist, todolist_img_1, todolist_img_2, todolist_img_3, todolist_img_4],
                   titel: "to do list",
                   url: "jewgenys-todolist.netlify.com/",
                   tasks: "Erstellung einer to do Liste",
                   tools: "Bootstrap, React"},

]
