import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Its API",
      version: "1.0.0",
      description: "Its documentation with Authentication",
    },
    servers: [
      {
        url: `http://localhost:4040`,
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization", // Header name for API key
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Adjust path as needed
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

function swaggerDocs(app: any) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs;
