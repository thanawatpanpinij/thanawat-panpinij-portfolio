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
  imageURL: string;
  stacks: {
    key: string;
    stackURL: string;
    alt: string;
  }[];
};

export type { NavItem, Project };
