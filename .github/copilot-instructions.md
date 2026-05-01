# Copilot Instructions for VogueStyle Development

## Code Style
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use Prettier for automatic code formatting. Ensure your editor is configured to format on save.

## TypeScript Rules
- All variables and functions must have explicit types.
- Utilize interfaces for prop type definitions in React components.
- Avoid using `any`; instead, define proper types or use generics.

## React Patterns
- Use functional components and React Hooks where applicable.
- Organize components into folders, separating UI and logic.
- Utilize context for state management where necessary to avoid prop drilling.

## Security Practices
- Validate and sanitize all user input to prevent XSS attacks.
- Utilize HTTPS for all communications.
- Regularly update dependencies to avoid vulnerabilities.

## Architecture Guidelines
- Follow the single responsibility principle for components and modules.
- Structure the codebase in a modular way to facilitate scalability.
- Use lazy loading for non-essential components to improve loading times.

## Performance Targets
- Aim for a lighthouse performance score of 90+.
- Implement code splitting to reduce initial load time.
- Optimize images using appropriate formats and sizes.

## SEO Requirements
- Ensure proper use of semantic HTML elements.
- Utilize meta tags and important keywords in components.
- Structure content for accessibility and readability.

## Accessibility Standards
- Ensure that all interactive elements are keyboard accessible.
- Use ARIA roles and properties where necessary.
- Ensure color contrast ratios meet WCAG 2.1 guidelines.