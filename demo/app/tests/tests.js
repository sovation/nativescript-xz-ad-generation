var XzAdGeneration = require("nativescript-xz-ad-generation").XzAdGeneration;
var xzAdGeneration = new XzAdGeneration();

describe("greet function", function() {
    it("exists", function() {
        expect(xzAdGeneration.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(xzAdGeneration.greet()).toEqual("Hello, NS");
    });
});