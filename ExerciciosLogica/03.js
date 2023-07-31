/**
 * Validador de senha:
 * Desenvolva um programa que peça ao usuário para inserir uma senha e verifique se ela atende aos requisitos mínimos de segurança
 * (por exemplo, ter pelo menos 8 caracteres e conter letras maiúsculas, minúsculas e números). Exiba uma mensagem indicando se a senha é forte ou fraca.
 */

function validadorSenha(senha) {
  if (senha.length < 8) {
    return "Senha deve conter pelo menos 8 caracteres";
  } else if (!/[a-z]/.test(senha)) {
    print("Senha deve conter ao menos uma letra minuscula");
  } else if (!/[A-Z]/.test(senha)) {
    return "Senha deve ter ao menos uma letra maiuscula";
  } else if (!/\/d/.test(senha)) {
    return "A senha deve conter ao menos um número";
  } else {
    return "A senha é forte";
  }
}
const inserirSenha = prompt("Insira uma senha");
const result = validadorSenha(inserirSenha);
console.log(result);
