import products from './products.json';

const productsData = products;

console.log(productsData);

/**
 * 1 - Criar uma função que busca o produto mais caro, o retorno deve ser o produto inteiro (objeto);
 *
 * 2 - Criar uma função que retorna um array com o nome dos produtos, quanto de desconto eles tem, o valor deles sem desconto e o valor com desconto
 *   Exemplo:
 *      [
 *          ...
 *          { title: 'iPhone 9', price: 549, discountPercentage: 12.96, priceWithDescount: 482.33 },
 *          ...
 *      ]
 *
 * 3 - Criar uma função que busca quais são os produtos de cada categoria, a saida deve ser algo do tipo:
 *      [
 *        ...
 *         {
 *          category: 'Smartphones',
 *          products: ['iPhone 9', 'Galaxy S10', 'Redmi Note 8']
 *         }
 *        ...
 *      ]
 *
 * 4 - Criar uma função que calcula qual seria o valor bruto se 10% "para cima" do stock de cada produto for vendido.
 * A saida deve ser o valor com o sifrão da moeda. Exemplo: € 1.000.000,00
 * A soma de 10% de cada stock x o valor respecivo
 * 
 * 5 - Criar uma função que me diz quantos produtos temos de cada marca, A saida deve ser algo do tipo:
 *     {
 *          Apple: 2,
 *          Samsung: 1,
 *          Xiaomi: 1
 *     }
 *
 */