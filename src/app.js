import fastify from 'fastify'
const server = fastify({ logger: true })

server.get("/", async (req, res) => {
    res.header("location", "http://localhost:8080")
    res.status(301).send("no access")
})
const start = async ()=>{
    try {
        await server.listen(3000)
        server.log.info(`server listening on ${server.server.address().port}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
start()