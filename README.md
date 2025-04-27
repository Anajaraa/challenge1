MONGODB_URI=mongodb://localhost:27017/furia-fan-zone
PORT=5000# FURIA Fan Zone

An interactive platform for FURIA fans to connect, chat, and follow their favorite team.

## Prerequisites

Before running the project, you need to install:

1. Node.js (v14 or higher) - [Download Here](https://nodejs.org/)
2. MongoDB Community Edition - [Download Here](https://www.mongodb.com/try/download/community)
3. Visual Studio Code (recommended) - [Download Here](https://code.visualstudio.com/)

## MongoDB Setup

1. Download MongoDB Community Server
2. During installation:
   - Choose "Complete" installation
   - Install MongoDB Compass (the GUI tool)
   - Check "Install MongoDB as a Service"

3. After installation, MongoDB should run automatically as a service
4. Open MongoDB Compass
5. Click "Connect" using the default connection string: `mongodb://localhost:27017`
6. Create a new database:
   - Click "Create Database"
   - Database name: `furia-fan-zone`
   - Collection name: `messages`

## Project Setup

1. Clone the repository or unzip the project files to your desired location

2. Open terminal in the project directory and install dependencies:
```bash
npm install