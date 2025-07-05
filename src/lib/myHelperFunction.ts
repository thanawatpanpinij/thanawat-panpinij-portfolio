import { LogoData } from "@/types";

function createStackData(stacks: LogoData[]) {
  return stacks.map(({ key, width, height, src, alt }) => ({
    key,
    width,
    height,
    src,
    alt,
  }));
}

export { createStackData };
