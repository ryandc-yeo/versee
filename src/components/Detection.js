import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Detection(props) {
    const {
        image
    } = props;
    
    const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient({keyFilename});

    const imagePath = "./Korean_Sign_-_No_Parking_or_Stopping_1.jpg";

    console.log(process.env.APIKEY)

    // Call the detectText function to extract the text from the image
    async function detectText() {
        try {
            const [result] = await client.textDetection(imagePath);
            const detections = result.textAnnotations;
            const text = detections[0].description;
            const detectedLanguage = detections[0].locale;
            console.log(`Detected language: ${detectedLanguage}`);
            console.log(`Text: ${text}`);
        } catch (err) {
            console.error(err);
        }
    }
    
    detectText();
}

Module.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Detection;