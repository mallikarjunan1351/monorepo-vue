# Monorepo with Vue Applications

This monorepo contains two Vue applications (`app1`) that share a common component. The setup uses npm workspaces.

## Prerequisites

- Node.js (v14 or later)
- npm (v7 or later)

## Getting Started

### Clone the Repository


git clone https://github.com/your-username/monorepo-vue.git
cd monorepo-vue

npm install

## Running the Applications

cd packages/app1
npm run serve

## Adding New Components

Create the component in common/src/components.
Export it in common/src/index.js.
Import and use it in app1 or app2.
