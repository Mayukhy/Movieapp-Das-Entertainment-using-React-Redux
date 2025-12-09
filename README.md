# Movieapp

TMDB API is used here 

Link Of This Project :
https://dasentertainment.netlify.app/

# Screenshots
1
![TheMovieApp - Google Chrome 7_4_2023 4_10_00 PM](https://github.com/Mayukhy/Movieapp-Das-Entertainment-using-React-Redux/assets/107027766/8060c44c-14a1-47be-a263-8f2dcd76b92b)

2
![TheMovieApp - Google Chrome 7_4_2023 4_11_06 PM](https://github.com/Mayukhy/Movieapp-Das-Entertainment-using-React-Redux/assets/107027766/f0b04975-615e-4963-90d6-52b5212222a6)

3
![TheMovieApp - Google Chrome 7_4_2023 4_10_56 PM](https://github.com/Mayukhy/Movieapp-Das-Entertainment-using-React-Redux/assets/107027766/84552dde-2f4f-45e6-8668-deee2ef4df17)

4
![TheMovieApp - Google Chrome 7_4_2023 4_10_38 PM](https://github.com/Mayukhy/Movieapp-Das-Entertainment-using-React-Redux/assets/107027766/a5709a43-0278-4126-93cb-d55b822fbb8d)

---

## Docker Setup

Use the following Dockerfile commands to build and run the app in a container:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# # Copy source code
# COPY . .

# Copy only necessary source files
COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./
COPY vite.config.js ./
COPY .env ./

# # Copy .env file to make environment variables available during build
# COPY .env .env

# Build the application with environment variables
RUN npm run build

# Install a simple HTTP server to serve the built files
RUN npm install -g serve

# Expose port 5173
EXPOSE 5173

# Serve the built application with disabled clipboard
CMD ["serve", "-s", "dist", "-l", "5173", "--no-clipboard"]
```

### Build and run

```bash
# Build the image
docker build -t movieapp .

# Run the container on port 5173
docker run -p 5173:5173 movieapp
```
