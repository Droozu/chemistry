interface IElement {
    name: string,
    symbol: string,
    sequenceNumber: number,
    electronsOnLayer: number[],
    atomicMass: number | string,
    elementType: string
}

interface ILantan {
    row: string,
    name: string
}

export const firstLayer: Array<IElement | null> = [
    {
        name: "Водород",
        symbol: "H",
        sequenceNumber: 1,
        electronsOnLayer: [1],
        atomicMass: 1.008,
        elementType: "S"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        name: "Гелий",
        symbol: "He",
        sequenceNumber: 2,
        electronsOnLayer: [2],
        atomicMass: 4.003,
        elementType: "S"
    }
]

export const secondLayer: Array<IElement | null> = [
    {
        name: "Литий",
        symbol: "Li",
        sequenceNumber: 3,
        electronsOnLayer: [2, 1],
        atomicMass: 6.941,
        elementType: "S"
    },
    {
        name: "Бериллий",
        symbol: "Be",
        sequenceNumber: 4,
        electronsOnLayer: [2, 2],
        atomicMass: 9.0122,
        elementType: "S"
    },
    {
        name: "Бор",
        symbol: "B",
        sequenceNumber: 5,
        electronsOnLayer: [2, 3],
        atomicMass: 10.811,
        elementType: "P"
    },
    {
        name: "Углерод",
        symbol: "C",
        sequenceNumber: 6,
        electronsOnLayer: [2, 4],
        atomicMass: 12.011,
        elementType: "P"
    },
    {
        name: "Азот",
        symbol: "N",
        sequenceNumber: 7,
        electronsOnLayer: [2, 5],
        atomicMass: 14.007,
        elementType: "P"
    },
    {
        name: "Кислород",
        symbol: "O",
        sequenceNumber: 8,
        electronsOnLayer: [2, 6],
        atomicMass: 15.999,
        elementType: "P"
    },
    {
        name: "Фтор",
        symbol: "F",
        sequenceNumber: 9,
        electronsOnLayer: [2, 7],
        atomicMass: 18.998,
        elementType: "P"
    },
    null,
    {
        name: "Неон",
        symbol: "Ne",
        sequenceNumber: 10,
        electronsOnLayer: [2, 8],
        atomicMass: 20.179,
        elementType: "P"
    }
]

export const thirdLayer: Array<IElement | null> = [
    {
        name: "Натрий",
        symbol: "Na",
        sequenceNumber: 11,
        electronsOnLayer: [2, 8, 1],
        atomicMass: 22.99,
        elementType: "S"
    },
    {
        name: "Магний",
        symbol: "Mg",
        sequenceNumber: 12,
        electronsOnLayer: [2, 8, 2],
        atomicMass: 24.312,
        elementType: "S"
    },
    {
        name: "Алюминий",
        symbol: "Al",
        sequenceNumber: 13,
        electronsOnLayer: [2, 8, 3],
        atomicMass: 26.092,
        elementType: "P"
    },
    {
        name: "Кремний",
        symbol: "Si",
        sequenceNumber: 14,
        electronsOnLayer: [2, 8, 4],
        atomicMass: 28.086,
        elementType: "P"
    },
    {
        name: "Фосфор",
        symbol: "P",
        sequenceNumber: 15,
        electronsOnLayer: [2, 8, 5],
        atomicMass: 30.974,
        elementType: "P"
    },
    {
        name: "Сера",
        symbol: "S",
        sequenceNumber: 16,
        electronsOnLayer: [2, 8, 6],
        atomicMass: 32.064,
        elementType: "P"
    },
    {
        name: "Хлор",
        symbol: "Cl",
        sequenceNumber: 17,
        electronsOnLayer: [2, 8, 7],
        atomicMass: 35.453,
        elementType: "P"
    },
    null,
    {
        name: "Аргон",
        symbol: "Ar",
        sequenceNumber: 18,
        electronsOnLayer: [2, 8, 8],
        atomicMass: 39.948,
        elementType: "P"
    }
]
export const fourthLayer: Array<IElement | Array<IElement> | null> = [
    {
        name: "Калий",
        symbol: "K",
        sequenceNumber: 19,
        electronsOnLayer: [2, 8, 8, 1],
        atomicMass: 39.102,
        elementType: "S"
    },
    {
        name: "Кальций",
        symbol: "Ca",
        sequenceNumber: 20,
        electronsOnLayer: [2, 8, 8, 2],
        atomicMass: 40.08,
        elementType: "S"
    },
    {
        name: "Скандий",
        symbol: "Sc",
        sequenceNumber: 21,
        electronsOnLayer: [2, 8, 9, 2],
        atomicMass: 44.956,
        elementType: "D"
    },
    {
        name: "Титан",
        symbol: "Ti",
        sequenceNumber: 22,
        electronsOnLayer: [2, 8, 10, 2],
        atomicMass: 47.956,
        elementType: "D"
    },
    {
        name: "Ванадий",
        symbol: "V",
        sequenceNumber: 23,
        electronsOnLayer: [2, 8, 11, 2],
        atomicMass: 50.941,
        elementType: "D"
    },
    {
        name: "Хром",
        symbol: "Cr",
        sequenceNumber: 24,
        electronsOnLayer: [2, 8, 12, 2],
        atomicMass: 51.996,
        elementType: "D"
    },
    {
        name: "Марганец",
        symbol: "Mn",
        sequenceNumber: 25,
        electronsOnLayer: [2, 8, 13, 2],
        atomicMass: 54.938,
        elementType: "D"
    },
    [
        {
            name: "Железо",
            symbol: "Fe",
            sequenceNumber: 26,
            electronsOnLayer: [2, 8, 14, 2],
            atomicMass: 55.849,
            elementType: "D"
        },
        {
            name: "Кобальт",
            symbol: "Co",
            sequenceNumber: 27,
            electronsOnLayer: [2, 8, 15, 2],
            atomicMass: 58.933,
            elementType: "D"
        },
        {
            name: "Никель",
            symbol: "Ni",
            sequenceNumber: 28,
            electronsOnLayer: [2, 8, 16, 2],
            atomicMass: 58.7,
            elementType: "D"
        },
    ],
    null
]
export const fifthLayer: Array<IElement | null> = [
    {
        name: "Медь",
        symbol: "Cu",
        sequenceNumber: 29,
        electronsOnLayer: [2, 8, 18, 1],
        atomicMass: 63.546,
        elementType: "D"
    },
    {
        name: "Цинк",
        symbol: "Zn",
        sequenceNumber: 30,
        electronsOnLayer: [2, 8, 18, 2],
        atomicMass: 65.37,
        elementType: "D"
    },
    {
        name: "Галлий",
        symbol: "Ga",
        sequenceNumber: 31,
        electronsOnLayer: [2, 8, 18, 3],
        atomicMass: 69.72,
        elementType: "P"
    },
    {
        name: "Германий",
        symbol: "Ge",
        sequenceNumber: 32,
        electronsOnLayer: [2, 8, 18, 4],
        atomicMass: 72.59,
        elementType: "P"
    },
    {
        name: "Мышьяк",
        symbol: "As",
        sequenceNumber: 33,
        electronsOnLayer: [2, 8, 18, 5],
        atomicMass: 74.922,
        elementType: "P"
    },
    {
        name: "Селен",
        symbol: "Se",
        sequenceNumber: 34,
        electronsOnLayer: [2, 8, 18, 6],
        atomicMass: 78.96,
        elementType: "P"
    },
    {
        name: "Бром",
        symbol: "Br",
        sequenceNumber: 35,
        electronsOnLayer: [2, 8, 18, 7],
        atomicMass: 79.904,
        elementType: "P"
    },
    null,
    {
        name: "Криптон",
        symbol: "Kr",
        sequenceNumber: 36,
        electronsOnLayer: [2, 8, 18, 8],
        atomicMass: 83.8,
        elementType: "P"
    }
]
export const sixthLayer: Array<IElement | Array<IElement> | null> = [
    {
        name: "Рубидий",
        symbol: "Rb",
        sequenceNumber: 37,
        electronsOnLayer: [2, 8, 18, 8, 1],
        atomicMass: 85.468,
        elementType: "S"
    },
    {
        name: "Стронций",
        symbol: "Sr",
        sequenceNumber: 38,
        electronsOnLayer: [2, 8, 18, 8, 2],
        atomicMass: 87.62,
        elementType: "S"
    },
    {
        name: "Иттрий",
        symbol: "Y",
        sequenceNumber: 39,
        electronsOnLayer: [2, 8, 18, 9, 2],
        atomicMass: 88.906,
        elementType: "D"
    },
    {
        name: "Цирконий",
        symbol: "Zr",
        sequenceNumber: 40,
        electronsOnLayer: [2, 8, 18, 10, 2],
        atomicMass: 91.22,
        elementType: "D"
    },
    {
        name: "Ниобий",
        symbol: "Nb",
        sequenceNumber: 41,
        electronsOnLayer: [2, 8, 18, 11, 2],
        atomicMass: 92.906,
        elementType: "D"
    },
    {
        name: "Молибден",
        symbol: "Mo",
        sequenceNumber: 42,
        electronsOnLayer: [2, 8, 18, 12, 2],
        atomicMass: 95.94,
        elementType: "D"
    },
    {
        name: "Технеций",
        symbol: "Tc",
        sequenceNumber: 43,
        electronsOnLayer: [2, 8, 18, 13, 2],
        atomicMass: '[99]',
        elementType: "D"
    },
    [
        {
            name: "Рутений",
            symbol: "Ru",
            sequenceNumber: 44,
            electronsOnLayer: [2, 8, 18, 15, 1],
            atomicMass: 101.07,
            elementType: "D"
        },
        {
            name: "Родий",
            symbol: "Rh",
            sequenceNumber: 45,
            electronsOnLayer: [2, 8, 18, 16, 1],
            atomicMass: 102.906,
            elementType: "D"
        },
        {
            name: "Палладий",
            symbol: "Pd",
            sequenceNumber: 46,
            electronsOnLayer: [2, 8, 18, 18, 0],
            atomicMass: 106.4,
            elementType: "D"
        },
    ],
    null
]
export const seventhLayer: Array<IElement | null> = [
    {
        name: "Серебро",
        symbol: "Ag",
        sequenceNumber: 47,
        electronsOnLayer: [2, 8, 18, 18, 1],
        atomicMass: 107.868,
        elementType: "D"
    },
    {
        name: "Кадмий",
        symbol: "Cd",
        sequenceNumber: 48,
        electronsOnLayer: [2, 8, 18, 18, 2],
        atomicMass: 112.41,
        elementType: "D"
    },
    {
        name: "Индий",
        symbol: "In",
        sequenceNumber: 49,
        electronsOnLayer: [2, 8, 18, 18, 3],
        atomicMass: 114.82,
        elementType: "P"
    },
    {
        name: "Олово",
        symbol: "Sn",
        sequenceNumber: 50,
        electronsOnLayer: [2, 8, 18, 18, 4],
        atomicMass: 118.69,
        elementType: "P"
    },
    {
        name: "Сурьма",
        symbol: "Sb",
        sequenceNumber: 51,
        electronsOnLayer: [2, 8, 18, 18, 5],
        atomicMass: 121.75,
        elementType: "P"
    },
    {
        name: "Теллур",
        symbol: "Te",
        sequenceNumber: 52,
        electronsOnLayer: [2, 8, 18, 18, 6],
        atomicMass: 127.6,
        elementType: "P"
    },
    {
        name: "Иод",
        symbol: "I",
        sequenceNumber: 53,
        electronsOnLayer: [2, 8, 18, 18, 7],
        atomicMass: 126.905,
        elementType: "P"
    },
    null,
    {
        name: "Ксенон",
        symbol: "Xe",
        sequenceNumber: 54,
        electronsOnLayer: [2, 8, 18, 18, 8],
        atomicMass: 131.3,
        elementType: "P"
    }
]
export const eighthLayer: Array<IElement | Array<IElement> | null> = [
    {
        name: "Цезий",
        symbol: "Cs",
        sequenceNumber: 55,
        electronsOnLayer: [2, 8, 18, 18, 8, 1],
        atomicMass: 132.905,
        elementType: "S"
    },
    {
        name: "Барий",
        symbol: "Ba",
        sequenceNumber: 56,
        electronsOnLayer: [2, 8, 18, 18, 8, 2],
        atomicMass: 137.34,
        elementType: "S"
    },
    null,
    {
        name: "Гафний",
        symbol: "Hf",
        sequenceNumber: 72,
        electronsOnLayer: [2, 8, 18, 32, 10, 2],
        atomicMass: 178.49,
        elementType: "D"
    },
    {
        name: "Тантал",
        symbol: "Ta",
        sequenceNumber: 73,
        electronsOnLayer: [2, 8, 18, 32, 11, 2],
        atomicMass: 180.948,
        elementType: "D"
    },
    {
        name: "Вольфрам",
        symbol: "W",
        sequenceNumber: 74,
        electronsOnLayer: [2, 8, 18, 32, 12, 2],
        atomicMass: 183.85,
        elementType: "D"
    },
    {
        name: "Рений",
        symbol: "Re",
        sequenceNumber: 75,
        electronsOnLayer: [2, 8, 18, 32, 13, 2],
        atomicMass: 186.207,
        elementType: "D"
    },
    [
        {
            name: "Осмий",
            symbol: "Os",
            sequenceNumber: 76,
            electronsOnLayer: [2, 8, 18, 32, 14, 2],
            atomicMass: 190.2,
            elementType: "D"
        },
        {
            name: "Иридий",
            symbol: "Ir",
            sequenceNumber: 77,
            electronsOnLayer: [2, 8, 18, 32, 15, 2],
            atomicMass: 192.22,
            elementType: "D"
        },
        {
            name: "Платина",
            symbol: "Pt",
            sequenceNumber: 78,
            electronsOnLayer: [2, 8, 18, 32, 17, 1],
            atomicMass: 195.09,
            elementType: "D"
        },
    ],
    null
]
export const ninthLayer: Array<IElement | null> = [
    {
        name: "Золото",
        symbol: "Au",
        sequenceNumber: 79,
        electronsOnLayer: [2, 8, 18, 32, 18, 1],
        atomicMass: 196.967,
        elementType: "D"
    },
    {
        name: "Ртуть",
        symbol: "Hg",
        sequenceNumber: 80,
        electronsOnLayer: [2, 8, 18, 32, 18, 2],
        atomicMass: 200.59,
        elementType: "D"
    },
    {
        name: "Таллий",
        symbol: "Tl",
        sequenceNumber: 81,
        electronsOnLayer: [2, 8, 18, 32, 18, 3],
        atomicMass: 204.37,
        elementType: "P"
    },
    {
        name: "Свинец",
        symbol: "Pb",
        sequenceNumber: 82,
        electronsOnLayer: [2, 8, 18, 32, 18, 4],
        atomicMass: 207.19,
        elementType: "P"
    },
    {
        name: "Висмут",
        symbol: "Bi",
        sequenceNumber: 83,
        electronsOnLayer: [2, 8, 18, 32, 18, 5],
        atomicMass: 208.98,
        elementType: "P"
    },
    {
        name: "Полоний",
        symbol: "Po",
        sequenceNumber: 84,
        electronsOnLayer: [2, 8, 18, 32, 18, 6],
        atomicMass: '[210]',
        elementType: "P"
    },
    {
        name: "Астат",
        symbol: "At",
        sequenceNumber: 85,
        electronsOnLayer: [2, 8, 18, 32, 18, 7],
        atomicMass: '[210]',
        elementType: "P"
    },
    null,
    {
        name: "Радон",
        symbol: "Rn",
        sequenceNumber: 86,
        electronsOnLayer: [2, 8, 18, 32, 18, 8],
        atomicMass: '[222]',
        elementType: "P"
    }
]