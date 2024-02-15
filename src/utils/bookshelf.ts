type Book = {
  no: number
  name: string,
  author: string,
  buyLink: string,
}

export async function getAllBooks(): Promise<Book[]>{
  return [
    {
      "no": 17,
      "name": "You're surely joking, Mr. Feynman",
      "author": "Richard Feynman",
      "buyLink": "",
    },
    {
      "no": 16,
      "name": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "buyLink": "",
    },
    {
      "no": 15,
      "name": "The Silent Patient",
      "author": "Alex Michaelides",
      "buyLink": "",
    },
    {
      "no": 14,
      "name": "Shoe Dog",
      "author": "Phil Knight",
      "buyLink": "",
    },
    {
      "no": 13,
      "name": "Atomic Habits",
      "author": "James Clear",
      "buyLink": "",
    },
    {
      "no": 12,
      "name": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "buyLink": "",
    },
    {
      "no": 11,
      "name": "Elon Musk",
      "author": "Ashlee Vance",
      "buyLink": "",
    },
    {
      "no": 10,
      "name": "Cosmos",
      "author": "Carl Sagan",
      "buyLink": "",
    },
    {
      "no": 9,
      "name": "Eat That Frog!",
      "author": "Brian Tracy",
      "buyLink": "",
    },
    {
      "no": 8,
      "name": "Hooked",
      "author": "Nir Eyal",
      "buyLink": "",
    },
    {
      "no": 7,
      "name": "Einstein",
      "author": "Walter Isaacson",
      "buyLink": "",
    },
    {
      "no": 6,
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "buyLink": "",
    },
    {
      "no": 5,
      "name": "The Subtle Art of Not Giving a F*ck",
      "author": "Mark Manson",
      "buyLink": "",
    },
    {
      "no": 4,
      "name": "Six easy pieces",
      "author": "Richard Feynman",
      "buyLink": "",
    },
    {
      "no": 3,
      "name": "The winner stands alone",
      "author": "Paulo Coelho",
      "buyLink": "https://www.amazon.com/El-vencedor-est%C3%A1-solo-Spanish/dp/0061829684/ref=sr_1_4?crid=DJI6BF9MF7LE&keywords=the+winner+stands+alone+by+paulo+coelho&qid=1704687667&sprefix=The+winner+stand%2Caps%2C135&sr=8-4",
    },
    {
      "no": 2,
      "name": "Zero to One",
      "author": "Blake Masters and Peter Thiel",
      "buyLink": "https://www.amazon.com/Zero-One-Paperback-Peter-Thiel/dp/B00W0TK2R0/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1704687618&sr=8-1",
    },
    {
      "no": 1,
      "name": "A Brief History of Time",
      "author": "Stephen Hawking",
      "buyLink": "https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168/ref=sr_1_1?crid=CH2EOZMFAC3G&keywords=a+brief+history+of+time+by+stephen+hawking&qid=1704687576&sprefix=A+brief+%2Caps%2C165&sr=8-1",
    },
    {
      "no": 0,
      "name": "Wings of Fire",
      "author": "A. P. J. Abdul Kalam",
      "buyLink": "https://www.amazon.com/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461/ref=sr_1_1?crid=28K4D8OBQ5EM1&keywords=wings+of+fire+apj+abdul+kalam+book&qid=1704687551&sprefix=wings+of+fire+ap%2Caps%2C152&sr=8-1",
    },
  ];
}