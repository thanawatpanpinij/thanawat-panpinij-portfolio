type NavItem = {
  key: string;
  label: string;
  href: string;
};

type LogoData = {
  key: string;
  width: number;
  height: number;
  src: string;
  alt: string;
};

type Project = {
  id: string;
  key: string;
  title: string;
  frontendRepo?: string;
  backendRepo?: string;
  liveDemo?: string;
  image: {
    width: number;
    height: number;
    imageURL: string;
    blurDataURL: string;
  };
  stacks: LogoData[];
};

type Logo = {
  html: LogoData;
  css: LogoData;
  javascript: LogoData;
  typescript: LogoData;
  sass: LogoData;
  react: LogoData;
  nextjs: LogoData;
  nodejs: LogoData;
  express: LogoData;
  mongodb: LogoData;
  sqlite: LogoData;
  chakraUI: LogoData;
  tailwindcss: LogoData;
  figma: LogoData;
  photoshop: LogoData;
  illustrator: LogoData;
};

export type { NavItem, Project, Logo, LogoData };
