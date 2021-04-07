import { master, main, production, release } from "./config/release.config";
import prettier from "./config/prettier.config";

const releaseMaster = master;
const releaseMain = main;
const releaseProduction = production;

export { prettier, release, releaseMaster, releaseMain, releaseProduction };
