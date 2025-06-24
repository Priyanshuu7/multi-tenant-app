# Multi-Tenant Blog Application

This is a multi-tenant blog platform where users can:

- Sign up and log in
- Create and manage organizations
- Invite team members to their organization
- Create blogs scoped to their organization

## Features

- **Authentication** and **Organization Management** with Clerk
- **Multi-tenant architecture** using organization-based scoping
- **Blog creation** within each organization
- **Invite members** to collaborate
- Fully containerized with Docker for easy setup

## Tech Stack

- **Next.js** – Frontend Framework
- **TypeScript** – Type safety
- **Clerk** – Authentication and organization management
- **Drizzle ORM** – Type-safe database interactions
- **PostgreSQL** – Relational Database
- **Docker** – Containerization
- **ShadCN/UI** – Prebuilt accessible UI components

## Project Structure

```
.
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                 # Database and Clerk utils
├── db/                  # Drizzle ORM schema and config
├── actions/             # Server actions for blog operations
├── public/              # Static assets
├── docker-compose.yml   # Docker setup for DB
├── Dockerfile           # Optional containerization of the app
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (>=18)
- Docker & Docker Compose
- PNPM (or npm/yarn)
- Clerk project (for auth and organization)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/multi-tenant-app.git
   cd multi-tenant-app
   ```

2. **Create `.env` file**
   ```env
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

3. **Start PostgreSQL with Docker**
   ```bash
   docker compose up -d
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Run the app**
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` – Runs the development server
- `pnpm build` – Builds the app for production
- `pnpm start` – Starts the production server
- `docker compose up -d` – Runs PostgreSQL using Docker

## License

This project is licensed under the MIT License.