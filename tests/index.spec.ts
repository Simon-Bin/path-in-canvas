import { validateAction, parseSteps } from "../src";

test("valideAction", () => {
  const rightActions = "MLHVCSQTZ";
  for (let b = 1; b < rightActions.length; b++) {
    expect(validateAction(rightActions[b])).toBeTruthy();
  }

  expect(() => {
    validateAction("O");
  }).toThrowError("unknown action: O");
});

test("parseSteps", () => {
  let d = "M 153.2323 334 ";
  expect(parseSteps(d)).toEqual([{ action: "M", num: [153.2323, 334] }]);
  d = "L 153.2323 334 ";
  expect(parseSteps(d)).toEqual([{ action: "L", num: [153.2323, 334] }]);
  d = "V 153.2323 ";
  expect(parseSteps(d)).toEqual([{ action: "V", num: [153.2323] }]);
  d = "H 334 ";
  expect(parseSteps(d)).toEqual([{ action: "H", num: [334] }]);
  d = "C153.1 334.23 151 334 151 334";
  expect(parseSteps(d)).toEqual([
    { action: "C", num: [153.1, 334.23, 151, 334, 151, 334] }
  ]);
  d = "S 151 334 151 334";
  expect(parseSteps(d)).toEqual([
    { action: "S", num: [151, 334, 151, 334] }
  ]);

  d = "Q 151 334 151 334";
  expect(parseSteps(d)).toEqual([
    { action: "Q", num: [151, 334, 151, 334] }
  ]);

  d = "T 151 334";
  expect(parseSteps(d)).toEqual([
    { action: "T", num: [151, 334] }
  ]);
});
