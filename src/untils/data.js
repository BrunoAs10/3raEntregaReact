import chiles from '../imagenes/chiles.jpg'
import nachos from '../imagenes//nachos.jpg'
import tabasco from '../imagenes//tabasco.jpg'
import tortillaBurrito from '../imagenes/tortillaburrito.jpg'
import salsaValentina from '../imagenes/valentina.jpg'
import tortillaMaiz from '../imagenes/tortilla maiz.jpg'
import tortillaTrigo from '../imagenes/tortillatrigo.png'
import mezcal from '../imagenes/mezcal.jpg'
import tequila from '../imagenes/tequila.jpg'
import aguardiente from '../imagenes/aguardiente.jpg'

export const data = [
     {
        id: 1,
        nombre: "Chiles Varios",
        cantidad: 1,
        desc:"Jalapeños, Habaneros x100g",
        precio: 1200,
        img: chiles,
        catID: 1,
        stock: "Producto disponible",
      },
      {
        id: 2,
        nombre: "Nachos",
        cantidad: 1,
        desc: "Nachos de Harina de maiz x250g",
        precio: 1500,
        img: nachos,
        catID: 1,
        stock: "Producto disponible",

      },
      {
        id: 3,
        nombre: "Salsa Tabasco",
        cantidad: 1,
        desc: "Salsa Picante Tabasco bot. 100ml",
        precio: 1570,
        img: tabasco,
        catID: 3,
        stock: "100 unidades",
      },
      {
        id: 4,
        nombre: "Tortillas Burrito",
        cantidad: 1,
        desc: "Tortillas de Harina de Trigo x10 unidades",
        precio: 1000,
        img: tortillaBurrito,
        catID: 1,
        stock: "200 unidades",
      },
      {
        id: 5,
        nombre: "Salsa Valentina",
        cantidad: 1,
        desc: "Salsa Picante Valentina",
        precio: 1200,
        img: salsaValentina,
        catID: 3,
        stock: "100 unidades",
      },
      {
        id: 6,
        nombre: "Tortilla Maiz",
        cantidad: 1,
        desc: "Tortilla De Harina de Maiz x10 unidades",
        precio: 1200,
        img: tortillaMaiz,
        catID: 1,
        stock: "400 unidades",
      },
      {
        id: 7,
        nombre: "Tortilla Trigo",
        cantidad: 1,
        desc: "Tortilla de harina de Trigo x10 unidades",
        precio: 1400,
        img: tortillaTrigo,
        catID: 1,
        stock: "200 unidades",
      },
      {
        id: 8,
        nombre: "Mezcal",
        cantidad: 1,
        desc: "Mezcal Ojo de Tigre botella 1L",
        precio: 1200,
        img: mezcal,
        catID: 2,
        stock:" 50 unidades",
      },
      {
        id: 9,
        nombre: "Tequila",
        cantidad: 12,
        desc:"Tequila José Cuervo Botella 750ml",
        precio: 1400,
        img: tequila,
        catID: 2,
        stock:" 72 unidades",
      },
      {
        id: 10,
        nombre: "Aguardiente",
        cantidad: 3,
        desc: "Aguardiente Antioqueño botella 750ml",
        precio: 1200,
        img: aguardiente,
        catID: 2,
        stock:" 27 unidades",
      }
]