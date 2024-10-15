const fs = require('fs');
const dataFilePath = './products.json';

// Função para ler os dados do arquivo JSON
function loadData() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Função para salvar os dados no arquivo JSON
function saveData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

let products = loadData();  // Carrega os produtos do arquivo

// Exemplo de criação de um produto
function addProduct(product) {
  products.push(product);
  saveData(products);
}

// Exemplo de uso:
addProduct({ title: 'Teste', price: 1 });
