const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/1-background/LightBlue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "DrakOrange",
            path: `${dir}/1-background/darkOrange.png`,
            weight: 50,
          },
          {
            id: 3,
            name: "Green",
            path: `${dir}/1-background/Green.png`,
            weight: 50,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
     
      {
        name: "Flag",
        elements: [
          {
            id: 0,
            name: "LunaFlag",
            path: `${dir}/3-flag/LunaFlag.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "USA",
            path: `${dir}/3-flag/USA.png`,
            weight: 90,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "Smiley",
            path: `${dir}/4-pin/Smiley.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "LunaBluePin",
            path: `${dir}/4-pin/LunaBluePin.png`,
            weight: 90,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Skull",
            path: `${dir}/5-skin/Skull.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
     
      {
        name: "Ties",
        elements: [
          {
            id: 0,
            name: "GreenTie",
            path: `${dir}/7-Ties/GreenTie.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "BlueTie",
            path: `${dir}/7-Ties/BlueTie.png`,
            weight: 5,
          },
          {
            id:2,
            name: "RedTie",
            path: `${dir}/7-Ties/RedTie.png`,
            weight: 50,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
     
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "No accessories",
            path: `${dir}/9-accessories/bat.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "No accessories",
            path: `${dir}/9-accessories/lollipop.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "No accessories",
            path: `${dir}/9-accessories/axe.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "Ghost hat",
            path: `${dir}/10-headwear/Ghosthat.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "helment",
            path: `${dir}/10-headwear/helment.png`,
            weight: 50,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
