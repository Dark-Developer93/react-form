# ReactJS App

This is a ReactJS app that allows users to log in and complete a form. Admins can also view and create new users. Each user has a folder or sub-collection in the Firebase database with their metadata such as first name, last name, email, and last sign in.

## Prerequisites

Before you begin, make sure you have the following:

- Node.js and npm or yarn installed on your machine.
- A Firebase project with Firestore and authentication set up.

## Getting Started

To get started, clone this repository and install the dependencies:

```commands
git clone https://github.com/Dark-Developer93/react-form.git
cd reactjs-app
npm install # or yarn install
```

Next, create a `.env` file in the root of the project and add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
Finally, start the development server:
```

```commands
npm start # or yarn start
```

The app will be served at `http://localhost:3000`.

## Features

- Login form linked to Firebase authentication
- Two side tabs - one for admin and one called "form" for normal users
- Admin tab is only visible to users with admin permission
- Form tab has a Material-UI form with a set of questions and radio button answers
- Data collected from the submitted form is saved in a new collection in the Firebase database

## Built With

- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Firebase](https://firebase.google.com/) - A cloud-based platform for building and scaling mobile and web apps
- [Material-UI](https://material-ui.com/) - A popular ReactUI framework based on Material Design

## Author

Abdullah Sadaqa

## License

This project is licensed under the MIT License - see the LICENSE file for details.
