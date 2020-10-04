const fetch = require('node-fetch');

(async function(){
    const res = await fetch('https://explodingtopics.com/featured-topics-this-month');
    const text = await res.text();
    const found = text.toLowerCase().includes('ring lights')
    console.log({text});
})();