import { readdirSync, readFileSync } from "node:fs"
const bad = readdirSync("src").filter((f) => readFileSync(`src/${f}`, "utf8").includes("console.log"))
if (bad.length) { console.error(`console.log in ${bad.join(", ")}`); process.exit(1) }
console.log("lint ok")
