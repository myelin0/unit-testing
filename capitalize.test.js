import capitalize from "./capitalize.js"

capitalize
test("capitalise string",()=>{
    const string="hello"
    expect(capitalize(string)).toEqual("Hello")
})