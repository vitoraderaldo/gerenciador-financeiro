test("Aprendendo principais assertivas do jest", () => {
   let number = null;
   expect(number).toBeNull();
   number = 3;
   expect(number).not.toBeNull();
   expect(number).toBe(3);
   expect(number).toEqual(3);
   expect(number).toBeGreaterThan(2);
});

test("Trabalhando com objetos", () => {
   const obj = { name: "John", mail: "john@email.com" };
   expect(obj).toHaveProperty("name");
   expect(obj).toHaveProperty("name", "John");
   const obj2 = { name: "John", mail: "john@email.com" };
   expect(obj).toEqual(obj2);
});
