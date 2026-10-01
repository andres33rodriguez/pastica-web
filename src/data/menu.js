import rabodetoro from '../assets/platos/rabodetoro.jpg';
import pistachona from '../assets/platos/pistachona.jpg';
import tequenosqueso from '../assets/carta/tequenosqueso.jpg';
import tequenospizza from '../assets/carta/tequenospizza.jpg';
import saquitoscroccante from '../assets/carta/saquitoscroccante.jpg';
import carpicciosa from '../assets/carta/carpicciosa.jpg';
import salamemio from '../assets/carta/salamemio.jpg';
import focacciacarbonara from '../assets/carta/focacciacarbonara.jpg';
import focacciavegetariana from '../assets/carta/focacciavegetariana.jpg';
import carbopastica from '../assets/carta/carbopastica.jpg';
import mrsbolognesa from '../assets/carta/mrsbolognesa.jpg';
import allanorma from '../assets/carta/allanorma.jpg';
import gnocchisima from '../assets/carta/gnocchisima.jpg';
import frivoleza from '../assets/carta/frivoleza.jpg';

// Chip icon shorthand: { icon, text }
const glutenFree = (price) => ({ icon: '🌾', text: `Sin gluten ${price}` });

export const CATEGORIES = [
  { id: 'entrantes', label: 'Entrantes' },
  { id: 'alguito-mas', label: 'Alguito más' },
  { id: 'pastas', label: 'Pastas' },
  { id: 'postres', label: 'Postres' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'menu-del-dia', label: 'Menú del día' },
];

export const ENTRANTES = [
  {
    name: 'Provoleta',
    price: '10,90€',
    desc: 'Queso provolone ahumado en salsa ragú a la bolognesa gratinado con queso parmigiano con focaccia perfecta para dipear.',
  },
  {
    name: 'Croquetas Carbonara',
    price: '7,90€',
    desc: 'La croqueta que se cree italiana pero lleva toda la vida en tu corazón.',
  },
  {
    name: 'Croquetas de Rabo de Toro',
    price: '7,90€',
    desc: 'Esto no es una croqueta. Esto es un abrazo de abuela convertido en fritura. Guiso de toda la vida con forma de bocado perfecto.',
    photo: rabodetoro,
  },
  {
    name: 'Croquetas de Cheddar y Jalapeños',
    price: '7,90€',
    desc: 'Para los que piensan que Italia necesitaba un poco más de fuego. Cuidado: pican. Y no nos arrepentimos.',
  },
  {
    name: 'Focaccia al Ajo',
    price: '3,50€',
    desc: 'Tiras de focaccia con mantequilla y ajo. Un vicio sin culpa.',
  },
  {
    name: 'Focaccia de la Casa',
    price: '2,50€',
    desc: 'Tiras de focaccia artesanal recién horneadas con aceite de oliva.',
  },
  {
    name: 'Tequeños de Queso',
    price: '7,90€',
    desc: 'Masa crujiente rellena de queso fundido. Aviso: generan dependencia.',
    photo: tequenosqueso,
  },
  {
    name: 'Tequeños de Pizza',
    price: '7,90€',
    desc: 'Tequeños versión pastica: con queso, pomodoro y el toque perfecto de hierbas italianas.',
    photo: tequenospizza,
  },
  {
    name: 'Saquitos Croccante',
    price: '10,90€',
    desc: 'Saquitos de pera fritos, con nuestra cremosa salsa de queso gorgonzola, y con un toque de miel y nueces. Una verdadera explosión de sabores.',
    photo: saquitoscroccante,
  },
  {
    name: 'Berenjenitas',
    price: '6,50€',
    desc: 'Berenjenas crujientes acompañadas de nuestra salsa pomodoro y queso parmigiano.',
  },
  {
    name: 'Burrata & Friends',
    price: '16,00€',
    desc: 'Una burrata XL rodeada de sus mejores amigos: mortadela, salame, jamón y focaccia perfecta para compartir. Con ensalada de rúcula y tomate cherry porque aquí también fingimos que comemos sano.',
  },
];

export const FOCACCIAS = [
  {
    name: 'Carpicciosa',
    price: '10,90€',
    desc: 'Carpaccio de ternera, stracciatella, parmigiano, trufa y rúcula. Sí, en una focaccia. Sí, es tan buena como suena.',
    photo: carpicciosa,
  },
  {
    name: 'Salame Mío',
    price: '10,90€',
    desc: 'Salame picante, queso gorgonzola, rúcula y nueces. Cremosa, fresca, con un punto de fuego que no avisa pero tampoco pide perdón.',
    photo: salamemio,
  },
  {
    name: 'Carbonara',
    price: '10,90€',
    desc: 'Focaccia rellena con nuestra cremosa salsa carbonara, guanciale crujiente y queso parmigiano rallado. Clásico delicioso intocable.',
    photo: focacciacarbonara,
  },
  {
    name: 'Mortadelísima',
    price: '10,90€',
    desc: 'Mortadela al tartufo, stracciatella, pistacchio, pesto y rúcula. Una focaccia con complejo de plato estrella de restaurante.',
  },
  {
    name: 'Vegetariana',
    price: '10,90€',
    desc: 'Stracciatella, pistacchio, tomate, parmesano, rúcula y pesto genovese. La focaccia que llegó sin carne y se ganó la mesa entera igual. Sin trampa, sin trucos. Solo muy buena.',
    photo: focacciavegetariana,
  },
];

export const ENSALADAS = [
  {
    name: 'Ensalada de Stracciatella',
    price: '6,50€',
    desc: 'Mucha Stracciatella cremosa, tomates dulces y rúcula con mucho amor.',
    chips: [{ icon: '🥖', text: 'Focaccia +2€' }],
  },
  {
    name: 'La Alfombra Roja',
    price: '8,50€',
    desc: 'Carpaccio en su mejor versión: rúcula, parmesano, crema de balsámico y toda la pompa de carpaccio que merece.',
    chips: [{ icon: '🥖', text: 'Focaccia +2€' }],
  },
  {
    name: 'Ensalada Burrata XL',
    price: '12,90€',
    desc: 'Burrata XL cremosa, tomates cherry, rúcula, y pesto. Cremosa y deliciosa. Con focaccia tostada perfecta para acompañarla.',
  },
];

export const PASTAS = [
  {
    name: 'Amatriccianisima 🌶',
    price: '12,50€',
    desc: 'Salsa pomodoro y guanciale, con una lluvia de parmigiano y el toque de picante perfecto servido sobre rigatoni coronado con stracciatella y pimienta.',
    chips: [glutenFree('+1,50€')],
  },
  {
    name: 'Carbopastica',
    price: '11,90€',
    desc: 'Nunca con nata. Rigatoni con solo huevo, guanciale, parmigiano y la técnica que separa a los valientes de los demás. La auténtica o nada.',
    chips: [glutenFree('+1,50€')],
    photo: carbopastica,
  },
  {
    name: 'La CarboTruffy',
    price: '14,00€',
    desc: 'Nuestra cremosa salsa carbonara servida con tagliatelle, con guanciale y queso parmigiano con un toque de trufa que le da todo el sabor y el aroma que merece.',
    chips: [glutenFree('+1,50€')],
  },
  {
    name: 'Mrs Bolognesa',
    price: '14,00€',
    desc: 'La señora de la carta. Ragú a la bolognesa de carne de ternera que ha hervido a fuego lento con una lluvia de parmigiano servido con ravioli de bolognesa. Porque nunca es suficiente bolognesa.',
    chips: [glutenFree('+2,50€ (con ravioli de picota y espinacas)')],
    photo: mrsbolognesa,
  },
  {
    name: 'Tradizionale',
    price: '11,90€',
    desc: 'Ragú a la bolognesa de ternera, pomodoro, parmigiano y tagliatelle. Sin inventos. La bolognesa de toda la vida que no necesita explicación porque ya la conoces. O deberías.',
    chips: [glutenFree('+1,50€'), { icon: '🧀', text: '+2€ Stracciatella' }],
  },
  {
    name: 'Alla Norma',
    price: '12,50€',
    desc: 'Rigatoni con nuestra salsa pomodoro, cuadros de berenjena fritos y queso ricotta salado que le da un sabor único.',
    photo: allanorma,
  },
  {
    name: 'La Pistachona',
    price: '12,50€',
    desc: 'Busiate con pesto, tomates dulces, ralladura de limón, pistacchio triturado y coronado con una stracciatella. El pesto de siempre con un frescor que lo cambia todo.',
    chips: [glutenFree('+1,50€')],
    photo: pistachona,
  },
  {
    name: 'La del Toro',
    price: '13,50€',
    desc: '6 ravioli de rabo de toro XL guisado a fuego lento hasta que no queda más que sabor, bañado en pesto rosso y ralladura de limón. Todo el carácter del sur.',
    chips: [glutenFree('+2,50€ (con ravioli de picota y espinacas)')],
  },
  {
    name: 'Saquitos de Lío',
    price: '13,90€',
    desc: 'Saquitos rellenos de pera caramelizada con una salsa muuuuy cremosa a base de nata, mascarpone y gorgonzola decorado con nueces trituradas. Perfecta para los que se atreven.',
    chips: [glutenFree('+2,50€')],
  },
  {
    name: 'Gnocchisima',
    price: '12,50€',
    desc: 'Lo mejor de dos mundos: gnocchi con nuestra bolognesa hecha a fuego lento junto a nuestra carbonara cubierta de queso parmigiano y guanciale por encima. ¡¡¡Una locura divina!!!',
    chips: [glutenFree('+1,50€')],
    photo: gnocchisima,
  },
  {
    name: 'La Frivoleza',
    price: '14,00€',
    desc: 'Gnocchi con crema de pistacchio, parmigiano y mortadella crocante por encima. Alguien tenía que freír la mortadela y nos alegramos de haber sido nosotros.',
    chips: [glutenFree('+1,50€')],
    photo: frivoleza,
  },
];

export const POSTRES = [
  {
    name: 'Tarta de Queso',
    price: '6,90€',
    desc: 'Horneada, con una cremosidad que no tiene explicación lógica acompañado de crema de cacao con avellanas. La favorita de la casa.',
    chips: [{ icon: '🌾', text: 'Opción sin gluten' }],
  },
  {
    name: 'Cannoli Amore',
    price: '6,90€',
    desc: '3 cannoli con nuestra crema de ricotta, pistaccio y mucho amore.',
  },
  {
    name: 'Tiramisú clásico de toda la vida',
    price: '6,00€',
    desc: 'Café, mascarpone y bizcocho empapado hasta el alma de café con cacao por encima.',
    chips: [{ icon: '🌾', text: 'Opción sin gluten' }],
  },
  {
    name: 'Tiramisú pistacchio lover',
    price: '6,90€',
    desc: 'El tiramisú fue a terapia, se reinventó y volvió verde.',
    chips: [{ icon: '🌾', text: 'Opción sin gluten' }],
  },
];

export const CAFES = [
  ['Café solo', '1,70€'],
  ['Café americano', '1,70€'],
  ['Café con leche', '2,50€'],
  ['Café cortado', '2,50€'],
  ['Matcha coconut', '5,00€'],
  ['Caramel ice latte', '5,00€'],
  ['Matcha berry coconut', '5,50€'],
];

export const BEBIDAS_SUAVES = [
  ['Agua sin gas Panna', '2,50€'],
  ['Agua con gas San Pellegrino', '3,00€'],
  ['Refrescos', '3,50€'],
  ['Limonada Frozen (pulpa de fresa o maracuyá +0,50€)', '4,00€'],
  ['Vermú', '4,00€'],
  ['Copa de Vino (botella 14,00€)', '3,50€'],
  ['Copa de Lambrusco (botella 14,00€)', '3,50€'],
  ['Tinto de Verano', '3,00€'],
  ['Sangría Rubia', '5,00€'],
  ['Sangría Rosso', '5,00€'],
];

export const CERVEZAS = [
  ['Doble de Mahou', '3,00€'],
  ['Clarita', '3,00€'],
  ['Tercio Alhambra (cubetazo 15,00€)', '4,00€'],
  ['Tercio Peroni (cubetazo 15,00€)', '4,00€'],
  ['Tercio Moretti (cubetazo 15,00€)', '4,00€'],
  ['Tercio Mahou (sin gluten)', '5,00€'],
  ['Tercio Tostada 0,0', '4,00€'],
];

export const COPAS = [
  ['Gin + Refresco', '8,00€'],
  ['Ron + Refresco', '8,00€'],
  ['Vodka + Refresco', '8,00€'],
  ['Whisky + Refresco', '8,00€'],
];

export const SPRITZ = [
  ['Aperol Frozen', '5,00€'],
  ['Limoncello Spritz', '6,00€'],
  ['Aperol Spritz', '6,00€'],
  ['Crodino Spritz', '4,00€'],
  ['Sarti Spritz', '6,00€'],
  ['Mondoro Hugo Spritz', '6,00€'],
  ['Campari Spritz', '7,00€'],
  ['Negroni Spritz', '8,00€'],
];

export const COCTELERIA = [
  {
    name: 'Margarita Spritz',
    price: '8,00€',
    desc: 'Nuestra versión de margarita: tequila, limón, maracuyá y, por supuesto, Aperol. Con un toque de tajín que lo hace todo mejor.',
  },
  {
    name: 'Paloma Spritz',
    price: '8,00€',
    desc: 'Un clásico: soda de pomelo, tequila, agave y nuestro toque de Sarti lleva este trago a otro nivel. Con borde de tajín que le da el picor perfecto.',
  },
  {
    name: 'Mermelada Spritz',
    price: '8,00€',
    desc: 'Mermelada de naranja, prosecco y Aperol. Lo más nuevo y diferente.',
  },
];

export const MENU_DEL_DIA_DETALLE = [
  { label: 'Entrante a elegir', options: 'Focaccia al ajo / Mini Ensalada de Stracciatella / Mini Berenjenitas' },
  { label: 'Plato a elegir', options: 'Tradizionale / Carbonara / Pistachona / Focaccia a elegir' },
  { label: 'Postre a elegir', options: 'Tiramisú / Cannoli / Café o infusión' },
  { label: 'Bebida', options: 'Agua / Refrescos / Doble o Tinto de Verano' },
];

export const WHEEL_DISHES = [
  { name: 'Gnocchisima', photo: gnocchisima },
  { name: 'Focaccia Carpicciosa', photo: carpicciosa },
  { name: 'Mrs Bolognesa', photo: mrsbolognesa },
  { name: 'La Pistachona', photo: pistachona },
  { name: 'Carbopastica', photo: carbopastica },
];
