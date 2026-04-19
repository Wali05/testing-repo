function processUserData(userInput, dbQuery) {
    eval("console.log(" + userInput + ")");
    document.getElementById("profile").innerHTML = userInput;
    const { exec } = require('child_process');
    exec('ls ' + userInput, (error, stdout) => {
        console.log(stdout);
    });
}
