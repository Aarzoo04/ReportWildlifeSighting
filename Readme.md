# Report Wildlife Sighting

## Overview
Report Wildlife Sighting is a web application designed to help users report and track sightings of wildlife, specifically focusing on tigers. The application allows users to submit information about their sightings, including location, identification, and images, to contribute to wildlife conservation efforts.

## Features
- **User Registration and Login**: Secure user authentication to enable personalized tracking of reports.
- **Sighting Submission**: Users can report wildlife sightings by providing details such as location, Animal ID, and images.
- **Database Integration**: Uses MongoDB to store user data and wildlife sighting reports.
- **Responsive Design**: Built with HTML/CSS for a user-friendly interface that works on various devices.

## Note : 

Our current project is for Tigers only (Animal here refers to Tiger)

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for storing user data and sightings
- **Libraries**: Mongoose for MongoDB object modeling

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Aarzoo04/ReportWildlifeSighting.git
    cd ReportWildlifeSighting
    ```

2. **Set up a virtual environment (Optional)**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install required packages**:
    ```bash
    npm install
    ```

4. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your MongoDB connection string:
   `Mongo_URI= your_mongodb_connection_string`


5. **Run the application**:
 ```bash
 npm run start
 ```

6. **Access the application**:
Open your browser and navigate to `http://127.0.0.1:5000/` to use the app.

## Usage
1. Register or log in to your account.
2. Add new tiger sightings by filling in the required details `Tiger ID, Location and uploading images.`
3. View and manage all reported tiger sightings in the application.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## Acknowledgments
- Special thanks to all contributors and wildlife conservation organizations for their efforts in protecting our natural environment.


