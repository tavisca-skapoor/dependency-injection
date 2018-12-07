const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.post('/posts/check', (req,res) => {
    
    var dependencyString = "import { "+ req.body.compName +" } from '"+req.body.moduleName+"';";
    var readData = fs.readFileSync('C:/Users/skapoor/Desktop/trial/src/app/dynamicrender/dynamicrender.component.ts','utf8');
    var writeData = readData + dependencyString;
    fs.writeFileSync('C:/Users/skapoor/Desktop/trial/src/app/dynamicrender/dynamicrender.component.ts',writeData)
    res.send(req.body.name);
});

app.get('/', (req,res) => {
    res.send('App Works')
});

app.listen(3000, () => console.log('Listening on port 3000'))