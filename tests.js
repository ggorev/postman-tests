// Successful POST request
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});

// Successful GET request
pm.test("Successful GET request", function () {
    pm.response.to.have.status(200);
});

// Set variable
pm.test("Set variable", function () {
    var jsonData = pm.response.json();
    //console.log('This is our jsonData', jsonData.jwt)
    pm.collectionVariables.set("jwt", jsonData.jwt);
    //console.log('This is our jsonData', jsonData.refreshToken)
    pm.collectionVariables.set("refreshToken", jsonData.refreshToken);
});

// Body is correct
pm.test("Body is correct", function () {
    pm.response.to.have.jsonBody("jwt" && "refreshToken");
});

// Test data type of the response
pm.test("Test data type of the response", () => {
    var jsonData = pm.response.json();
    pm.expect(jsonData.jwt).to.be.a("string");
    pm.expect(jsonData.refreshToken).to.be.a("string");
});

// Test keys of the response
pm.test("Test keys of the response", () => {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0]).to.have.all.keys('id', 'archiveStatus', 'comment');
});

// Value of...
pm.test("Value of 'archiveStatus'", function () {
    var jsonData = pm.response.json();
    pm.expect(["ON_APPROVAL", "APPROVED", "DECLINE"]).to.include(jsonData[0].archiveStatus);
});




