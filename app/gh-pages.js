const ghpages = require('gh-pages');

ghpages.publish('build', function(error) {
  if (error) {
    process.stdout.write(`${error}\n`);
  }
});
