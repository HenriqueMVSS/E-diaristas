export const ValidationService = {
  //Validando o cep
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8; //substitui tudo que não for numero por uma string vazia
  },
};
