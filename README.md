# General

- Names of components folder can be simples unlike components themselves (e.g. Home>components>banner>HomeBanner.tsx)

#

# App/Pages folder

- Root pages structure based on routes logic
- No logic (PUT, POST, DELETE) components
- Fetch data is posible (avoid: search, filter, pagination or modal/CRUD, ONLY shared context & redux)
- Bussiness logic
- Module management
- May have components folder (ONLY one level of complexity)

#

# features

- Use to group related components and logic for specific functionalities or use cases
- index.ts => only export components
- Less visual components posibble

#

# Helpers folder

- This folder typically contains small, project-specific utility functions or modules that assist in specific tasks within the application

#

# Lib folder

- This folder is generally reserved for more generic, reusable code that could potentially be shared across different projects

#

# Utils folder

- This folder is intended for small, general-purpose, stateless functions or snippets that are widely used across the project and promote code reusability.
