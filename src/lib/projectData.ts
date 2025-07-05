import { Project } from "@/types";
import { logo } from "./logo";
import { v4 as uuidv4 } from "uuid";

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
    stacks: [
      {
        key: logo.mongodb.key,
        width: logo.mongodb.width,
        height: logo.mongodb.height,
        stackURL: logo.mongodb.src,
        alt: logo.mongodb.alt,
      },
      {
        key: logo.express.key,
        width: logo.express.width,
        height: logo.express.height,
        stackURL: logo.express.src,
        alt: logo.express.alt,
      },
      {
        key: logo.react.key,
        width: logo.react.width,
        height: logo.react.height,
        stackURL: logo.react.src,
        alt: logo.react.alt,
      },
      {
        key: logo.nodejs.key,
        width: logo.nodejs.width,
        height: logo.nodejs.height,
        stackURL: logo.nodejs.src,
        alt: logo.nodejs.alt,
      },
      {
        key: logo.css.key,
        width: logo.css.width,
        height: logo.css.height,
        stackURL: logo.css.src,
        alt: logo.css.alt,
      },
      {
        key: logo.tailwindcss.key,
        width: logo.tailwindcss.width,
        height: logo.tailwindcss.height,
        stackURL: logo.tailwindcss.src,
        alt: logo.tailwindcss.alt,
      },
    ],
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
    stacks: [
      {
        key: logo.mongodb.key,
        width: logo.mongodb.width,
        height: logo.mongodb.height,
        stackURL: logo.mongodb.src,
        alt: logo.mongodb.alt,
      },
      {
        key: logo.express.key,
        width: logo.express.width,
        height: logo.express.height,
        stackURL: logo.express.src,
        alt: logo.express.alt,
      },
      {
        key: logo.react.key,
        width: logo.react.width,
        height: logo.react.height,
        stackURL: logo.react.src,
        alt: logo.react.alt,
      },
      {
        key: logo.nodejs.key,
        width: logo.nodejs.width,
        height: logo.nodejs.height,
        stackURL: logo.nodejs.src,
        alt: logo.nodejs.alt,
      },
      {
        key: logo.tailwindcss.key,
        width: logo.tailwindcss.width,
        height: logo.tailwindcss.height,
        stackURL: logo.tailwindcss.src,
        alt: logo.tailwindcss.alt,
      },
    ],
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
    stacks: [
      {
        key: logo.mongodb.key,
        width: logo.mongodb.width,
        height: logo.mongodb.height,
        stackURL: logo.mongodb.src,
        alt: logo.mongodb.alt,
      },
      {
        key: logo.express.key,
        width: logo.express.width,
        height: logo.express.height,
        stackURL: logo.express.src,
        alt: logo.express.alt,
      },
      {
        key: logo.react.key,
        width: logo.react.width,
        height: logo.react.height,
        stackURL: logo.react.src,
        alt: logo.react.alt,
      },
      {
        key: logo.nodejs.key,
        width: logo.nodejs.width,
        height: logo.nodejs.height,
        stackURL: logo.nodejs.src,
        alt: logo.nodejs.alt,
      },
      {
        key: logo.chakraUI.key,
        width: logo.chakraUI.width,
        height: logo.chakraUI.height,
        stackURL: logo.chakraUI.src,
        alt: logo.chakraUI.alt,
      },
    ],
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
    stacks: [
      {
        key: logo.html.key,
        width: logo.html.width,
        height: logo.html.height,
        stackURL: logo.html.src,
        alt: logo.html.alt,
      },
      {
        key: logo.css.key,
        width: logo.css.width,
        height: logo.css.height,
        stackURL: logo.css.src,
        alt: logo.css.alt,
      },
      {
        key: logo.javascript.key,
        width: logo.javascript.width,
        height: logo.javascript.height,
        stackURL: logo.javascript.src,
        alt: logo.javascript.alt,
      },
      {
        key: logo.sass.key,
        width: logo.sass.width,
        height: logo.sass.height,
        stackURL: logo.sass.src,
        alt: logo.sass.alt,
      },
    ],
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
    stacks: [
      {
        key: logo.html.key,
        width: logo.html.width,
        height: logo.html.height,
        stackURL: logo.html.src,
        alt: logo.html.alt,
      },
      {
        key: logo.css.key,
        width: logo.css.width,
        height: logo.css.height,
        stackURL: logo.css.src,
        alt: logo.css.alt,
      },
      {
        key: logo.javascript.key,
        width: logo.javascript.width,
        height: logo.javascript.height,
        stackURL: logo.javascript.src,
        alt: logo.javascript.alt,
      },
    ],
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
    stacks: [
      {
        key: logo.html.key,
        width: logo.html.width,
        height: logo.html.height,
        stackURL: logo.html.src,
        alt: logo.html.alt,
      },
      {
        key: logo.css.key,
        width: logo.css.width,
        height: logo.css.height,
        stackURL: logo.css.src,
        alt: logo.css.alt,
      },
      {
        key: logo.javascript.key,
        width: logo.javascript.width,
        height: logo.javascript.height,
        stackURL: logo.javascript.src,
        alt: logo.javascript.alt,
      },
    ],
  },
];
