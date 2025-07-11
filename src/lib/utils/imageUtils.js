import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageURL) {
  try {
    const buffer = await fetch(imageURL).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(base64);
  } catch (error) {
    console.log(error);
  }
}

getBase64("");
