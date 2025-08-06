import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '../devgraph/specs/devgraph/v1/spec.yaml',
  output: {
    format: "prettier",
    path: 'src/',
  },
  plugins: ['@hey-api/client-next'],
});
