exports.handler = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify({ timestamp: new Date().toISOString() }),
});
