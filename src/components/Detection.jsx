const vision = require('@google-cloud/vision');
const client = vision.ImageAnnotatorClient({
    keyFilename: process.env.APIKEY,
});

client
    .labelDetection('./Korean_Sign_-_No_Parking_or_Stopping_1.jpg')
    .then((results) => {
        const labels = results[0].labelAnnotations;

        console.log('Labels:');
        labels.forEach((label) => console.log(label.description));
    })
    .catch((err) => {
        console.error("ERROR:", err);
});

function Default() {
    return (
        <div>
            hi
        </div>
    );
}

export default Detection;