const server =Bun.serve({
    port: process.env.PORT||8000,
    fetch(req){
        const url =new URL(req.url);
        if(url.pathname === '/') return new Response('Home page ')
        return new Response('hello world !!!')
    }
})


console.log(`Listening on port ${server.port} at ${server.hostname}`)