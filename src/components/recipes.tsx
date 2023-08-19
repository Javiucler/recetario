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
      "Burritos (lol) con patatas fritas, carne especiada y salsa. Luego son tostados par aun exterior mas crujiente y con un sabor más tostado.",
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

      "Mientras las patatas se hacen empieza a cortar la cebolla, no muy fina para que no se queme. Lo mismo con el pimiento. Empieza a sofreir el pimiento y la cebolla a fuego medio(y poner sal), unos 5-10 minutos hasta que se quede translucido y no tenga mucha mordida. Mientras haz la mezcla de especias, simplemente poner 1 cucharada de todas las especias excepto 2 de comino, y ajustar a gusto. Luego ponemos la carne (esto es con carne vegetal que tarda menos) y mantener a fuego medio hasta que este cocinado.",

      "Calienta las tortillas de trigo en el microondas para aumentar su elasticidad. Prepara la mezcla de mayonesa sriracha, yo suelo hacer un 60% de mayonesa y el resto sriracha pero al gusto. Prepara todos los ingredientes para empezar a preparar los burritos y tenerlos a mano.",

      "Para los burritos esparcer salsa , poner una cantidad un poco superior de carne con patatas, mozarella y cerrarlo. Usar mozzarella para cerrar el burrito si tiende a abrirse.",

      "Poner sarten a fuego alto-medio. Sellar los burritos por todos los lados, dejar enfriar en una rejilla de horno o cualquier sitio para que no se humedezcan.",
    ],
  },
];
