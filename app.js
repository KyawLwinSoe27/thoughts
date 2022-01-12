// local reviews data
const reviews = [
  {
    id: 1,
    name: "Confucius",
    job: "Chinese Philosopher",
    img:
      "https://www.worldhistory.org/uploads/images/969.jpg?v=1635122702",
    text:
      "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
  },
  {
    id: 2,
    name: "Lao Tzu",
    job: "Ancient Chinese philosopher and writer.",
    img:
      "https://images.gr-assets.com/authors/1435903703p8/2622245.jpg",
    text:
      "Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you. ",
  },
  {
    id: 3,
    name: "Confucius",
    job: "Chinese Philosopher",
    img:
        "https://www.worldhistory.org/uploads/images/969.jpg?v=1635122702",
    text:
      "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    id: 4,
    name: "Socrates",
    job: "Greek Philosopher",
    img:
      "https://images.saymedia-content.com/.image/t_share/MTc5NTI0NTM1MTE1OTgxOTAz/the-life-and-times-of-the-ancient-greek-philosopher-socrates.jpg",
    text:
      "My advice to you is get married; if you find a good wife, you'll be happy, if not you become a philosopher. ",
  },
  {
    id: 5,
    name: "Hz Ali bin Abi Talib",
    job: "The Caliph of the Rashidun Caliphate",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thu…8%A3%D8%A8%D9%8A_%D8%B7%D8%A7%D9%84%D8%A8.svg.png",
    text:
        " A moment of patience in the moment of danger prevents thousand of moments of regret. ",
  },
  {
    id: 6,
    name: "Confucius",
    job: "Chinese Philosopher",
    img:
        "https://www.worldhistory.org/uploads/images/969.jpg?v=1635122702",
    text:
        " A journey of a thousand miles begins with a single step. ",
  },
  {
    id: 7,
    name: "Prophet Muhammad (PBUH)",
    job: "religious, social, and political leader",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thu…_vignette_Al-Masjid_AL-Nabawi_Door800x600x300.jpg",
    text:
        "There is no beauty better than intellect. ",
  },
  {
    id: 8,
    name: "Nelson Mandela",
    job: "South African anti-apartheid revolutionary, political leader and philanthropist",
    img:
        "\thttps://upload.wikimedia.org/wikipedia/commons/thu…on_Mandela_1994.jpg/440px-Nelson_Mandela_1994.jpg",
    text:
        "It always seems impossible until it's done. ",
  },
  {
    id: 9,
    name: "Pele",
    job: "Brazilian former professional footballer ",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thu…hew_Smith.jpg/440px-Pele_by_John_Mathew_Smith.jpg",
    text:
        "Success is not accident. It's hard work, perseverance,learning,studying,sacrifice and most of all, love of what you are doing or learning to do. ",
  },
  {
    id: 10,
    name: "Confucius",
    job: "Chinese Philosopher",
    img:
        "https://www.worldhistory.org/uploads/images/969.jpg?v=1635122702",
    text:
        "Everything has beautiful, but not everyone see it. ",
  },
  {
    id: 11,
    name: "Milton Berle",
    job: "American comedian and actor",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thu…_publicity.jpg/440px-Milton_Berle_-_publicity.jpg",
    text:
        "If opportunity does not knock, build a door. ",
  },
  {
    id: 12,
    name: "Plato",
    job: "Athenian Philosopher",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/1024px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    text:
        "if you do not take an interest in the affairs of your government, then you are doomed to live under the rules of fool. ",
  },
  {
    id: 13,
    name: "Confucius",
    job: "Chinese Philosopher",
    img:
        "https://www.worldhistory.org/uploads/images/969.jpg?v=1635122702",
    text:
        " Life is really simple, but we insist on making it complicated. ",
  },
  {
    id: 14,
    name: "James Cash Penney",
    job: "American businessman and entrepreneur",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/5/54/James_Cash_Penney_%28ca._1902%29.jpg",
    text:
        "The greatest teacher I know is the job itself. ",
  },
  {
    id: 15,
    name: "Jonas Edward Salk",
    job: " American virologist and medical researcher",
    img:
        "\thttps://upload.wikimedia.org/wikipedia/commons/thu…Jonas_Salk_candid.jpg/440px-Jonas_Salk_candid.jpg",
    text:
        "The reward for work well done is the opportunity to do more. ",
  },
  {
    id: 16,
    name: "Plato",
    job: "Athenian Philosopher",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/1024px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    text:
        "At the touch of love, everyone becomes poet. ",
  },
  {
    id: 17,
    name: "Byron Dorgan",
    job: "An American author, businessman, and former United States Senator and United States Representative",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thu…0px-Byron_Dorgan%2C_official_photo_portrait_2.jpg",
    text:
        "Working hard and working smart sometimes can be two different things.",
  },
  {
    id: 18,
    name: "Ken Poirot",
    job: "Author",
    img:
        "https://images.gr-assets.com/authors/1400878998p5/8201501.jpg",
    text:
        "Today is your opportunity to build the tomorrow you want. ",
  },
  {
    id: 19,
    name: "Plato",
    job: "Athenian Philosopher",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/1024px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    text:
        "Education is teaching our children to desire the right things. ",
  },
  {
    id: 20,
    name: "Sir Winston Leonard Spencer Churchill",
    job: "British Statesman",
    img:
        "\thttps://upload.wikimedia.org/wikipedia/commons/thu…jpg/440px-Sir_Winston_Churchill_-_19086236948.jpg",
    text:
        "Success is not final. Failure is not fatal. It is the courage to continue that counts. ",
  },
  {
    id: 21,
    name: "Prophet Muhammad (PBUH)",
    job: "religious, social, and political leader",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thu…_vignette_Al-Masjid_AL-Nabawi_Door800x600x300.jpg",
    text:
        "The Strong men is not the good Wrestler, the Strong Men is only the one who controls himself when he is angry. ",
  },
  {
    id: 22,
    name: "Plato",
    job: "Athenian Philosopher",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/1024px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    text:
        "Reality is created by the mind, we can change our reality by changing our mind. ",
  },


];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


//Star from here
let currentItem = 0;



window.addEventListener("DOMContentLoaded", function (){
  showPerson(currentItem);

});

function showPerson(about){
  const item = reviews[about];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener("click", function (){
  if (currentItem < 0){
    currentItem = 0;
  }else
  currentItem--;
  showPerson(currentItem);
  console.log(currentItem)
});

nextBtn.addEventListener("click", function (){
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  } else
  currentItem++;
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function (){
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
})
