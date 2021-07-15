exports.handler = async (event, context) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST',
  },
  body: JSON.stringify({ event, context, timestamp: new Date().toISOString() }),
});
