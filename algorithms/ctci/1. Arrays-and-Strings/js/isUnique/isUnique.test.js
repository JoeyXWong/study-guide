import isUnique from './isUnique';
[
    "54321",
    "",
    "abcd",
    "bvcde5316"
].forEach((elem) => test(`String: "${elem}" is unique`, () => {
    expect(isUnique(elem)).toEqual(true);
}));

[
    "112345",
    "abcdd",
    "bdca4366",
    "jgdfopbrngkndfblnjbh"
].forEach((elem) => test(`String: "${elem}" is not unique`, () => {
    expect(isUnique(elem)).toEqual(false);
}));





