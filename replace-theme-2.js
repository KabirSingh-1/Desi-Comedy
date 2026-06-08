import fs from 'fs';
import path from 'path';

const sectionsDir = path.join(process.cwd(), 'src/sections');
const componentsDir = path.join(process.cwd(), 'src/components');

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

      content = content.replace(/bg-\[\#0d0d0d\]/g, 'bg-background');
      content = content.replace(/bg-\[\#111111\]/g, 'bg-card');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(sectionsDir);
replaceInDir(componentsDir);
console.log('Done additional replace!');
