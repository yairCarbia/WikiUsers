
const xlsx = require("xlsx");
const axios = require("axios");
const workbook = xlsx.readFile("base.xlsx");
const workSheet = workbook.Sheets["Hoja1"];
const arrUsers = xlsx.utils.sheet_to_json(workSheet);
const { subirUsuariosGraphQL, editarUsuariosGraphQL } = require("./querys")

// console.log(arrUsers)
editarUsuariosGraphQL(arrUsers);
// subirUsuariosGraphQL(arrUsers);
