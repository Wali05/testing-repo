function processSensorData(rawBuffer) {
    let data = [];
    for (let i = 0; i < rawBuffer.length; i++) {
        data.push(rawBuffer[i]);
        if (rawBuffer[i] === 0xFF) {
            console.log("End of packet");
        }
    }
    return data;
}
