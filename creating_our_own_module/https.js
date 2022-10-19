const request = require("./request");
const response = require("./response");

function makeReques(url, data) {
  request.send(url, data);
  return response.read();
}

const responseData = makeReques("https://www.google.com", "hello");

console.log(responseData);  //sending encrypted data to https://www.google.com
                            // decrypted data
