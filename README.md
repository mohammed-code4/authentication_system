# Authentication System

A modern, responsive client-side authentication system built with **React 19**, **TypeScript**, and **Vite**. The application features token-based authentication, persistent session management via **Redux Toolkit**, client-side route protection with **React Router v7**, schema-driven form validation using **React Hook Form** and **Zod**, and an accessible, dark-themed UI styled with **Tailwind CSS v4** and **Base UI** primitives.

---

## 📸 Screenshots

> _Place screenshots of your application in the placeholders below._

| Sign In Page | Sign Up Page |
| :---: | :---: |
| ![Sign In Page](https://via.placeholder.com/600x380?text=Sign+In+Page) | ![Sign Up Page](https://via.placeholder.com/600x380?text=Sign+Up+Page) |

| Protected Dashboard (Home) | Validation & Error States |
| :---: | :---: |
| ![Protected Home](https://via.placeholder.com/600x380?text=Protected+Home+Dashboard) | ![Validation States](https://via.placeholder.com/600x380?text=Form+Validation+Errors) |

---

## 🚀 Features

- **User Registration (Sign Up)**: Complete account creation workflow collecting user name, email, password, age, and phone number with strict validation.
- **User Authentication (Sign In)**: Secure login process authenticating user credentials against the remote backend API.
- **Protected Routes**: Client-side route protection via a dedicated `<ProtectRoutes>` wrapper that guards the dashboard and redirects unauthenticated users to `/sign-in`.
- **Persistent Session State**: Automatic token synchronization with browser `localStorage` ensuring sessions persist across page refreshes and reloads.
- **Session Logout**: One-click logout that clears authentication tokens from both local storage and Redux store state.
- **Dynamic Navigation Bar**: Context-aware header navigation that conditionally toggles between authentication links (Sign In / Sign Up) and the Log Out action based on login status.
- **Schema-Driven Form Validation**: Real-time client-side validation powered by **Zod** and **React Hook Form**, including custom password complexity rules, minimum age checks, and Egyptian phone number regex validation.
- **Inline Error Feedback**: Dynamic error messaging beneath form inputs using custom accessible field components.
- **Interactive Notifications**: Top-centered toast notifications powered by **React Toastify** with a dark theme for API success and error feedback.
- **Modern Dark UI**: Aesthetic dark interface built on **Tailwind CSS v4** and OKLCH color tokens, with accessible UI primitives from **Base UI** and typography from **Inter** and **Geist**.

---

## 🛠️ Technologies & Tools

- **Core & Runtime**:
  - [React](https://react.dev/) (v19)
  - [React DOM](https://react.dev/) (v19)
  - [TypeScript](https://www.typescriptlang.org/) (~v6.0)
  - [Vite](https://vite.dev/) (v8)
- **State Management**:
  - [Redux Toolkit](https://redux-toolkit.js.org/) (`@reduxjs/toolkit` v2)
  - [React Redux](https://react-redux.js.org/) (v9)
- **Routing**:
  - [React Router DOM](https://reactrouter.com/) (v7)
- **Forms & Validation**:
  - [React Hook Form](https://react-hook-form.com/) (v7)
  - [Zod](https://zod.dev/) (v4)
  - [@hookform/resolvers](https://github.com/react-hook-form/resolvers) (v5)
- **HTTP Client**:
  - [Axios](https://axios-http.com/) (v1)
- **UI & Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) (v4) via `@tailwindcss/vite`
  - [@base-ui/react](https://base-ui.com/) (Unstyled, accessible UI primitives)
  - [Class Variance Authority](https://cva.style/) (`class-variance-authority`)
  - [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)
  - [tw-animate-css](https://github.com/marcellop/tw-animate-css)
  - [Lucide React](https://lucide.dev/) (Icons)
  - [@fontsource-variable/inter](https://fontsource.org/fonts/inter) & [@fontsource-variable/geist](https://fontsource.org/fonts/geist)
- **Notifications**:
  - [React Toastify](https://fkhadra.github.io/react-toastify/) (v11)
- **Code Quality**:
  - [ESLint](https://eslint.org/) (v10) with `typescript-eslint`

---

## 📁 Project Structure

```text
authentication_system/
├── public/                     # Static assets (favicon, icons)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── layout/             # Feature-specific layout components
│   │   │   ├── Navbar.tsx      # Top navigation with conditional auth links
│   │   │   ├── SignInForm.tsx  # Sign In form handling and submission
│   │   │   └── SignUpForm.tsx  # Sign Up form handling and submission
│   │   └── ui/                 # Reusable UI primitives (Base UI + CVA)
│   │       ├── Button.tsx      # Button component with variant options
│   │       ├── Card.tsx        # Card container, header, content, footer
│   │       ├── Input.tsx       # Text and password input fields
│   │       ├── Label.tsx       # Accessible form labels
│   │       ├── field.tsx       # Form field wrappers, legends, error displays
│   │       └── separator.tsx   # Divider primitive
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn class merger)
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.tsx        # Protected dashboard landing page
│   │   ├── Layout/
│   │   │   └── Layout.tsx      # Main application layout wrapper (<Outlet />)
│   │   ├── ProtectRoutes/
│   │   │   └── ProtectRoutes.tsx # Route guard checking authentication token
│   │   ├── SignIn/
│   │   │   └── SignIn.tsx      # Sign In page view
│   │   └── SignUp/
│   │       └── SignUp.tsx      # Sign Up page view
│   ├── schema/                 # Zod validation schemas
│   │   ├── SigninSchema.ts     # Schema for user login
│   │   └── SignupSchema.ts     # Schema for user registration
│   ├── store/                  # Redux Toolkit state configuration
│   │   ├── authSlice.ts        # Auth slice (reducers, state, extraReducers)
│   │   ├── authThunks.ts       # Async thunks for signUpUser and signInUser
│   │   └── index.ts            # Central Redux store configuration
│   ├── types/                  # Inferred TypeScript type definitions
│   │   ├── signinType.type.ts  # Inferred SigninType from Zod
│   │   └── signupType.type.ts  # Inferred SignupType from Zod
│   ├── index.css               # Tailwind CSS v4 setup, theme tokens & fonts
│   └── main.tsx                # Application entry point, router, store provider
├── components.json             # Shadcn component configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry template (dark mode default)
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # Root TypeScript configuration
├── tsconfig.app.json           # Application TypeScript configuration
└── vite.config.ts              # Vite configuration with Tailwind CSS plugin & path alias
```

---

## 🔐 Authentication

The application implements client-side JWT-based authentication integrated with Redux Toolkit and `localStorage`:

### Authentication State Management
The `authSlice` (`src/store/authSlice.ts`) tracks the following state:
- `token`: The authentication token string or `null`.
- `loading`: Boolean flag reflecting asynchronous request progress (disables submit buttons and shows loading text during requests).
- `error`: Error message string returned from failed API responses.
- `success`: Success message string returned upon completed operations.

### Sign Up Flow
1. The user fills out the registration form in `SignUpForm.tsx`.
2. Form fields are validated client-side against `signupSchema`.
3. An age validation check ensures the user is at least 18 years old.
4. The component dispatches the `signUpUser` async thunk with the sanitized user payload.
5. On `signUpUser.fulfilled`, a success toast notification appears, the form resets, and the user is redirected to `/sign-in`.

### Sign In Flow
1. The user provides their credentials in `SignInForm.tsx`.
2. Client-side validation is performed using `signinSchema`.
3. The component dispatches the `signInUser` async thunk with email and password.
4. On `signInUser.fulfilled`, the response token is stored in both the Redux state and `localStorage`.
5. A success toast notification is displayed, the form resets, and the user is redirected to `/`.

### Token Handling & Persistence
- **Storage**: Upon successful sign in, the token is saved to `localStorage` under the key `"token"`.
- **Initialization**: When the application loads, `initialState` in `authSlice` retrieves the token via `localStorage.getItem("token") || null`.
- **Destruction**: When logging out, `localStorage.removeItem("token")` removes the stored token.

### Protected Routes
- The `ProtectRoutes` component (`src/pages/ProtectRoutes/ProtectRoutes.tsx`) reads the `token` from the Redux store (`state.auth.token`).
- If no token exists, the user is immediately redirected to `/sign-in` via React Router's `<Navigate to={"/sign-in"} />`.
- If a valid token is present, the child component (`<Home />`) is rendered.

### Logout Flow
- Handled via the "Log Out" button in `Navbar.tsx`.
- Dispatches the `logout` action from `authSlice`.
- The reducer removes the token from `localStorage`, resets all auth slice state properties (`token`, `loading`, `error`, `success`) back to `null` or `false`, and triggers an informational toast notification.

---

## 🌐 API Integration

The project communicates with a RESTful backend API using **Axios** within Redux Toolkit asynchronous thunks (`createAsyncThunk` in `src/store/authThunks.ts`).

### Base Endpoint
```text
https://note-sigma-black.vercel.app/api/v1/users
```

### Main API Operations

| Operation | Method | Endpoint | Request Payload | Description |
| :--- | :---: | :--- | :--- | :--- |
| **Sign Up** | `POST` | `/signUp` | `{ name, email, password, age, phone }` | Registers a new user account. |
| **Sign In** | `POST` | `/signIn` | `{ email, password }` | Authenticates existing user and returns JWT token. |

### Error & Response Handling
- Network requests are encapsulated in `try...catch` blocks within the thunks.
- Errors extract the server-provided error payload using `rejectWithValue(error.response?.data || "Something went wrong")`.
- Components listen to state changes (`error` and `success`) via `useEffect` hooks and present real-time toast alerts using `react-toastify`.

---

## 📝 Form Validation

Forms are built using **React Hook Form** paired with **Zod** schema validation via `@hookform/resolvers/zod`.

### Validation Rules

#### Sign In (`src/schema/SigninSchema.ts`)
- **`email`**: Must be a valid email format (`zod.email("Email not valid")`).
- **`password`**: Must be 6 to 12 characters long and contain at least one uppercase letter (Regex: `/^(?=.*[A-Z])\S{6,12}$/`).

#### Sign Up (`src/schema/SignupSchema.ts`)
- **`name`**: String with a minimum of 4 characters and a maximum of 30 characters.
- **`email`**: Must be a valid email format (`zod.email("Email not valid")`).
- **`password`**: Must be 6 to 12 characters long and contain at least one uppercase letter (Regex: `/^(?=.*[A-Z])\S{6,12}$/`).
- **`age`**: String schema combined with a form-level check ensuring numeric age is $\ge 18$.
- **`phone`**: Egyptian mobile phone number validation (Regex: `/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/`) requiring prefixes starting with 010, 011, 012, or 015.

### Error Display
Validation errors are extracted from React Hook Form's `formState.errors` and presented directly below the relevant input field using the `<FieldError>` component.

---

## 🎨 UI & Styling

- **Tailwind CSS v4**: Utilizes the modern Tailwind CSS v4 engine configured with `@tailwindcss/vite` and `@theme inline` design tokens.
- **OKLCH Color Palettes**: Semantic color tokens configured in `src/index.css` using the OKLCH color space for both light and dark modes (`--background`, `--foreground`, `--card`, `--primary`, `--destructive`, `--ring`, etc.).
- **Default Dark Mode**: Configured directly in `index.html` via `<html class="dark">` for an immersive, high-contrast dark theme.
- **Accessible Components**: UI primitives created with `@base-ui/react` and styled using `class-variance-authority` (CVA) for scalable variant support.
- **Micro-Animations**: Uses `tw-animate-css` for smooth UI transitions and state changes.
- **Typography**: Variable typefaces imported from `@fontsource-variable/inter` and `@fontsource-variable/geist`.

---

## 📦 Installation

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/mohammed-code4/authentication_system.git
cd authentication_system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript (`tsc -b`) and generates the production bundle with Vite. |
| `npm run preview` | Runs a local web server to preview the production build output. |
| `npm run lint` | Analyzes code for issues using ESLint. |

---

## 👨‍💻 Author

- **Mohammed Hussein**
  - LinkedIn: [mohammed-hussein-9503a7410](https://www.linkedin.com/in/mohammed-hussein-9503a7410/)
  - GitHub: [@mohammed-code4](https://github.com/mohammed-code4)
