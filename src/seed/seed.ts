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
    gender: 'classic'|'sugar-free'|'gamer'|'premium'
}

type ValidSizes = '250ml'|'355ml'|'473ml'|'500ml'|'710ml';
type ValidTypes = 'classic'|'sugar-free'|'zero'|'gaming';

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            description: "Monster Energy es la bebida energética perfecta para cuando necesitas energía extra. Con una mezcla única de cafeína, taurina y vitaminas B, te dará el impulso que necesitas para superar cualquier desafío.",
            images: [
                'monster-original-1.jpg',
                'monster-original-2.jpg',
            ],
            inStock: 50,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_energy_original",
            type: 'classic',
            tags: ['monster', 'energia', 'cafeina'],
            title: "Monster Energy Original",
            gender: 'classic'
        },
        {
            description: "Red Bull te da alas. La bebida energética original que inició toda una categoría. Con cafeína natural, taurina, vitaminas B y azúcar de verdad para darte la energía que necesitas.",
            images: [
                'redbull-original-1.jpg',
                'redbull-original-2.jpg',
            ],
            inStock: 75,
            price: 2.99,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_original",
            type: 'classic',
            tags: ['redbull', 'energia', 'cafeina'],
            title: "Red Bull Energy Drink",
            gender: 'classic'
        },
        {
            description: "Monster Energy Zero Ultra combina un sabor refrescante y ligero con la potencia completa de Monster Energy. Sin azúcar, sin calorías, pero con toda la energía que esperas de Monster.",
            images: [
                'monster-zero-ultra-1.jpg',
                'monster-zero-ultra-2.jpg'
            ],
            inStock: 40,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_zero_ultra",
            type: 'zero',
            tags: ['monster', 'zero', 'sin-azucar'],
            title: "Monster Zero Ultra",
            gender: 'sugar-free'
        },
        {
            description: "Red Bull Sugar Free tiene el mismo gran sabor y beneficios funcionales que Red Bull Energy Drink original, pero sin azúcar. Perfecta para quienes buscan energía sin calorías.",
            images: [
                'redbull-sugar-free-1.jpg',
                'redbull-sugar-free-2.jpg',
            ],
            inStock: 60,
            price: 2.99,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_sugar_free",
            type: 'sugar-free',
            tags: ['redbull', 'sin-azucar', 'energia'],
            title: "Red Bull Sugar Free",
            gender: 'sugar-free'
        },
        {
            description: "Monster Energy Ultra Blue es una bebida energética refrescante con sabor a frambuesa azul. Cero azúcar, cero calorías, pero con toda la potencia de Monster Energy.",
            images: [
                'monster-ultra-blue-1.jpg',
                'monster-ultra-blue-2.jpg',
            ],
            inStock: 35,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_ultra_blue",
            type: 'zero',
            tags: ['monster', 'ultra', 'frambuesa'],
            title: "Monster Ultra Blue",
            gender: 'sugar-free'
        },
        {
            description: "Rockstar Energy Original es la bebida que te ayuda a rendir al máximo. Con una potente mezcla de cafeína, taurina, guaraná y vitaminas B para mantener tu energía durante todo el día.",
            images: [
                'rockstar-original-1.jpg',
                'rockstar-original-2.jpg',
            ],
            inStock: 45,
            price: 3.49,
            sizes: ['355ml','473ml','500ml'],
            slug: "rockstar_energy_original",
            type: 'classic',
            tags: ['rockstar', 'energia', 'guarana'],
            title: "Rockstar Energy Original",
            gender: 'classic'
        },
        {
            description: "Bang Energy Rainbow Unicorn es una bebida energética súper potente diseñada especialmente para gamers y atletas. Con 300mg de cafeína y cero azúcar para máximo rendimiento.",
            images: [
                'bang-rainbow-unicorn-1.jpg',
                'bang-rainbow-unicorn-2.jpg',
            ],
            inStock: 30,
            price: 4.99,
            sizes: ['473ml','500ml'],
            slug: "bang_rainbow_unicorn",
            type: 'gaming',
            tags: ['bang', 'gaming', 'performance'],
            title: "Bang Energy Rainbow Unicorn",
            gender: 'gamer'
        },
        {
            description: "G Fuel Blue Ice es la bebida energética de los esports profesionales. Formulada especialmente para gamers con ingredientes que mejoran el enfoque y la concentración.",
            images: [
                'gfuel-blue-ice-1.jpg',
                'gfuel-blue-ice-2.jpg',
            ],
            inStock: 25,
            price: 5.99,
            sizes: ['355ml','473ml'],
            slug: "gfuel_blue_ice",
            type: 'gaming',
            tags: ['gfuel', 'gaming', 'esports'],
            title: "G Fuel Blue Ice",
            gender: 'gamer'
        },
        {
            description: "Monster Energy Pipeline Punch combina los sabores tropicales de la pasión de la fruta, naranja y guayaba. Una explosión de sabor tropical con toda la energía de Monster.",
            images: [
                'monster-pipeline-punch-1.jpg',
                'monster-pipeline-punch-2.jpg',
            ],
            inStock: 40,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_pipeline_punch",
            type: 'classic',
            tags: ['monster', 'tropical', 'guayaba'],
            title: "Monster Pipeline Punch",
            gender: 'classic'
        },
        {
            description: "Red Bull Tropical Edition combina el sabor único de Red Bull con notas tropicales refrescantes. Una experiencia de sabor completamente nueva con la energía de siempre.",
            images: [
                'redbull-tropical-1.jpg',
                'redbull-tropical-2.jpg',
            ],
            inStock: 50,
            price: 3.49,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_tropical",
            type: 'classic',
            tags: ['redbull', 'tropical', 'edition'],
            title: "Red Bull Tropical Edition",
            gender: 'classic'
        },
        {
            description: "Monster Energy Assault es una bebida energética con un sabor audaz y agresivo. Perfect para quienes buscan una experiencia energética intensa y un sabor único.",
            images: [
                'monster-assault-1.jpg',
                'monster-assault-2.jpg',
            ],
            inStock: 35,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_assault",
            type: 'classic',
            tags: ['monster', 'assault', 'intenso'],
            title: "Monster Assault",
            gender: 'classic'
        },
        {
            description: "Reign Total Body Fuel White Gummy Bear es una bebida energética fitness con 300mg de cafeína natural, BCAA y electrolitos. Perfecta para entrenamientos intensos.",
            images: [
                'reign-white-gummy-1.jpg',
                'reign-white-gummy-2.jpg',
            ],
            inStock: 30,
            price: 4.49,
            sizes: ['355ml','473ml','500ml'],
            slug: "reign_white_gummy_bear",
            type: 'gaming',
            tags: ['reign', 'fitness', 'bcaa'],
            title: "Reign White Gummy Bear",
            gender: 'gamer'
        },
        {
            description: "C4 Energy Icy Blue Razz es una bebida energética sin azúcar con el sabor de frambuesa azul helada. Formulada con ingredientes de rendimiento para maximizar tu entrenamiento.",
            images: [
                'c4-icy-blue-razz-1.jpg',
                'c4-icy-blue-razz-2.jpg',
            ],
            inStock: 25,
            price: 4.99,
            sizes: ['355ml','473ml'],
            slug: "c4_icy_blue_razz",
            type: 'gaming',
            tags: ['c4', 'preworkout', 'frambuesa'],
            title: "C4 Energy Icy Blue Razz",
            gender: 'gamer'
        },
        {
            description: "Monster Energy Ultra Paradise tiene un sabor refrescante con notas de kiwi, lima y pepino. Cero azúcar, cero calorías, pero con toda la energía Monster que esperas.",
            images: [
                'monster-ultra-paradise-1.jpg',
                'monster-ultra-paradise-2.jpg',
            ],
            inStock: 40,
            price: 3.99,
            sizes: ['355ml','473ml','500ml'],
            slug: "monster_ultra_paradise",
            type: 'zero',
            tags: ['monster', 'ultra', 'kiwi'],
            title: "Monster Ultra Paradise",
            gender: 'sugar-free'
        },
        {
            description: "Red Bull Blue Edition combina el sabor único de Red Bull con el delicioso sabor a arándano. Una explosión de sabor frutal con la energía que necesitas.",
            images: [
                'redbull-blue-edition-1.jpg',
                'redbull-blue-edition-2.jpg',
            ],
            inStock: 45,
            price: 3.49,
            sizes: ['250ml','355ml','473ml'],
            slug: "red_bull_blue_edition",
            type: 'classic',
            tags: ['redbull', 'blue', 'arandano'],
            title: "Red Bull Blue Edition",
            gender: 'classic'
        },
        {
            description: "Prime Energy Glowberry by Logan Paul es una bebida energética con sabor a baya luminosa. Diseñada para atletas y creadores de contenido que buscan energía premium.",
            images: [
                'prime-glowberry-1.jpg',
                'prime-glowberry-2.jpg',
            ],
            inStock: 20,
            price: 6.99,
            sizes: ['355ml','473ml'],
            slug: "prime_energy_glowberry",
            type: 'gaming',
            tags: ['prime', 'logan-paul', 'premium'],
            title: "Prime Energy Glowberry",
            gender: 'premium'
        },
        {
            description: "NOS Energy Drink Original es una bebida energética de alto octanaje diseñada para dar máxima potencia. Con una mezcla única de cafeína y taurina para rendimiento extremo.",
            images: [
                'nos-original-1.jpg',
                'nos-original-2.jpg',
            ],
            inStock: 35,
            price: 3.79,
            sizes: ['355ml','473ml','500ml'],
            slug: "nos_energy_original",
            type: 'classic',
            tags: ['nos', 'alto-octanaje', 'extremo'],
            title: "NOS Energy Original",
            gender: 'classic'
        },
        {
            description: "Full Throttle Energy Drink es una bebida energética con sabor cítrico intenso. Diseñada para quienes viven la vida al máximo y necesitan energía constante.",
            images: [
                'full-throttle-1.jpg',
                'full-throttle-2.jpg',
            ],
            inStock: 30,
            price: 3.69,
            sizes: ['355ml','473ml','500ml'],
            slug: "full_throttle_original",
            type: 'classic',
            tags: ['full-throttle', 'citrico', 'intenso'],
            title: "Full Throttle Original",
            gender: 'classic'
        },
        {
            description: "Ghost Energy Sour Watermelon es una bebida energética transparente con sabor a sandía ácida. Sin azúcar, con ingredientes naturales y diseñada para el rendimiento.",
            images: [
                'ghost-sour-watermelon-1.jpg',
                'ghost-sour-watermelon-2.jpg',
            ],
            inStock: 25,
            price: 5.49,
            sizes: ['355ml','473ml'],
            slug: "ghost_sour_watermelon",
            type: 'zero',
            tags: ['ghost', 'sandia', 'transparente'],
            title: "Ghost Sour Watermelon",
            gender: 'premium'
        },
        {
            description: "Alani Nu Energy Cosmic Stardust es una bebida energética premium con 200mg de cafeína y sabores únicos. Perfecta para quienes buscan calidad y sabor excepcional.",
            images: [
                'alani-cosmic-stardust-1.jpg',
                'alani-cosmic-stardust-2.jpg',
            ],
            inStock: 20,
            price: 6.49,
            sizes: ['355ml','473ml'],
            slug: "alani_cosmic_stardust",
            type: 'sugar-free',
            tags: ['alani', 'premium', 'cosmic'],
            title: "Alani Nu Cosmic Stardust",
            gender: 'premium'
        }
    ]
}