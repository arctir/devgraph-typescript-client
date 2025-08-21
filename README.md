# Devgraph TypeScript Client

A type-safe TypeScript client for the Devgraph API, auto-generated from the OpenAPI specification.

## 🚀 Features

- ✅ **Auto-generated from OpenAPI**: Type-safe client generated from Devgraph API specification
- ✅ **Full Type Safety**: All parameters and responses are TypeScript typed
- ✅ **Built with Axios**: Reliable HTTP client with interceptors and error handling
- ✅ **Easy Installation**: Available as npm package from GitHub registry

## 📦 Installation

Install from GitHub Packages:

```bash
npm install @arctir/devgraph-typescript-client
# or
yarn add @arctir/devgraph-typescript-client
```

**Note**: You may need to configure npm to use GitHub Packages registry for @arctir scope:

```bash
npm config set @arctir:registry https://npm.pkg.github.com
```

## 💻 Usage

```typescript
import { createClient } from '@arctir/devgraph-typescript-client';

// Create client instance
const client = createClient({
  baseUrl: 'https://api.devgraph.com',
  headers: {
    'Authorization': 'Bearer your-api-token'
  }
});

// Use the generated SDK functions
// (Functions will depend on your Devgraph API specification)
```

## 🔧 Development

This package is built and published automatically via GitHub Actions when tags are pushed.

To contribute or modify:

1. Clone the repository
2. Install dependencies: `yarn install`
3. Make changes to the source
4. Build: `yarn build`
5. Test: `yarn test`
6. Create a PR

## 📄 License

MIT
