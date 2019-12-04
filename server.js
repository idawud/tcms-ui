const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/tcms-ui'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/tcms-ui/index.html'));
});

// default port
app.listen(process.env.PORT || 8080);