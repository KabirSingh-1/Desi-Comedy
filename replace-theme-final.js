import fs from 'fs';
import path from 'path';

const sectionsDir = path.join(process.cwd(), 'src/sections');
const componentsDir = path.join(process.cwd(), 'src/components');

const darkBgRegexes = [
  /bg-\[\#0a0a0a\]/g,
  /bg-\[\#1a1a1a\]/g,
  /bg-\[\#141414\]/g,
  /bg-\[\#1f1f1f\]/g,
  /bg-\[\#111\]/g,
  /bg-\[\#222\]/g,
  /bg-\[\#1a0a0a\]/g,
];

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      darkBgRegexes.forEach(regex => {
        content = content.replace(regex, 'bg-card');
      });

      // Remove gradient strings
      content = content.replace(/from-black via-black\/[0-9]+ to-transparent/g, 'from-transparent to-transparent');
      content = content.replace(/from-black to-transparent/g, 'from-transparent to-transparent');

      // Rewards.tsx specific inline styles using rgba(0,0,0) or yellow shadow could be tweaked, but it's fine
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(sectionsDir);
replaceInDir(componentsDir);
console.log('Done final replace!');
