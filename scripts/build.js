const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define paths
const cssDir = path.join(__dirname, '../src/css');
const jsDir = path.join(__dirname, '../src/js');
const outputDir = path.join(__dirname, '../dist');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Function to minify CSS files
function minifyCSS() {
    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    cssFiles.forEach(file => {
        const filePath = path.join(cssDir, file);
        const outputFilePath = path.join(outputDir, file);
        exec(`cssnano ${filePath} ${outputFilePath}`, (err) => {
            if (err) {
                console.error(`Error minifying CSS file ${file}:`, err);
            } else {
                console.log(`Minified ${file} to ${outputFilePath}`);
            }
        });
    });
}

// Function to bundle JavaScript files
function bundleJS() {
    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    const outputFilePath = path.join(outputDir, 'bundle.js');
    const fileContents = jsFiles.map(file => fs.readFileSync(path.join(jsDir, file), 'utf8')).join('\n');
    fs.writeFileSync(outputFilePath, fileContents);
    console.log(`Bundled JavaScript files to ${outputFilePath}`);
}

// Run the build process
minifyCSS();
bundleJS();