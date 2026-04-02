import fs from "fs";
import path from "path";

const declarationsDir = "declarations";

const files = fs.readdirSync(declarationsDir).filter((f) => f.endsWith(".xml"));

const results = files.map((file) => {
  // Extract name from filename: everything before the di/dia/dim/diam + number pattern
  const nameMatch = file.match(/^(.+?)-(di|dia|dim|diam)\d+/);
  const name = nameMatch
    ? nameMatch[1]
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : file;

  const content = fs.readFileSync(path.join(declarationsDir, file), "utf-8");

  // Check if participationFinanciereDto has <neant>true</neant> (no assets)
  const partFinMatch = content.match(
    /<participationFinanciereDto>([\s\S]*?)<\/participationFinanciereDto>/
  );

  if (!partFinMatch || /<neant>true<\/neant>/.test(partFinMatch[1])) {
    return { name, totalAssets: NaN };
  }

  // Extract all <evaluation> values within participationFinanciereDto
  const evaluations = [
    ...partFinMatch[1].matchAll(/<evaluation>(.*?)<\/evaluation>/g),
  ];

  if (evaluations.length === 0) {
    return { name, totalAssets: NaN };
  }

  const totalAssets = evaluations.reduce((sum, match) => {
    // Values may contain spaces as thousand separators (e.g. "163 200")
    const value = parseFloat(match[1].replace(/\s/g, ""));
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  return { name, totalAssets };
});

console.log(results);
console.log(`Total declarations: ${results.length}`);

fs.writeFileSync("data/assets.json", JSON.stringify(results, null, 2));
console.log("Saved to data/assets.json");