type NavItem = {
  key: string;
  label: string;
  href: string;
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
  };
  stacks: {
    key: string;
    width: number;
    height: number;
    stackURL: string;
    alt: string;
  }[];
};

export type { NavItem, Project };
