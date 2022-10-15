# Medusa Payment Paystack Demo

## About

### Description

Monorepo with Medusa Storefront, Admin and Backend to demo using `medusa-payment-paystack` for payments.

This comes with Ghana and Nigeria pre-configured as regions with Paystack payment support.

## Set up Project

### Prerequisites

Make sure you have [PNPM](https://pnpm.io/installation) on your machine.

Create a [Paystack](https://paystack.com/) account if you do not already have one, obtain your public key and secret key from the dashboard.

### Seed Database

Prepopulate an sqlite database for use in the backend.

```shell
pnpm --filter backend seed
```

### Configure Environment Variables

Add your Paystack secret key to your backend's environment file.

```
// apps/backend/.env or apps/backend/.env.production for production env.

PAYSTACK_SECRET_KEY=sk_test|live_XXXXXXXXXXXXXX
```

Add your Paystack secret key to your storefront's environment file.

```
// apps/storefront/.env

NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test|live_XXXXXXXXXXXXXX
```

### Install dependencies

```
pnpm i
```

### Start all apps - Backend, Admin, Storefront

```
pnpm start
```

## Resources

- [medusa-payment-paystack](https://www.npmjs.com/package/medusa-payment-paystack)
- [Monorepo Starter](https://github.com/dalenguyen/medusa-monorepo)
