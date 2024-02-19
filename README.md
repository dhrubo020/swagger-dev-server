# Swagger-dev-server

# Effortlessly hot reload your Swagger API documentation during development!

Swagger-dev-server streamlines the development process for users working with Swagger API Documentation (specially in [NestJS](https://nestjs.com/)). It seamlessly integrates with your backend development server to provide:

-   **Seamless Live Updates:** Experience lightning-fast updates to your API documentation whenever you make changes to the source files. No more manual refreshes or delays!
-   **Effortless Integration:** Works seamlessly with your existing Swagger setup, eliminating the need for additional configuration or infrastructure.
-   **Enhanced Productivity:** Focus on code improvements and iteration rather than wasting time on manual doc updates. Hot reloading keeps your documentation in sync, streamlining your workflow.
-   **Improved Developer Experience:** Say goodbye to tedious manual refreshes and enjoy a smoother, more efficient development experience.

## Getting Started:

1. **Install the package:**

    ```bash
    npm install --save-dev swagger-dev-server
    or
    yarn add -D swagger-dev-server
    ```

2. **Create a `.env` file:**

    Create a `.env` file (if not already present) in your project's root directory and define the following environment variables:

    ```bash
    API_SYNC_FILES=./src/**/*.ts
    RELOAD_DELAY=5000
    API_DOCUMENTATION_PORT=3081 # Documentation will run on this port
    PORT=3000	# Server port
    API_PATH=   # Optional path prefix for the API documentation URL.
    ```

3. **Add a start command in your package.json script to run it:**

    ```bash
    "start:swagger":  "node ./node_modules/swagger-dev-server"
    ```

4. **After running the backend server, execute the below command in a separate terminal:**

    ```bash
    npm run start:swagger
    or
    yarn start:swagger
    ```

# Instant Updates for Swagger Documentation

Enjoy instant updates to your Swagger documentation and focus on what matters most - building amazing APIs!

## Additional Notes:

-   Ensure your backend development server is running and serving the API documentation at the specified port.
-   Customize the environment variables as needed to match your project's configuration.

By leveraging swagger-dev-server, Swagger users can significantly enhance their development efficiency and experience a more streamlined workflow. Say goodbye to manual refreshes and hello to a more productive and enjoyable development process!

-   Author: [Dhrubo](https://www.linkedin.com/in/dnsdhrubo/)
