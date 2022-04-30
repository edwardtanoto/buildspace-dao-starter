import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xeFc9eEA8C9b7E0B08db6F8f9025C7b50B2721c2A");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "RIGHT HERE? RIGHT NOW?",
        description: "This NFT will give you access to LFG DAO",
        image: readFileSync("scripts/assets/notdao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();