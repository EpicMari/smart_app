import { v4 as uuidv4 } from "uuid";

export const dataRooms = [
  {
    id: uuidv4(),
    name: "Living Room",
    members: 3,
    devices: [
      {
        name: "Lamp",
      },
    ],
  },
  { id: uuidv4(), name: "Bed Room", members: 3, devices: 5 },
  { id: uuidv4(), name: "Quest Room", members: 2, devices: 3 },
  { id: uuidv4(), name: "Kitchen", members: 2, devices: 4 },
  { id: uuidv4(), name: "Kids Room", members: 1, devices: 4 },
  { id: uuidv4(), name: "Balcony", members: 4, devices: 2 },
];
