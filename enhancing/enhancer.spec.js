const enhancer = require('./enhancer.js');
// test away!
const a = {
    name: "staff",
    durability: 15,
    enhancement: 13
}

const b = {
    name: "sword",
    durability: 60,
    enhancement: 5
}

const c = {
    name: "axe",
    durability: 50,
    enhancement: 16
}

const d = {
    name: "wand",
    durability: 20,
    enhancement: 20
}

const e = {
    name: "kitchen knife",
    durability: 5,
    enhancement: 0
}

describe("repair", () => {
    it("enhances item to 100 durability", () => {
        const expectedOutput = 100;
        const actualOutput = enhancer.repair(a);
        expect(actualOutput.durability).toBe(expectedOutput);
    })
});

describe("success",() => {
    test("does not enhance item at 20 enhancement", () => {
        const expectedOutput = 20;
        const actualOutput = enhancer.success(d);
        expect(actualOutput.enhancement).toBe(expectedOutput);
    })
    test("enhances by 1 if under 20 enhancement", () => {
        const expectedOutput = 14;
        const actualOutput = enhancer.success(a);
        expect(actualOutput.enhancement).toBe(expectedOutput);
    })

})

describe("fail", () => {
    test("decrease by 5 if enhancement < 15", () => {
        const expectedOutput = 55;
        const actualOutput = enhancer.fail(b);
        expect(actualOutput.durability).toBe(expectedOutput);
    })

    test("decrese by 10 if enhancement = 16", () => {
        const expectedOutput = 40;
        const actualOutput = enhancer.fail(c);
        expect(actualOutput.durability).toBe(expectedOutput);
    })
})

describe("get", () => {
    test("modifies name with prefix enhancement level when enhancement > 0", () => {
        const expectedOutput = "[+16] axe";
        const actualOutput = enhancer.get(c);
        expect(actualOutput.name).toBe(expectedOutput);
    })

    test("does not modify name if enhancement = 0", () => {
        const expectedOutput = "kitchen knife";
        const actualOutput = enhancer.get(e);
        expect(actualOutput.name).toBe(expectedOutput)
    })
})