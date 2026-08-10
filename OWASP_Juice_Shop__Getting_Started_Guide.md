# OWASP Juice Shop: Getting Started Guide

Welcome to your OWASP Juice Shop penetration testing environment! This guide will help you get started with exploring and exploiting the intentionally vulnerable web application.

## Accessing Juice Shop

Your instance of OWASP Juice Shop is now running and accessible at the following URL:

[https://3000-i0py5ffhq75gvqwick6zh-4ba3cb87.us2.manus.computer](https://3000-i0py5ffhq75gvqwick6zh-4ba3cb87.us2.manus.computer)

## What is OWASP Juice Shop?

OWASP Juice Shop is a modern and sophisticated insecure web application written in Node.js, Express, and AngularJS. It is intentionally designed to be vulnerable to a wide range of common web application security risks, as identified by the OWASP Top 10 and other security best practices. It is an excellent resource for:

*   **Security Training:** Learn about common web vulnerabilities and how to exploit them.
*   **Awareness Demos:** Demonstrate the impact of web security flaws.
*   **Security Tools Practice:** Practice using various penetration testing tools.
*   **Capture The Flag (CTF):** Solve challenges by finding and exploiting vulnerabilities.

## Key Features and Challenges

Juice Shop offers a variety of challenges, ranging from easy to difficult, covering categories such as:

*   **Injection Flaws:** SQL Injection, NoSQL Injection, Command Injection.
*   **Broken Authentication & Session Management:** Weak credentials, session hijacking.
*   **Cross-Site Scripting (XSS):** Stored, reflected, and DOM-based XSS.
*   **Broken Access Control:** Insecure direct object references, privilege escalation.
*   **Security Misconfiguration:** Default credentials, exposed sensitive files.
*   **Sensitive Data Exposure:** Unprotected API endpoints, insecure data storage.
*   **Cross-Site Request Forgery (CSRF):** Exploiting trust in authenticated users.

## How to Use This Environment

1.  **Explore the Application:** Start by browsing the Juice Shop application as a regular user. Familiarize yourself with its features, functionalities, and user interface.
2.  **Identify Vulnerabilities:** Use your knowledge of web security principles and common attack vectors to identify potential vulnerabilities. You can use various tools for this, such as:
    *   **Browser Developer Tools:** Inspect network requests, local storage, cookies, and JavaScript code.
    *   **Proxy Tools (e.g., OWASP ZAP, Burp Suite):** Intercept and modify requests/responses to test for injection flaws, access control issues, and more.
    *   **Manual Testing:** Experiment with different inputs, parameters, and user roles.
3.  **Solve Challenges:** Juice Shop includes a scoreboard that tracks your progress in solving challenges. You can access the scoreboard by navigating to `/scoreboard` on the Juice Shop instance. Each challenge provides hints to guide you.
4.  **Document Your Findings:** As you discover vulnerabilities, document them. This is a crucial part of any penetration test.

## Important Notes

*   This environment is **for educational purposes only**. Do not use these techniques on any systems you do not own or are not explicitly authorized to test.
*   The Juice Shop is designed to be insecure. Do not store any sensitive or personal information within this application.
*   If you encounter any issues with the Juice Shop instance itself, please let me know.

Happy Hacking!
