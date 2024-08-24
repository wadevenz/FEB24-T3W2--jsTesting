const { niceLogger,messageRepeater } = require("../src/niceLogger.js");

// // Import the file
// const niceLoggerFile = require("../src/.niceLogger.js");
// // Import a specific function from the file
// const niceLoggerFunction = niceLoggerFile.niceLogger;



describe("niceLogger function tests", () => {
	test("niceLogger returns Hello World!", () => {

		expect(niceLogger()).toBe("Hello World!");
	});	

	test("niceLogger returns Hello World!", () => {

		expect(niceLogger()).toBe("Hello World!");
	});	

	test("niceLogger returns Hello World!", () => {

		expect(niceLogger()).toBe("Hello World!");
	});	

	test("niceLogger returns Hello World!", () => {

        niceLogger = jest.fn();
        niceLogger.mockReturnValue("Hello World!");
		expect(niceLogger()).toBe("Hello World!");
	});	
});


describe("messageRepeater function tests", () => {

	test("messageRepeater repeats words correctly", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toEqual("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
        
	});

	test("messageRepeater repeats numbers correctly", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toEqual("111");
        expect(repeatedMessage).toHaveLength(3);
	});

	test("messageRepeater repeats arrays correctly", () => {
        let repeatedMessage = messageRepeater(["hello", "world"]);
        console.log(repeatedMessage);
        expect(repeatedMessage).toStrictEqual(["hello", "world", "hello", "world", "hello", "world"]);
        expect(repeatedMessage).toHaveLength(6);
	});

	test("messageRepeater repeats null or whitespace correctly", () => {
        let repeatedMessage = messageRepeater("");

        expect(repeatedMessage).toEqual("");
        expect(repeatedMessage).toHaveLength(0);
	});
});