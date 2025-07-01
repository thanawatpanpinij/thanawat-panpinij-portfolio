type NavItem = {
  label: string;
  href: string;
};

type Project = {
  id: string;
  title: string;
  frontendRepo?: string;
  backendRepo?: string;
  liveDemo?: string;
  imageURL: string;
  stacks: {
    stackURL: string;
    alt: string;
  }[];
};

export type { NavItem, Project };
