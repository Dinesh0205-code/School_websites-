const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const replacements = [
  { match: /<a href="#" >\s*<h3 class="feature-titel">Supported Grades<\/h3>/g, replace: '<a href="grades.html" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class="feature-titel">Supported Grades</h3>' },
  { match: /<a href="#" class="feature-link" ><button\s*class="bt"> Read more <\/button><\/a>/g, replace: '<a href="grades.html" class="feature-link" ><button\n\t\t\t\t\t\t\t\t\t\t\t\tclass="bt"> Read more </button></a>' }, 
  // Wait, the "Read more" links are mostly identical, so regex alone might be hard if we just replace all.
];
