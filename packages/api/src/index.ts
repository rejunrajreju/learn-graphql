const fastify = require('fastify')({ logger: true });
const PORT = process.env.API_PORT || 8080;

fastify.get('/', async () => {
  return "Welcome Api box!"
});

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}


start();