// Deployed on Rinkeby
export const calculatorAddress = "0xF8FB1c5d3d5519E1867Fc1E845DA34c9367C3269";

export const calculatorAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "b",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "res",
        type: "int256",
      },
    ],
    name: "Add",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "b",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "res",
        type: "int256",
      },
    ],
    name: "Div",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "b",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "res",
        type: "int256",
      },
    ],
    name: "Mod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "b",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "res",
        type: "int256",
      },
    ],
    name: "Mul",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "b",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "res",
        type: "int256",
      },
    ],
    name: "Sub",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "div",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "mod",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "mul",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "sub",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
