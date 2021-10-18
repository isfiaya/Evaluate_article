// Import the js file to test
import { getData } from "../src/client/js/formHandler";

describe("Testing REQUEST POST DATA TO THE SERVER", () => {
    test("Testing the getData() function", () => {
        expect(getData).toBeDefined();
    })
})