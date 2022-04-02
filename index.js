//Load dependencies
const express = require('express');
const userRouter = require('./src/core/models/users/user.routes');
const channelRouter = require('./src/core/models/channel/channel.routes');
const groupRouter = require('./src/core/models/group/group.routes');
const messageRouter = require('./src/core/models/message/message.routes');
const roleRouter = require('./src/core/models/role/role.routes');
const roomRouter = require('./src/core/models/room/room.routes');
const sessionRouter = require('./src/core/models/session/session.routes');
const usergroupRouter = require('./src/core/models/usergroup/usergroup.routes');
const socketIo = require('socket.io');
const cors = require('cors');   
let server;


const swaggersJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const Database = require('./src/core/db');
const { Db } = require('mongodb');

//Init app
const app = express();

app.use(express.json());
app.use(cors());
//Set endpoints
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Api works!')
})


app.use('/api', userRouter);
app.use('/api', groupRouter);
app.use('/api', channelRouter);
app.use('/api', messageRouter);
app.use('/api', roleRouter);
app.use('/api', roomRouter);
app.use('/api', sessionRouter);
app.use('/api', usergroupRouter);

//Swagger Config

const swaggerConfig ={
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'Chat API',
            description: 'A live chat web application',
            version: '1.0.0',
            servers: ['http://localhost:'+port]
        }
    },
    apis: ['./src/core/models/users/user.routes.js','./src/core/models/usergroup/usergroup.routes.js']
}

const swaggersDocs = swaggersJsDoc(swaggerConfig);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggersDocs)); 

//Listen to port
Database.connect(() => {
server = app.listen(port, () => {
    console.log('App is listening on port ' + port);
    });
    const io= socketIo(server, {
        cors:{
            origin:'http://localhost:4200',
            methods:['GET', 'POST', 'PUT', 'DELETE']
        }
    });
    
    io.on('connection', socket => {
        console.log('Alguien se conectó!')
    })
});
