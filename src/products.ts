export interface product {
  name: string;
  title: string;
  price: number;
  image: string;
  id: string;
}

export const products: product[] = [
  {
    id: "1",
    name: "Skateboard - 9.6 Big Plant Team",
    title: "Skateboard - 8.6 Big Plant Team",
    price: 1999,
    image: require('./images/bild.jpg')
  },
  {
    id: "2",
    name: "Skateboard - 8.6 Big Plant Team",
    title: "Skateboard - 8.6 Big Plant Team",
    price: 999,
    image: require('./images/bild.jpg')
  },
  {
    id: "3",
    name: "Skateboard - 7.75 Double Pipe",
    title: "Skateboard - 7.75 Double Pipe",
    price: 1199,
    image: require('./images/bild.jpg')
  },
  {
    id: "4",
    name: "Skateboard - 5 Stein",
    title: "Skateboard - 5 Stein",
    price: 2900,
    image: require('./images/bild.jpg')
  },
  {
    id: "5",
    name: "Skateboard - 8.6 Stein",
    title: "Skateboard - 8.6 Stein",
    price: 2900,
    image: require('./images/bild.jpg')
  },
  {
    id: "6",
    name: "Skateboard - 7.875 Rave",
    title: "Skateboard - 7.875 Rave",
    price: 499,
    image: require('./images/bild.jpg')
  },
  {
    id: "7",
    name: "Skateboard - 8 Outdoor",
    title: "Skateboard - 8 Outdoor",
    price: 499,
    image: require('./images/bild.jpg')
  },
  {
    id: "8",
    name: "Skateboard - 8 SUB",
    title: "Skateboard - 8 SUB",
    price: 499,
    image: require('./images/bild.jpg')
  },
  {
    id: "9",
    name: "Skateboard - 8.25 Banana",
    title: "Skateboard - 8.25 Banana",
    price: 499,
    image: require('./images/bild.jpg')
  },
];
