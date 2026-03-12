# Personal Finance Tracker

## Overview

Personal Finance Tracker allows users to record financial transactions.

Sensitive financial information is stored in an encrypted format.

Participants must debug logical errors in transaction handling.

---

# Architecture Flow

User Interface

↓

API Layer

↓

Controller

↓

Finance Service

↓

Encryption Utility

↓

File Storage

↓

Database (JSON)

---

# Folder Structure

```
frontend/
backend/
routes/
controllers/
services/
utils/
data/
```

---

# Core Features

• Add transaction
• List transactions
• Delete transaction

---

# APIs

POST

```
/api/create
```

GET

```
/api/list
```

DELETE

```
/api/:id
```

---

# Bug Categories

Logic errors

* Incorrect balance calculations
* Invalid transaction validation

Security flaws

* Missing authentication
* Sensitive data exposure

Data integrity

* Duplicate transaction IDs
* Improper filtering

Concurrency

* Data corruption from concurrent writes

---

# Challenge Goal

Participants must make the system stable, accurate, and secure.
