# Mentor Me AI Backend Repository

Welcome to the backend repository of **Mentor Me AI**, an innovative platform that leverages AI to provide mentoring and guidance. This repository contains the server-side code responsible for powering various features, including authentication (sign-in and login), payment APIs (Stripe and Coinbase), and integration with the GPT-4 API for Chartbox. The backend is developed using Node.js, Express, and MongoDB.

## Introduction

Welcome to the backend repository of Mentor Me AI. This repository serves as the backbone for the platform, handling various essential functions and interactions. Built using Node.js, Express, and MongoDB, it provides the groundwork for an efficient, secure, and feature-rich backend.

## Features

### Authentication

Mentor Me AI offers a secure authentication system that encompasses user registration and login. By sending POST requests to the appropriate endpoints, users can sign up, log in, and manage their profiles seamlessly. Token-based authentication is implemented for secure communication between the frontend and backend.

### Payment APIs

Our platform integrates two prominent payment gateways, Stripe and Coinbase, to streamline payment processing. Users can make payments confidently using these APIs, enhancing the overall user experience and enabling mentors to receive compensation.

### GPT-4 API for Chartbox

The integration of the GPT-4 API empowers Mentor Me AI with Chartbox, an intelligent tool for generating charts and graphs from natural language inputs. Users can interact with the AI-powered Chartbox system through the backend, creating insightful visualizations with ease.

## Getting Started

Follow these instructions to set up and run the backend on your local environment.

### Prerequisites

- Node.js 
- MongoDB 

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Run the following command to install the required dependencies:

```bash
npm install
```

### Configuration

1. Rename the `.env.example` file to `.env`.
2. Modify the `.env` file to include your specific configuration details, such as database connection information, Stripe and Coinbase API keys, and the GPT-4 API endpoint.

 