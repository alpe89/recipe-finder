# Recipe Pilot

The best recipes app… ever!

## Setup and Run

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd recipe-finder
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    Then open your browser at `http://localhost:5173` (or whatever port appears in the terminal).

## Tools and Libraries Used

- **React:** My goto library for frontend work
- **TypeScript:** I rarely write React without TypeScript
- **Tailwind CSS:** Used the newest (v4) in this project
- **Vite:** Faster and easier than traditional bundlers preferred over Next.js for this POC
- **MSW:** Simulates a backend by intercepting and mocking network requests it is super convenient
- **TanStack Router:** A solid router library I’ve used successfully in production

## Assumptions and Design Decisions

- This is a quick POC, so I skipped CI/CD and deployment details
- The design is intentionally minimal but responsive across all screen sizes
- I used a Domain Driven Design structure, with each domain (Recipe, Search, and Favourites) storing its own components, hooks, and services
- I prioritized full feature implementation over early unit testing (hence the commit history); some tests were added later just to cover basic functionality
