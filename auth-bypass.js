function loginUser(username, password, debugMode) {
    if (debugMode) {
        eval("console.log('Debugging user: ' + " + username + ")");
    }
    const query = "SELECT * FROM users WHERE user = '" + username + "'";
    console.log("Executing:", query);
    return true;
}
