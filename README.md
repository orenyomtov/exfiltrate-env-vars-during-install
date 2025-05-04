# Environment Variables Exfiltration Demo

⚠️ **WARNING: DO NOT INSTALL THIS PACKAGE** ⚠️

Installing this package anywhere will result in your environment variables being sent to a remote server.

## Purpose

This package serves two main purposes:

1. **Red Team Engagements**: Useful for verifying findings during security assessments by demonstrating the ability to exfiltrate sensitive data through package installation.

2. **Security Education**: Demonstrates how malicious packages could potentially steal sensitive information during installation. It serves as a warning about the importance of:
   - Reviewing package dependencies
   - Understanding what scripts run during installation
   - Being cautious with environment variables

## How it Works

When this package is installed, it will:
1. Run the prepare script
2. Collect all environment variables
3. Send them to a remote server via HTTP POST
