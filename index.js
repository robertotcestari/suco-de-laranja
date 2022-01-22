#!/usr/bin/env node

var inquirer = require("inquirer");
const sucoDeLaranja = require("./sucoDeLaranja");

const choices = [
    { name: "Suco de Caju", value: "suco-de-laranja-3" },
    {
        name: "Por do sol, suco de laranja, f***-se as regras",
        value: "suco-de-laranja-1",
    },
    { name: "Suco de Laranja (versão Gabriel)", value: "suco-de-laranja-2" },
];
console.log(' ')

console.log('= = = = = = =')
console.log('Feito carinhosamente para Turma XP - Trybe')
console.log('= = = = = = =')
console.log(' ')
inquirer
  .prompt([
    {
      type: "list",
      name: "name",
      message: "Qual suco?",
      choices,
    },
  ])
  .then(({ name }) => {
    if (!module.parent) {
      sucoDeLaranja(name);
    }
  })
  .catch((error) => {
    console.log("Ops... aconteceu alguma coisa errada com seu suco!");
  });
