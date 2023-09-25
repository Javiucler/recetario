export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  // image not for now not bored enough
}

export const testRecipe: Recipe[] = [
  {
    title: "French Tacos",
    description:
      "Burritos (lol) con patatas fritas, carne especiada y salsa. Luego son tostados par aun exterior mas crujiente y con un sabor más tostado. Receta para 2-3 personas.",
    ingredients: [
      "Tortillas, preferiblemente de trigo",
      "200g Substituto de carne vegetariano/vegano, preferiblemente algo empanado",
      "200g Mozzarella",
      "1 cebolla",
      "1 pimiento (opcional)",
      "500g de Patatas (actually no clue)",
      "Oregano",
      "Azucar blanco",
      "Comino en polvo",
      "Pimienta negra u otra especia picante, el limite es el cielo",
      "Pimentón dulce",
      "Cebolla en polvo",
      "Ajo en polvo",
      "Salsa sriracha",
      "Mayonesa, cualquier tipo",
      "Aove",
    ],
    steps: [
      "Pela y corta las patatas, mientras enciende la freidora/sarten con aceite. Corta las patatas no muy gruesas para y luego frielas. No voy a explicar como freir patatas, pero pon un par de toallas de papel de cocina para absorver el aceite sobrante y solo pon sal despues de haberlas frito, cuando estén aún calientes. También se pueden hacer las patatas al horno pero tarda más, tener eso en cuenta.",

      "Mientras las patatas se hacen empieza a cortar la cebolla, no muy fina para que no se queme. Lo mismo con el pimiento. Empieza a sofreir el pimiento y la cebolla a fuego medio(y poner sal), unos 5-10 minutos hasta que se quede translucido y no tenga mucha mordida. Mientras haz la mezcla de especias, simplemente poner 1 cucharada de todas las especias excepto 2 de comino, y ajustar a gusto. Luego ponemos la carne (esto es con carne vegetal que tarda menos) y mantener a fuego medio hasta que este cocinado. (en este punto, si quieres un sabor mas sutil a ajo añade ajo cortado en rodajas y no añadas ajo en polvo. Sino el ajo en polvo le da un sabor algo distinto y pero mas similar al taco seasonig  de bolsa)",

      "Calienta las tortillas de trigo en el microondas para aumentar su elasticidad. Prepara la mezcla de mayonesa sriracha, yo suelo hacer un 60% de mayonesa y el resto sriracha pero al gusto. Prepara todos los ingredientes para empezar a preparar los burritos y tenerlos a mano.",

      "Para los burritos esparcer salsa , poner una cantidad un poco superior de carne con patatas, mozarella y cerrarlo. Usar mozzarella para cerrar el burrito si tiende a abrirse.",

      "Poner sarten a fuego alto-medio. Sellar los burritos por todos los lados, dejar enfriar en una rejilla de horno o cualquier sitio para que no se humedezcan.",
    ],
  },
  {
    title: "Bolognesa",
    description: "Salsa bolognesa con abundante tomate, vegetariana para pasta. Receta para 6-8 porciones ( 100g pasta/porcion). Se puede congelar perfectamente",
    ingredients:[
      "2 Botes grandes de tomate triturado de 600g",
    "Ajos",
    "2 cebollas",
    "4 zanahorias (asumiendo que son medianas tirando a pequeñas, sino 2 grandes)",
    "3 o 4 tallos de apio",
    "70-100ml de vino tinto",
    "Oregano o romero",
    "4 hojas de laurel",
    "200g de alguna proteina vegetariana",
    "aove, mucho aove",
    "pimienta negra"
    ],
    steps: [
      "Lavar y cortar el ajo y el resto de verduras en cuadrados muy pequeños (brunoise). Sofrielas a fuego medio hasta que se evapore el agua de las verduras. Poner sal, facilita el proceso y recomiendo poner sal con cada paso",
      "Segun la proteina vegetal se puede añadir ahora o mas tarde para que no se pegue en exceso. Si uso salchichas vegetales del aldi, las cocino no en exceso y lo tiraria en este punto Si usas soja texturizada esperaria un poco más porque a mi se me me pega demasiado. Si usas tofu me gusta tostarlo a parte antes de tirarlo y lo hago por separado hasta este punto, depende. Pero la mayoria de proteinas esperaria hasta que las verduras han perdido el agua para tirarlas igualmente. ",
      "Cocinar las verduras hasta que se pegue (pero que no se queme), eso nos interesa. Antes de que las verduras lleguen a tostarse o quemarse añadimos el vino para desglasar el fondo de la sarten. Con en el vino todo lo marron del fondo de la olla se reblandecera mucho, mientras este en el fuego rascar todo la olla con una espatula o algun utensilio que te lo permita hacer. Cocinamos el vino hasta que se evapore el alcohol, la forma más facil de saberlo es oliendo el vapor de mientras se cocina.",
      "Para parar la ebullición añadimos los 2 botes de tomate, las 4 hojas de laurel,un poco de oregano o romero (o nada). Salar con bastante sal (es más de un litro de tomate, hay que ser generoso), un buen chorro de aove, pimienta negra y mantener en fuego medio hasta que vuelva a hervir. ",
      "Cocinarlo a fuego lento. Personalmente lo tapo y lo dejo unas 3-4 horas a un fuego muy bajo. Si quieres a fuego medio tirando a bajo mientras sea más supervisado por si empieza a pegarse tambien es viable para tenerlo 1-2 horas.",
      "Cuando apenas veas agua encima del tomate despues de dejarlo cocinarse 2-3 minutos y sea bastante consistente simplemente quitarle el fuego, probarlo y poner sal y pimienta. Si está demasiado ácido se le puede añadir un poquito de azucar."
    ]
  }
];
