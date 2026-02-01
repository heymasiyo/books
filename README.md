<h1 align="center">Books</h1>

<p align="center">
    The open source accounting app built for simplicity.
    <br />
    <a href="#"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="#introduction"><strong>Introduction</strong></a> ·
    <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#contributing"><strong>Contributing</strong></a>
</p>

<br />

## Introduction

**Books** is a modern, open source **accounting system** designed to help businesses, freelancers, and small teams manage their finances with clarity and transparency.
Built with **simplicity, scalability, and affordability** in mind.

## Tech Stack

- **Web**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Drizzle](https://orm.drizzle.team/) with [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)

## Getting Started

To get Books up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or later): JavaScript runtime for the application.
  - [Download Node.js](https://nodejs.org/en/download/)
- **pnpm**: Fast, disk space–efficient package manager.
  - [Installation Guide](https://pnpm.io/installation)
- **Docker Desktop**: For running the PostgreSQL database.
  - [Installation Guide](https://www.docker.com/products/docker-desktop/)

### Setup

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/heymasiyo/books.git
    cd books
    ```

2.  **Install dependencies**:

    ```bash
    pnpm install
    ```

3.  **Configure environment variables**:
    Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

### Database Setup

Books uses PostgreSQL with Drizzle ORM. You can run the database using Docker:

1.  **Start the PostgreSQL database container**:

    ```bash
    pnpm docker:up
    ```

    This command uses `docker-compose.yaml` to spin up a PostgreSQL container.

2.  **Initialize the database**:
    Once the database container is running and healthy, initialize the database:
    ```bash
    pnpm db:push
    ```

### Running the Application

After setting up the environment and database, you can start the development server:

```bash
pnpm dev
```

The application should now be accessible in your browser at [http://localhost:3000](http://localhost:3000).

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to this project.
