import { Project } from "@/types";
import { logo } from "./logo";
import { v4 as uuidv4 } from "uuid";
import { createStackData } from "./myHelperFunction";

export const projects: Project[] = [
  {
    id: "1",
    key: uuidv4(),
    title: "CalNoy",
    frontendRepo:
      "https://github.com/thanawatpanpinij/jsd9-catsudon-frontend.git",
    backendRepo: "https://github.com/Tvilalai/jsd9-catsudon-backend.git",
    liveDemo: "https://jsd9-catsudon-frontend.vercel.app/",
    image: {
      width: 1200,
      height: 574,
      imageURL:
        "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751368289/CalNoy_egljnu.webp",
    },
    stacks: createStackData([
      logo.mongodb,
      logo.express,
      logo.react,
      logo.nodejs,
      logo.css,
      logo.tailwindcss,
    ]),
  },
  {
    id: "2",
    key: uuidv4(),
    title: "Notura",
    frontendRepo: "https://github.com/thanawatpanpinij/notura-app-frontend.git",
    backendRepo: "https://github.com/thanawatpanpinij/notura-app-backend.git",
    liveDemo: "https://notura-app-frontend.vercel.app/",
    image: {
      width: 1200,
      height: 569,
      imageURL:
        "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751368286/notura_acikev.webp",
    },

    stacks: createStackData([
      logo.mongodb,
      logo.express,
      logo.react,
      logo.nodejs,
      logo.tailwindcss,
    ]),
  },
  {
    id: "3",
    key: uuidv4(),
    title: "Product Store",
    frontendRepo: "https://github.com/thanawatpanpinij/mern-skill-up.git",
    image: {
      width: 1200,
      height: 569,
      imageURL:
        "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751368287/product-store_oxdvpy.webp",
    },
    stacks: createStackData([
      logo.mongodb,
      logo.express,
      logo.react,
      logo.nodejs,
      logo.chakraUI,
    ]),
  },
  {
    id: "4",
    key: uuidv4(),
    title: "Pokemon App",
    frontendRepo: "https://github.com/thanawatpanpinij/Pokemon-app.git",
    liveDemo: "https://codepen.io/thanawatpanpinij/full/gOVWjdq/",
    image: {
      width: 1200,
      height: 569,
      imageURL:
        "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751368286/Pokemon-App_lxnulw.webp",
    },
    stacks: createStackData([logo.html, logo.css, logo.javascript, logo.sass]),
  },
  {
    id: "5",
    key: uuidv4(),
    title: "Weather APP",
    frontendRepo: "https://github.com/thanawatpanpinij/Weather-app.git",
    liveDemo: "https://codepen.io/thanawatpanpinij/full/BaXZRMY",
    image: {
      width: 1200,
      height: 569,
      imageURL:
        "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751368287/Weather-App_lfgru5.webp",
    },
    stacks: createStackData([logo.html, logo.css, logo.javascript]),
  },
  {
    id: "6",
    key: uuidv4(),
    title: "Mortgage Repayment Calculator",
    frontendRepo: "",
    liveDemo: "",
    image: {
      width: 1200,
      height: 569,
      imageURL:
        "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1751368287/Frontend-Mentor-Mortgage-repayment-calculator_blfwnh.webp",
    },
    stacks: createStackData([logo.html, logo.css, logo.javascript]),
  },
];
