# Laboratory 4 – To-Do List

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- Zustand – Global state management
- Axios – HTTP requests
- React Router DOM – Page navigation
- Vite – Development server and build tool
- DummyJSON API – Sample user information

## Installation and Setup

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Open the integrated terminal.
4. Install the required dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in the terminal.

## Production Build

To create a production build, run:

```bash
npm run build
```

The generated production files will be placed in the `dist` folder.

## API Information

The application uses the DummyJSON API to retrieve sample user information:

https://dummyjson.com/users/1

Axios handles the HTTP request, while the application displays loading indicators and error messages when retrieving user information.

## Deployment

The application can be deployed using Netlify or another supported hosting platform.

**Netlify Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`