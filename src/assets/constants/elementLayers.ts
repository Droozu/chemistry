import { IElement } from "../../App";

const firstLayer: Array<IElement | null> = [
  {
    name: 'Водород',
    symbol: 'H',
    sequenceNumber: 1,
    electronsOnLayer: [1],
    atomicMass: 1.008,
    elementType: 'S',
    id: 1
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    name: 'Гелий',
    symbol: 'He',
    sequenceNumber: 2,
    electronsOnLayer: [2],
    atomicMass: 4.003,
    elementType: 'S',
    id: 2
  },
];

const secondLayer: Array<IElement | null> = [
  {
    name: 'Литий',
    symbol: 'Li',
    sequenceNumber: 3,
    electronsOnLayer: [2, 1],
    atomicMass: 6.941,
    elementType: 'S',
    id: 3
  },
  {
    name: 'Бериллий',
    symbol: 'Be',
    sequenceNumber: 4,
    electronsOnLayer: [2, 2],
    atomicMass: 9.0122,
    elementType: 'S',
    id: 4
  },
  {
    name: 'Бор',
    symbol: 'B',
    sequenceNumber: 5,
    electronsOnLayer: [2, 3],
    atomicMass: 10.811,
    elementType: 'P',
    id: 5
  },
  {
    name: 'Углерод',
    symbol: 'C',
    sequenceNumber: 6,
    electronsOnLayer: [2, 4],
    atomicMass: 12.011,
    elementType: 'P',
    id: 6
  },
  {
    name: 'Азот',
    symbol: 'N',
    sequenceNumber: 7,
    electronsOnLayer: [2, 5],
    atomicMass: 14.007,
    elementType: 'P',
    id: 7
  },
  {
    name: 'Кислород',
    symbol: 'O',
    sequenceNumber: 8,
    electronsOnLayer: [2, 6],
    atomicMass: 15.999,
    elementType: 'P',
    id: 8
  },
  {
    name: 'Фтор',
    symbol: 'F',
    sequenceNumber: 9,
    electronsOnLayer: [2, 7],
    atomicMass: 18.998,
    elementType: 'P',
    id: 9
  },
  null,
  {
    name: 'Неон',
    symbol: 'Ne',
    sequenceNumber: 10,
    electronsOnLayer: [2, 8],
    atomicMass: 20.179,
    elementType: 'P',
    id: 10
  },
];

const thirdLayer: Array<IElement | null> = [
  {
    name: 'Натрий',
    symbol: 'Na',
    sequenceNumber: 11,
    electronsOnLayer: [2, 8, 1],
    atomicMass: 22.99,
    elementType: 'S',
    id: 11
  },
  {
    name: 'Магний',
    symbol: 'Mg',
    sequenceNumber: 12,
    electronsOnLayer: [2, 8, 2],
    atomicMass: 24.312,
    elementType: 'S',
    id: 12
  },
  {
    name: 'Алюминий',
    symbol: 'Al',
    sequenceNumber: 13,
    electronsOnLayer: [2, 8, 3],
    atomicMass: 26.092,
    elementType: 'P',
    id: 13
  },
  {
    name: 'Кремний',
    symbol: 'Si',
    sequenceNumber: 14,
    electronsOnLayer: [2, 8, 4],
    atomicMass: 28.086,
    elementType: 'P',
    id: 14
  },
  {
    name: 'Фосфор',
    symbol: 'P',
    sequenceNumber: 15,
    electronsOnLayer: [2, 8, 5],
    atomicMass: 30.974,
    elementType: 'P',
    id: 15
  },
  {
    name: 'Сера',
    symbol: 'S',
    sequenceNumber: 16,
    electronsOnLayer: [2, 8, 6],
    atomicMass: 32.064,
    elementType: 'P',
    id: 16
  },
  {
    name: 'Хлор',
    symbol: 'Cl',
    sequenceNumber: 17,
    electronsOnLayer: [2, 8, 7],
    atomicMass: 35.453,
    elementType: 'P',
    id: 17
  },
  null,
  {
    name: 'Аргон',
    symbol: 'Ar',
    sequenceNumber: 18,
    electronsOnLayer: [2, 8, 8],
    atomicMass: 39.948,
    elementType: 'P',
    id: 18
  },
];
const fourthLayer: Array<IElement | Array<IElement> | null> = [
  {
    name: 'Калий',
    symbol: 'K',
    sequenceNumber: 19,
    electronsOnLayer: [2, 8, 8, 1],
    atomicMass: 39.102,
    elementType: 'S',
    id: 19
  },
  {
    name: 'Кальций',
    symbol: 'Ca',
    sequenceNumber: 20,
    electronsOnLayer: [2, 8, 8, 2],
    atomicMass: 40.08,
    elementType: 'S',
    id: 20
  },
  {
    name: 'Скандий',
    symbol: 'Sc',
    sequenceNumber: 21,
    electronsOnLayer: [2, 8, 9, 2],
    atomicMass: 44.956,
    elementType: 'D',
    id: 21
  },
  {
    name: 'Титан',
    symbol: 'Ti',
    sequenceNumber: 22,
    electronsOnLayer: [2, 8, 10, 2],
    atomicMass: 47.956,
    elementType: 'D',
    id: 22
  },
  {
    name: 'Ванадий',
    symbol: 'V',
    sequenceNumber: 23,
    electronsOnLayer: [2, 8, 11, 2],
    atomicMass: 50.941,
    elementType: 'D',
    id: 23
  },
  {
    name: 'Хром',
    symbol: 'Cr',
    sequenceNumber: 24,
    electronsOnLayer: [2, 8, 12, 2],
    atomicMass: 51.996,
    elementType: 'D',
    id: 24
  },
  {
    name: 'Марганец',
    symbol: 'Mn',
    sequenceNumber: 25,
    electronsOnLayer: [2, 8, 13, 2],
    atomicMass: 54.938,
    elementType: 'D',
    id: 25
  },
  [
    {
      name: 'Железо',
      symbol: 'Fe',
      sequenceNumber: 26,
      electronsOnLayer: [2, 8, 14, 2],
      atomicMass: 55.849,
      elementType: 'D',
      id: 26
    },
    {
      name: 'Кобальт',
      symbol: 'Co',
      sequenceNumber: 27,
      electronsOnLayer: [2, 8, 15, 2],
      atomicMass: 58.933,
      elementType: 'D',
      id: 27
    },
    {
      name: 'Никель',
      symbol: 'Ni',
      sequenceNumber: 28,
      electronsOnLayer: [2, 8, 16, 2],
      atomicMass: 58.7,
      elementType: 'D',
      id: 28
    },
  ],
  null,
];


export const layers = [
    firstLayer,
  secondLayer,
  thirdLayer,
  fourthLayer ,
];