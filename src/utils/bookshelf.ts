type Book = {
  no: number,
  name: string,
  author: string,
}

export async function getAllBooks(): Promise<Book[]>{
  return [
    {
      "no": 17,
      "name": "You're surely joking, Mr. Feynman",
      "author": "Richard Feynman",
    },
    {
      "no": 16,
      "name": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
    },
    {
      "no": 15,
      "name": "The Silent Patient",
      "author": "Alex Michaelides",
    },
    {
      "no": 14,
      "name": "Shoe Dog",
      "author": "Phil Knight",
    },
    {
      "no": 13,
      "name": "Atomic Habits",
      "author": "James Clear",
    },
    {
      "no": 12,
      "name": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
    },
    {
      "no": 11,
      "name": "Elon Musk",
      "author": "Ashlee Vance",
    },
    {
      "no": 10,
      "name": "Cosmos",
      "author": "Carl Sagan",
    },
    {
      "no": 9,
      "name": "Eat That Frog!",
      "author": "Brian Tracy",
    },
    {
      "no": 8,
      "name": "Hooked",
      "author": "Nir Eyal",
    },
    {
      "no": 7,
      "name": "Einstein",
      "author": "Walter Isaacson",
    },
    {
      "no": 6,
      "name": "The Alchemist",
      "author": "Paulo Coelho",
    },
    {
      "no": 5,
      "name": "The Subtle Art of Not Giving a F*ck",
      "author": "Mark Manson",
    },
    {
      "no": 4,
      "name": "Six easy pieces",
      "author": "Richard Feynman",
    },
    {
      "no": 3,
      "name": "The winner stands alone",
      "author": "Paulo Coelho",
    },
    {
      "no": 2,
      "name": "Zero to One",
      "author": "Blake Masters and Peter Thiel",
    },
    {
      "no": 1,
      "name": "A Brief History of Time",
      "author": "Stephen Hawking",
    },
    {
      "no": 0,
      "name": "Wings of Fire",
      "author": "A. P. J. Abdul Kalam",
    },
  ];
}