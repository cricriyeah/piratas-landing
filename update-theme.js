const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace variable names for semantics
    content = content.replace(/--color-dark/g, '--color-primary');
    content = content.replace(/--color-beige/g, '--color-secondary');
    
    // Replace specific hardcoded RGBA values to fit light theme
    content = content.replace(/rgba\(232, 217, 192, 0\.05\)/g, 'rgba(0, 0, 0, 0.05)');
    content = content.replace(/rgba\(232, 217, 192, 0\.1\)/g, 'rgba(0, 0, 0, 0.1)');
    content = content.replace(/rgba\(232, 217, 192, 0\.2\)/g, 'rgba(0, 0, 0, 0.2)');
    content = content.replace(/rgba\(28, 28, 28, 0\.95\)/g, 'rgba(245, 239, 230, 0.95)');
    content = content.replace(/rgba\(28, 28, 28, 0\.8\)/g, 'rgba(255, 255, 255, 0.6)');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('CSS updated');
