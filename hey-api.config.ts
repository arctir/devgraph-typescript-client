import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'openapi.yaml', // Your OpenAPI spec file
  output: {
    format: 'prettier',
    path: './src/generated',
  },
  client: {
    name: 'axios', // or 'fetch'
  },
  plugins: [
    // Generate TypeScript interfaces
    {
      name: '@hey-api/typescript',
      enums: 'javascript',
    },
    // Generate SDK functions - THIS CREATES getPosts(), createPost(), etc.
    {
      name: '@hey-api/sdk',
      asClass: false, // Generate functions instead of class methods
      methodNameBuilder: (operation) => {
        // Use operationId if available, otherwise generate from method + path
        if (operation.operationId) {
          return operation.operationId;
        }
        const method = operation.method.toLowerCase();
        const pathSegments = operation.path.split('/').filter(Boolean);
        const resource = pathSegments[pathSegments.length - 1] || 'resource';
        return `${method}${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
      },
    },
    // Generate schemas for validation
    {
      name: '@hey-api/schemas',
      type: 'json',
    },
  ],
});
