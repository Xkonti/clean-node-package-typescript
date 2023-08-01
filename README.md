# Clean Node Package with TypeScript Template

This template provides a concise and efficient foundation for crafting a Node.js package. It seamlessly integrates:
- **TypeScript** for robust type safety
- **Vite 4** for optimal bundling
- **Vitest** for comprehensive testing
- **ESLint** for consistent code quality

Furthermore, a built-in GitHub Actions workflow ensures quality control for every pull request targeting the `main` branch. While this workflow doesn't publish or store any artifacts, it serves as a robust foundation for pull request validation.

## Usage

Though this project has been initialized using [pnpm](https://pnpm.io/), you're welcome to utilize your preferred package manager.

| Pnpm command      | Yarn command      | Npm command       | Description               |
| ----------------- | ----------------- | ----------------- | ------------------------- |
| `pnpm install`    | `yarn install`    | `npm install`     | Install dependencies      |
| `pnpm test`       | `yarn test`       | `npm test`        | Execute tests             |
| `pnpm test:watch` | `yarn test:watch` | `npm test:watch`  | Run tests in watch mode   |
| `pnpm build`      | `yarn build`      | `npm build`       | Build the package         |

By default, the package is configured to build to the `dist` folder. If you wish to modify this, adjustments can be made in the `vite.config.ts` file. Additionally, type definitions are included in the build, ensuring compatibility with other TypeScript projects.
