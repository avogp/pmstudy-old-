const http = require('http')

const posts = []

const server = http.createServer((req,res){
she
        if (req.url === '/'){
            res.write("Posts:")
            res.write(JSON.stringify(posts))
        }

})