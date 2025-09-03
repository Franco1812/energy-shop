interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
}

type ValidSizes = '250ml'|'355ml'|'473ml'|'500ml'|'710ml';
type ValidTypes = 'classic'|'sugar-free'|'zero'|'gaming'|'premium';

interface SeedData {
    categories: ValidTypes[],
    products: SeedProduct[],
}

export const initialData: SeedData = {
    categories: ['classic', 'sugar-free', 'zero', 'gaming', 'premium'],
    products: [
        {
            description: "Monster Energy Classic es la bebida energética perfecta para cuando necesitas energía extra. Con una mezcla única de cafeína, taurina y vitaminas B, te dará el impulso que necesitas para superar cualquier desafío.",
            images: [
                'monster-energy-clasic.png',
                'monster-energy-clasic.png',
            ],
            inStock: 50,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_energy_classic",
            type: 'classic',
            tags: ['monster', 'energia', 'cafeina'],
            title: "Monster Energy Classic"
        },
        {
            description: "Red Bull Classic te da alas. La bebida energética original que inició toda una categoría. Con cafeína natural, taurina, vitaminas B y azúcar de verdad para darte la energía que necesitas.",
            images: [
                'red-bull-clasic.png',
                'red-bull-clasic.png',
            ],
            inStock: 75,
            price: 2.99,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_classic",
            type: 'classic',
            tags: ['redbull', 'energia', 'cafeina'],
            title: "Red Bull Classic"
        },
        {
            description: "Monster Energy Zero Ultra White combina un sabor refrescante y ligero con la potencia completa de Monster Energy. Sin azúcar, sin calorías, pero con toda la energía que esperas de Monster.",
            images: [
                'monster-zero-ultra-white.png',
                'monster-zero-ultra-white.png'
            ],
            inStock: 40,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_zero_ultra_white",
            type: 'zero',
            tags: ['monster', 'zero', 'sin-azucar'],
            title: "Monster Zero Ultra White"
        },
        {
            description: "Monster Energy Zero Ultra Blue es una bebida energética refrescante con sabor a frambuesa azul. Cero azúcar, cero calorías, pero con toda la potencia de Monster Energy.",
            images: [
                'Monster-Energy-Zero-Ultra-Blue.png',
                'Monster-Energy-Zero-Ultra-Blue.png',
            ],
            inStock: 35,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_zero_ultra_blue",
            type: 'zero',
            tags: ['monster', 'ultra', 'frambuesa'],
            title: "Monster Zero Ultra Blue"
        },
        {
            description: "Monster Energy Zero Ultra Black es una bebida energética con sabor intenso y audaz. Cero azúcar, cero calorías, pero con toda la energía Monster que esperas.",
            images: [
                'Monster-Energy-Zero-Ultra-Black.png',
                'Monster-Energy-Zero-Ultra-Black.png',
            ],
            inStock: 30,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_zero_ultra_black",
            type: 'zero',
            tags: ['monster', 'ultra', 'intenso'],
            title: "Monster Zero Ultra Black"
        },
        {
            description: "Monster Energy Gold Zero es una bebida energética premium con sabor dorado. Cero azúcar, cero calorías, pero con toda la energía Monster que necesitas.",
            images: [
                'monster-gold-zero.png',
                'monster-gold-zero.png',
            ],
            inStock: 25,
            price: 4.49,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_gold_zero",
            type: 'zero',
            tags: ['monster', 'gold', 'premium'],
            title: "Monster Energy Gold Zero"
        },
        {
            description: "Monster Energy Mango Loco combina el sabor tropical del mango con la potencia de Monster Energy. Una explosión de sabor frutal con toda la energía que necesitas.",
            images: [
                'monster-mango-loco.png',
                'monster-mango-loco.png',
            ],
            inStock: 45,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_mango_loco",
            type: 'classic',
            tags: ['monster', 'mango', 'tropical'],
            title: "Monster Energy Mango Loco"
        },
        {
            description: "Monster Energy Anana es una bebida energética con sabor a piña tropical. Refrescante y energética, perfecta para días calurosos.",
            images: [
                'monster-anana.png',
                'monster-anana.png',
            ],
            inStock: 40,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_anana",
            type: 'classic',
            tags: ['monster', 'anana', 'piña', 'tropical'],
            title: "Monster Energy Anana",
        },
        {
            description: "Monster Energy Rehab es una bebida energética diseñada para la recuperación. Con electrolitos y menos cafeína, perfecta para después del entrenamiento.",
            images: [
                'monster-rehab.png',
                'monster-rehab.png',
            ],
            inStock: 35,
            price: 4.49,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_rehab",
            type: 'gaming',
            tags: ['monster', 'rehab', 'recuperacion', 'electrolitos'],
            title: "Monster Energy Rehab",
        },
        {
            description: "Monster Energy Lemonade es una bebida energética refrescante con sabor a limonada natural. Perfecta para días calurosos con toda la energía de Monster.",
            images: [
                'monster-energy-lemonade.png',
                'monster-energy-lemonade.png',
            ],
            inStock: 35,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_energy_lemonade",
            type: 'classic',
            tags: ['monster', 'limonada', 'refrescante'],
            title: "Monster Energy Lemonade",
        },
        {
            description: "Monster Energy Irish Creme es una bebida energética con sabor a crema irlandesa. Una experiencia única de sabor con toda la potencia de Monster Energy.",
            images: [
                'monster-irish-creme.png',
                'monster-irish-creme.png',
            ],
            inStock: 25,
            price: 4.49,
            sizes: ['355ml','473ml'],
            slug: "monster_irish_creme",
            type: 'premium',
            tags: ['monster', 'irish-creme', 'premium'],
            title: "Monster Energy Irish Creme",
        },
        {
            description: "Monster Energy Lewis Hamilton Edition es una bebida energética especial diseñada en colaboración con el campeón de F1. Con sabor único y diseño exclusivo.",
            images: [
                'monster-lewis.png',
                'monster-lewis.png',
            ],
            inStock: 20,
            price: 5.99,
            sizes: ['355ml','473ml'],
            slug: "monster_lewis_hamilton",
            type: 'premium',
            tags: ['monster', 'lewis-hamilton', 'f1'],
            title: "Monster Energy Lewis Hamilton",
        },
        {
            description: "Monster Energy Lando Norris Edition es una bebida energética especial con el piloto de McLaren. Diseño exclusivo y sabor único para los fans de la F1.",
            images: [
                'monster-lando.png',
                'monster-lando.png',
            ],
            inStock: 20,
            price: 5.99,
            sizes: ['355ml','473ml'],
            slug: "monster_lando_norris",
            type: 'premium',
            tags: ['monster', 'lando-norris', 'f1'],
            title: "Monster Energy Lando Norris",
        },
        {
            description: "Red Bull Berry Edition combina el sabor único de Red Bull con notas de bayas refrescantes. Una experiencia de sabor completamente nueva con la energía de siempre.",
            images: [
                'red-bull-berry.png',
                'red-bull-berry.png',
            ],
            inStock: 50,
            price: 3.49,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_berry",
            type: 'classic',
            tags: ['redbull', 'berry', 'edition'],
            title: "Red Bull Berry Edition",
        },
        {
            description: "Red Bull Coconut Edition combina el sabor único de Red Bull con notas de coco tropical. Una experiencia de sabor exótica con la energía que necesitas.",
            images: [
                'red-bull-coco.png',
                'red-bull-coco.png',
            ],
            inStock: 45,
            price: 3.49,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_coconut",
            type: 'classic',
            tags: ['redbull', 'coconut', 'tropical'],
            title: "Red Bull Coconut Edition",
        },
        {
            description: "Red Bull Uva Edition combina el sabor único de Red Bull con notas de uva refrescante. Una experiencia de sabor frutal con la energía que necesitas.",
            images: [
                'red-bull-uva.png',
                'red-bull-uva.png',
            ],
            inStock: 40,
            price: 3.49,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_uva",
            type: 'classic',
            tags: ['redbull', 'uva', 'frutal'],
            title: "Red Bull Uva Edition",
        },
        {
            description: "Bang Energy es una bebida energética súper potente diseñada especialmente para gamers y atletas. Con 300mg de cafeína y cero azúcar para máximo rendimiento.",
            images: [
                'bang.png',
                'bang.png',
            ],
            inStock: 30,
            price: 4.99,
            sizes: ['473ml','500ml'],
            slug: "bang_energy",
            type: 'gaming',
            tags: ['bang', 'gaming', 'performance'],
            title: "Bang Energy",
        },
        {
            description: "G Fuel Blue Ice es la bebida energética de los esports profesionales. Formulada especialmente para gamers con ingredientes que mejoran el enfoque y la concentración.",
            images: [
                'g-fuel-blue.png',
                'g-fuel-blue.png',
            ],
            inStock: 25,
            price: 5.99,
            sizes: ['355ml','473ml'],
            slug: "gfuel_blue_ice",
            type: 'gaming',
            tags: ['gfuel', 'gaming', 'esports'],
            title: "G Fuel Blue Ice",
        },
        {
            description: "G Fuel es la bebida energética oficial de los esports. Formulada con ingredientes premium para maximizar el rendimiento gaming y la concentración.",
            images: [
                'gfuel.png',
                'gfuel.png',
            ],
            inStock: 30,
            price: 5.99,
            sizes: ['355ml','473ml'],
            slug: "gfuel_classic",
            type: 'gaming',
            tags: ['gfuel', 'gaming', 'esports'],
            title: "G Fuel Classic",
        },
        {
            description: "Reign Total Body Fuel es una bebida energética fitness con 300mg de cafeína natural, BCAA y electrolitos. Perfecta para entrenamientos intensos.",
            images: [
                'reign.png',
                'reign.png',
            ],
            inStock: 30,
            price: 4.49,
            sizes: ['355ml','473ml','500ml'],
            slug: "reign_total_body_fuel",
            type: 'gaming',
            tags: ['reign', 'fitness', 'bcaa'],
            title: "Reign Total Body Fuel",
        },
        {
            description: "C4 Energy es una bebida energética sin azúcar formulada con ingredientes de rendimiento para maximizar tu entrenamiento. Perfecta para pre-workout.",
            images: [
                'c4.png',
                'c4.png',
            ],
            inStock: 25,
            price: 4.99,
            sizes: ['355ml','473ml'],
            slug: "c4_energy",
            type: 'gaming',
            tags: ['c4', 'preworkout', 'performance'],
            title: "C4 Energy",
        },
        {
            description: "Java Bean Monster Energy combina el sabor del café con la potencia de Monster Energy. Perfecta para los amantes del café que buscan energía extra.",
            images: [
                'java-bean.png',
                'java-bean.png',
            ],
            inStock: 20,
            price: 4.99,
            sizes: ['355ml','473ml'],
            slug: "monster_java_bean",
            type: 'premium',
            tags: ['monster', 'java', 'cafe'],
            title: "Monster Energy Java Bean",
        }
    ]
}
