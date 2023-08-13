import path from "path";
import { buildConfig } from "payload/config";

import Article from "./collections/Article";
import ArticleCategory from "./collections/ArticleCategory";
import Catalogue from "./collections/Catalogue";
import Media from "./collections/Media";
import PDF from "./collections/PDF";
import Shop from "./collections/Shop";
import Users from "./collections/Users";

export default buildConfig({
  collections: [
    // Your collections here
    Users,
    Shop,
    Catalogue,
    PDF,
    Article,
    ArticleCategory,
    Media,
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
