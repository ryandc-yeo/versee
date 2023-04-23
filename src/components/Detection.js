import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Detection(props) {
    const {
        image
    } = props;
    
    const keyFilename = process.env;

    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient({keyFilename});

    // const [result] = client.textDetection({image});
    const [result] = client.textDetection('./sample.jpeg');

    console.log(process.env.APIKEY)
    // Call the detectText function to extract the text from the image
    async function detectText() {
        const [result] = await client.textDetection(imagePath);
        const detections = result.textAnnotations;
        console.log('Text:');
        detections.forEach(text => console.log(text.description));
    }
    
    detectText();


    // client
    //     .labelDetection({image})
    //     .then((results) => {
    //         const labels = results[0].labelAnnotations;

    //         console.log('Labels:');
    //         labels.forEach((label) => console.log(label.description));
    //     })
    //     .catch((err) => {
    //         console.error("ERROR:", err);
    // });
}

Module.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Detection;