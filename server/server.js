let express = require('express');
let app = express();

function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: 'dist' });
}

app.use('/', express.static('dist'));
app.use(redirectRouterLessonUnmatched);

// app.get()

app.listen(3000, () => console.log('running...'));
