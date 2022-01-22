#!/usr/bin/env node

var inquirer = require("inquirer");
const sucoDeLaranja = require("./sucoDeLaranja");

const choices = [
  { name: "Suco de Laranja, Hã, Hã...", value: "suco-de-laranja-2" },
  { name: "Suco de Caju", value: "suco-de-laranja-3" },
  {
    name: "Por do sol, suco de laranja, f***-se as regras",
    value: "suco-de-laranja-1",
  },
];

inquirer
  .prompt([
    {
      type: "list",
      name: "name",
      message: "Qual suco?",
      choices,
    },
  ])
  .then(({name}) => {

    if (!module.parent) {
      sucoDeLaranja(name);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

