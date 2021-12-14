import { add } from "./math.js";

describe("some clever maths functions", () => {
    test("can add two numbers", () => {
        expect(add(1, 2)).toEqual(3);
    })
});