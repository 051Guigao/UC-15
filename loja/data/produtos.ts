interface Produto {
    id: string;
    titulo: string;
    preco: number;
    image: string;
  }
  
  export const produtos: Produto[] = [
    { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2tdBGTqI2K9xLOhDWvXrc-ETZ-52M9NUn81bC_U8NA&s=10" ,id: '1', titulo: 'Tênis', preco: 299.99 },
    { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4BFF5iJYb7FN9jKCqep1qyzkyqfXRGJP-c6x94WFjg&s=10" ,id: '2', titulo: 'Mochila Nike', preco: 170 },
    { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRprR-ANi5jaGyrqdCK3nCxGdJjYO3fkJRoLhi_PSOyA&s=10" ,id: '3', titulo: 'G703', preco: 679.99 },
  ]