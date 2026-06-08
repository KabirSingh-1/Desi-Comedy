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

      // Replace hardcoded dark mode colors
      content = content.replace(/\bbg-black\b/g, 'bg-background');
      content = content.replace(/\bbg-\[\#1a1a1a\]\b/g, 'bg-card');
      content = content.replace(/\btext-white(\/[0-9]+)?\b/g, (match, p1) => {
        return p1 ? `text-foreground${p1}` : 'text-foreground';
      });
      content = content.replace(/\bborder-white(\/[0-9]+)?\b/g, 'border-border');
      content = content.replace(/\bbg-zinc-950\b/g, 'bg-background');
      content = content.replace(/\bbg-zinc-900\b/g, 'bg-card');
      content = content.replace(/\btext-zinc-400\b/g, 'text-muted-foreground');
      content = content.replace(/\btext-gray-400\b/g, 'text-muted-foreground');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(sectionsDir);
replaceInDir(componentsDir);
console.log('Done!');
