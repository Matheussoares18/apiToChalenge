import { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send([
    {
      id: 1,
      name: "Tênis Adidas",
      quantity: 10,
      price: 220,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "https://www.imagemhost.com.br/images/2021/09/30/images-1.jpg",
    },

    {
      id: 2,
      name: "Tênis Nike",
      quantity: 2,
      price: 250,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "https://www.imagemhost.com.br/images/2021/09/30/images.jpg",
    },
    {
      id: 3,
      name: "Tênis Mizuno",
      quantity: 4,
      price: 180,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "https://www.imagemhost.com.br/images/2021/09/30/904105370.jpg",
    },
    {
      id: 4,
      name: "Tênis Vans",
      quantity: 3,
      price: 200,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image:
        "https://www.imagemhost.com.br/images/2021/09/30/Tenis-Vans-Wm-Ward-0.jpg",
    },
  ]);
};
