const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: { // API informations (required)
    title: 'court finder API', // Title (required)
    version: '1.0.0', // Version (required)
    description: '', // Description (optional)
  },
  host: 'http://localhost:3000', // Host (optional)
  basePath: '', // Base path (optional)
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ['./routes/*/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
module.exports = swaggerJSDoc(options);