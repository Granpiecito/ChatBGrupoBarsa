# Project Structure

This file maintains an up-to-date list of project files and structure.

## File Structure

- 📁 `.vscode/`
- 📁 `assets/`
  - 📄 `assets\sample.png` (Unknown)
- 📁 `src/`
  - 📁 `src\img/`
    - 📄 `src\img\codeviz-diagram-2025-04-03T19-45-10.drawio` (Unknown)
  - 📁 `src\scripts/`
    - 📁 `src\scripts\bd/`
      - 📄 `src\scripts\bd\bd.sql` (Unknown)
  - 📁 `src\services/`
    - 📁 `src\services\Controller/`
    - 📁 `src\services\Database/`
      - 📄 `src\services\Database\db.ts` (TypeScript)
        - *Imports:* `@builderbot/database-mysql`
    - 📁 `src\services\Flows/`
      - 📁 `src\services\Flows\Services-List/`
      - 📁 `src\services\Flows\Services-List copy/`
      - 📄 `src\services\Flows\AboutFlow.ts` (TypeScript)
        - *Imports:* `@builderbot/bot`, `@builderbot/provider-meta`, `@builderbot/database-mysql`
      - 📄 `src\services\Flows\EndFlow.ts` (TypeScript)
        - *Imports:* `@builderbot/bot`, `@builderbot/provider-meta`, `@builderbot/database-mysql`
      - 📄 `src\services\Flows\Exampleflow.ts` (TypeScript)
      - 📄 `src\services\Flows\FLowLibrary.ts` (TypeScript)
        - *Imports:* `./EndFlow`, `./WelcomeFlow`, `./ServicesFlow`, `./AboutFlow`, `./Reservations`
      - 📄 `src\services\Flows\Reservations.ts` (TypeScript)
        - *Imports:* `@builderbot/bot`, `@builderbot/provider-meta`, `@builderbot/database-mysql`
      - 📄 `src\services\Flows\ServicesFlow.ts` (TypeScript)
        - *Imports:* `@builderbot/bot`, `@builderbot/provider-meta`, `@builderbot/database-mysql`
      - 📄 `src\services\Flows\WelcomeFlow.ts` (TypeScript)
        - *Imports:* `@builderbot/bot`, `@builderbot/provider-meta`, `@builderbot/database-mysql`
    - 📁 `src\services\Tasks/`
  - 📄 `src\app.ts` (TypeScript)
    - *Imports:* `path`, `dotenv`, `./services/Database/db`, `./services/Flows/FLowLibrary`, `@builderbot/bot`, `@builderbot/database-mysql`, `@builderbot/provider-meta`
- 📄 `.dockerignore` (Unknown)
- 📄 `.env` (Unknown)
- 📄 `.eslintrc.json` (JSON)
- 📄 `.gitignore` (Unknown)
- 📄 `Dockerfile` (Unknown)
- 📄 `nodemon.json` (JSON)
- 📄 `package-lock.json` (JSON)
- 📄 `package.json` (JSON)
- 📄 `pnpm-lock.yaml` (Unknown)
- 📄 `README.md` (Markdown)
- 📄 `rollup.config.js` (JavaScript)
  - *Imports:* `rollup-plugin-typescript2`
- 📄 `tsconfig.json` (JSON)

---
Last updated: 2025-04-03T21:17:35.021Z
