const fs = require('fs');
const html = fs.readFileSync('/tmp/generator.html', 'utf8');

// Find script
const scriptStart = html.indexOf('<script>');
const scriptEnd = html.indexOf('</script>');
const script = html.slice(scriptStart + 8, scriptEnd);
fs.writeFileSync('/tmp/generator_script.js', script);
console.log('Script written, length:', script.length);

// Extract HTML markup outside script
const markup = html.slice(0, scriptStart) + html.slice(scriptEnd + 9);
fs.writeFileSync('/tmp/generator_markup.html', markup);
console.log('Markup written, length:', markup.length);
