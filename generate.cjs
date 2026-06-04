const fs = require('fs');

fetch('https://restcountries.com/v3.1/all?fields=name,flag,idd')
  .then(res => res.json())
  .then(data => {
    const codes = [];
    data.forEach(c => {
      if (c.idd && c.idd.root) {
        const root = c.idd.root;
        const suffixes = c.idd.suffixes && c.idd.suffixes.length === 1 ? c.idd.suffixes : [""];
        suffixes.forEach(s => {
          codes.push({
            name: c.name.common,
            flag: c.flag || "",
            code: root + s
          });
        });
      }
    });
    
    // Add specific ones if missing or format them nicely
    codes.sort((a, b) => {
      // Put India, US, UK, Australia, UAE at top
      const topTier = ["India", "United States", "United Kingdom", "Australia", "United Arab Emirates"];
      const aIndex = topTier.indexOf(a.name);
      const bIndex = topTier.indexOf(b.name);
      if (aIndex !== -1 && bIndex === -1) return -1;
      if (bIndex !== -1 && aIndex === -1) return 1;
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      return a.name.localeCompare(b.name);
    });

    const uniqueCodes = [];
    const seen = new Set();
    codes.forEach(c => {
      if (!seen.has(c.code) && c.code !== "" && c.code !== "+") {
        seen.add(c.code);
        uniqueCodes.push(c);
      }
    });

    const fileContent = `export const countryCodes = ${JSON.stringify(uniqueCodes, null, 2)};\n`;
    
    if (!fs.existsSync('src/data')) {
      fs.mkdirSync('src/data', { recursive: true });
    }
    fs.writeFileSync('src/data/countryCodes.ts', fileContent);
    console.log('Successfully generated countryCodes.ts with ' + uniqueCodes.length + ' codes.');
  })
  .catch(err => {
    console.error('Failed to fetch country codes:', err);
  });
