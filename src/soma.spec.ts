import soma from './soma'

describe("Somar dois numeros", () => {
  
  it("Espero 2 + 2 seja igual a 4", () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });

  it("Espero que 2 + 2 NÃO seja igual a 5", () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(5);
  })

})
