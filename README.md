# HNG12

# HNG Stage 0 Public API

## Description
A simple Node.js/Express API for HNG Stage 0 that returns:
- HNG Slack registered email
- Current datetime in ISO 8601 format
- GitHub repository URL

## API Endpoint
**Base URL:** ``

**GET /**
Returns JSON response:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Oluwaseyi69/HNG12"
}
