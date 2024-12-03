# InstaBytes

<p align="center">
	<img alt="Nodejs" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white">
	<img alt="Javascript" src="https://img.shields.io/badge/Javascript-0d1b2a?style=for-the-badge&logo=javascript">
	<img alt="ExpressJs" src="https://img.shields.io/badge/express-ffd000?style=for-the-badge&logo=express">
	<img alt="dotenv" src = "https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black"/> 
	<img alt="Mongodb" src = "https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white"/> 
	<img alt="Google Cloud" src = "https://img.shields.io/badge/Google%20Cloud-4285F4.svg?style=for-the-badge&logo=Google-Cloud&logoColor=white"/> 
</p>

<p align="center">
    <img alt="Api response" title="#Api Response" src="./assets\home.png" />
</p>

<h4 align="center"> 
 🤳InstaBytes📲
</h4>

<p align="center">
<a href="#about">About</a> •
<a href="#functionalities">Functionalities</a> •
<a href="#run">Run the project</a> •
<a href="#tecnologies">Tecnologies</a> •
<a href="#license">License</a>
</p>

## 💻 About the project

<p id="about">
InstaBytes is an application developed as part of the Alura Backend Immersion, in partnership with Google Gemini. This project showcases key backend development concepts while leveraging Node.js, Express, and Google Cloud technologies for a scalable and robust application. The main functionality revolves around image uploads and data management, with deployment handled via Google Cloud Run, ensuring scalability and efficiency.
</p>

<p id="functionalities">

## ⚙️ Functionalities

</p>

<p align="center">
    <img alt="Api response" title="#Api Response" src="./assets/response.png" />
</p>
<p align="center">
    <img alt="Api response" title="#Api Response" src="./assets/description.png" />
</p>

- <strong> Image Upload</strong>: Allows image uploads via an API.
- <strong>Image Description and Accessibility</strong>: Google Gemini connection to generate descriptive text and alternative text (alt) for uploaded images, enhancing accessibility and usability.
- <strong>Retrieve All Images</strong>: Fetch all uploaded images and their metadata, such as descriptions and alt text, using the `/posts` endpoint with a GET request.
- <strong>Update Image Details</strong>: Edit or update the description and alt text of a specific image using the `/upload/{id}` endpoint with a PUT request.

<p id="run">
  
## 🏃‍♀️ Run the project
</p>

### 🎲 Run Backend

💡 try the deployed version: https://instabytes-601881814473.southamerica-east1.run.app/posts

```bash

# Clone this repository:
$ git clone git@github.com:Kauanedev/InstaBytes.git

# Access the project folder:
$ cd InstaBytes

# Go to server folder:
$ cd server

# Install dependencies:
$ npm install

# Run the app in the development mode
$ npm run dev

# Server will start on port:3000

```

### 🧭 Run Frontend

```bash

# Clone this repository:
$ git clone git@github.com:Kauanedev/InstaBytes.git

# Access the project folder:
$ cd InstaBytes

# Go to frontend folder:
$ cd frontend

# Install dependencies:
$ npm install

# Run the app in the development mode:
$ npm run start

# Server will start on port:3000 - Open ~ http://localhost:8000 ~ to view it in your browser.

```

#### 🤫.env

To configure the required environment variables, follow these steps:

1. Create a `.env` file in the root of the frontend and server directories.
2. Add the environment variables as shown in the examples below:

##### Server:

```bash
# Port where the server will run
PORT=3000

# MongoDB database connection string
MONGO_DB=mongodb+srv://your_user:password@cluster.mongodb.net/database_name

# API key for Google Gemini integration
GEMINI_API_KEY=your_gemini_key

# Application deployment URL
url_deploy=https://instabytes-601881814473.southamerica-east1.run.app

```

##### Frontend:

```bash
# API URL for frontend requests
API_URL=https://instabytes-601881814473.southamerica-east1.run.app/posts

# or using your local project URL
API_URL=http://localhost:3000/posts

```

<p id="tecnologies">
  
## 🛠️ Tecnologies 
</p>

#### **Server**

- **[NodeJS](https://nodejs.org/en/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Express](https://expressjs.com/)**

#### **Utilities**

- API: **[API](https://instabytes-601881814473.southamerica-east1.run.app)**
- Google Cloud: **[Google Cloud SDK](https://cloud.google.com/sdk/docs?hl=pt-br)**
- Source-Code Editor: **[Visual Studio Code](https://code.visualstudio.com/)**

---

<p id="license">
	
## 📝 License
</p>

This project is under license [MIT](./LICENSE).

Made with 💓 by Kauane Santos 👋 [Contact me!](https://www.linkedin.com/in/kauane-santos-dev/)
