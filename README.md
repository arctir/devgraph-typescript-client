# Devgraph TypeScript Client

Auto-generated TypeScript client for the Devgraph API.

## Installation

```bash
npm install @arctir/devgraph-client
```

Configure npm for GitHub Packages:

```bash
npm config set @arctir:registry https://npm.pkg.github.com
```

## Usage

```typescript
import { Client } from '@arctir/devgraph-client';

const client = new Client({
  baseURL: 'https://api.devgraph.ai',
  headers: {
    'Authorization': 'Bearer your-token'
  }
});
```

## Auto-generation

This client is automatically regenerated when the Devgraph API specification changes.

## License

Apache 2.0 - See [LICENSE](LICENSE) file for details.
