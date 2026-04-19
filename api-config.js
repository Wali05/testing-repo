const config = {
    apiKey: "AIzaSyB-8374920-GHEI-928374", // VULNERABILITY: Hardcoded API Key
    dbPassword: "admin_password_123",      // VULNERABILITY: Hardcoded Credentials
    environment: "production"
};

function connect() {
    console.log("Connecting to production with key: " + config.apiKey);
}
