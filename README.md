### SETUP

- cp .env.example .env
- generate token in https://bcrypt-generator.com
- go to APIs & Services in your GCP Project, then create OAuth 2.0 Client IDs
- configure .env
- npm i
- npm install -g sequelize-cli
- npm run db:setup
- yarn dev

### REFERENCE

#### MONITOR

- Service status monitoring tools, go to path: /status

#### POSTGRES

- Install UUID extension
> CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

- Verify installation
> SELECT * FROM pg_extension;

#### SEQUELIZE

- [Install](https://sequelize.org/docs/v6/getting-started/#installing)
- [Dialect](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/)
- [Data Type](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
- [Data Type](https://sequelize.org/docs/v7/other-topics/other-data-types)