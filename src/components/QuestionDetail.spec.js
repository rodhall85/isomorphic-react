describe("Question detail", () => {
    beforeEach(() => {
        console.log("beforeEach");
    });

    beforeAll(() => {
        console.log("beforeAll");
    });

    it("should not regress", () => {
        expect(42).toEqual(42);
    });

    it("should not regress either", () => {
        expect(43).toEqual(43);
    });
});