const quizQuestions = [
  {
    Question:
      "Who is teaching Backend in Red and Multimedia Education at Branch ved Road ?",
    option_A: "Jay Gondaliya",
    option_B: "Vrajesh Rank",
    option_C: "Rajat Sinha",
    option_D: "Kapil Sharma",
    Answer: "c",
  },
  {
    Question: "Who is 1st President of India ?",
    option_A: "Rajendra Prasad",
    option_B: "Sardar Patel",
    option_C: "Sharhrukh Khan",
    option_D: "Donald Trump",
    Answer: "a",
  },
  {
    Question: "Give the name of child Mughal king Babar ?",
    option_A: "Akbar",
    option_B: "Humayun",
    option_C: "Shahjahan",
    option_D: "Rajat Sinha",
    Answer: "b",
  },
  {
    Question: "What do you call a boomerang that doesn't come back?",
    option_A: "A stick",
    option_B: "A wand",
    option_C: "A straight-rang",
    option_D: "Lost cause",
    Answer: "d",
  },
  {
    Question: "What's the scientific term for a fear of palindromes?",
    option_A: "Palindromatophobia",
    option_B: "Aibohphobia",
    option_C: "Revirginitiphobia",
    option_D: "Hippopotomonstrosesquippedaliophobia",
    Answer: "b",
  },
  {
    Question: "How many tickles does it take to make an octopus laugh?",
    option_A: "8",
    option_B: "10",
    option_C: "20",
    option_D: "Just one, but you have to find its ticklish spot first!",
    Answer: "d",
  },
  {
    Question: "What did the janitor say when he jumped out of the closet?",
    option_A: "Supplies!",
    option_B: "Boo!",
    option_C: "Cleaning up this mess!",
    option_D: "Wanna hear a dirty joke? I've got a mop!",
    Answer: "a",
  },
  {
    Question: "Why don't skeletons fight each other?",
    option_A: "They don't have the guts",
    option_B: "They're too bonely",
    option_C: "They don't have the stomach for it",
    option_D: "They always bury the hatchet",
    Answer: "d",
  },
  {
    Question: "How do you catch a squirrel?",
    option_A: "Climb a tree and act like a nut",
    option_B: "Set up a tiny squirrel trap with acorns",
    option_C: "Ask politely",
    option_D: "Lure it with a tiny disco ball and a miniature dance floor",
    Answer: "c",
  },
  {
    Question: "What's orange and sounds like a parrot?",
    option_A: "A carrot",
    option_B: "A traffic cone",
    option_C: "A mango",
    option_D: "A parrot wearing an orange costume",
    Answer: "a",
  },
  {
    Question: "Why did the tomato turn red?",
    option_A: "It saw the salad dressing",
    option_B: "Because it was embarrassed",
    option_C: "It had a crush on the apple",
    option_D: "It was ripe and ready to ketchup!",
    Answer: "d",
  },
  {
    Question: "What's the best thing about Switzerland?",
    option_A: "Its neutrality",
    option_B: "Its chocolate",
    option_C: "Its watches",
    option_D: "Its fondue fountains",
    Answer: "b",
  },
  {
    Question: "How do you organize a space party?",
    option_A: "You planet",
    option_B: "You asteroid everything",
    option_C: "You moonwalk your way through it",
    option_D: "You hire a comet-caterer",
    Answer: "a",
  },
  {
    Question: "Why don't scientists trust atoms?",
    option_A: "Because they make up everything",
    option_B: "Because they're always splitting up",
    option_C: "Because they're too small to be reliable",
    option_D: "Because they're always bonding with questionable elements",
    Answer: "a",
  },
  {
    Question: "What did the grape say when it got stepped on?",
    option_A: '"Ouch!"',
    option_B: '"It\'s crushing my spirit!"',
    option_C: '"Nothing, it just let out a little wine"',
    option_D: '"Hey, that\'s grape abuse!"',
    Answer: "c",
  },
  {
    Question: "Why did the scarecrow win an award?",
    option_A: "Because he was outstanding in his field",
    option_B: "Because he had a great hat",
    option_C: "Because he scared off all the crows",
    option_D: 'Because he knew how to pull off the perfect "hay" hairstyle',
    Answer: "a",
  },
  {
    Question: "How does a penguin build its house?",
    option_A: "Igloos it together",
    option_B: "Ice and easy, one block at a time",
    option_C: "It hires an architect",
    option_D: "It just wings it",
    Answer: "b",
  },
  {
    Question: "Why did the math book look sad?",
    option_A: "Because it had too many problems",
    option_B: "Because it couldn't count on anyone",
    option_C: "Because it was feeling divided",
    option_D: 'Because it lost its "add"itude',
    Answer: "a",
  },
  {
    Question: "What do you call fake spaghetti?",
    option_A: "Impasta",
    option_B: "Fauxnoodles",
    option_C: "Phony-rigatoni",
    option_D: "Spag-fake-tti",
    Answer: "a",
  },
  {
    Question: "Why did the bicycle fall over?",
    option_A: "Because it was two-tired",
    option_B: "Because it lost its balance",
    option_C: "Because someone parked it improperly",
    option_D: "Because it was too tired to stand up",
    Answer: "a",
  },
  {
    Question: "How do you make holy water?",
    option_A: "You boil the hell out of it",
    option_B: "You bless regular water",
    option_C: "You add some angel tears",
    option_D: "You invite a priest to water-ski and hope for the best",
    Answer: "b",
  },
  {
    Question: "What's a frog's favorite type of music?",
    option_A: "Hip-hop",
    option_B: "Croak and roll",
    option_C: "Ribbit-rock",
    option_D: "Amphibian funk",
    Answer: "b",
  },
  {
    Question: "Why don't skeletons fight each other?",
    option_A: "They don't have the guts",
    option_B: "They're too bonely",
    option_C: "They don't have the stomach for it",
    option_D: "They always bury the hatchet",
    Answer: "a",
  },
];

const Ui_Maker = (event) => {
  // event.preventDefault();
  let count = 0;
  quizQuestions.map((elem, index) => {
    let countQue = document.createElement("span");
    let spanQue = document.createElement("span");
    let divQue = document.createElement("div");
    let btnOptA = document.createElement("button");
    let btnOptB = document.createElement("button");
    let btnOptC = document.createElement("button");
    let btnOptD = document.createElement("button");

    countQue.innerHTML = `${++count} )`;
    spanQue.innerHTML = `${elem.Question}`;
    // divQue.innerHTML = `${countQue.innerHTML} ${elem.Question}`;
    btnOptA.innerHTML = elem.option_A;
    btnOptB.innerHTML = elem.option_B;
    btnOptC.innerHTML = elem.option_C;
    btnOptD.innerHTML = elem.option_D;

    btnOptA.value = `a`;
    btnOptB.value = `b`;
    btnOptC.value = `c`;
    btnOptD.value = `d`;

    let parentDiv = document.createElement("div");

    countQue.setAttribute("class", "count");
    divQue.setAttribute("class", "que");
    parentDiv.setAttribute("class", "list");

    divQue.append(countQue, spanQue);
    parentDiv.append(divQue, btnOptA, btnOptB, btnOptC, btnOptD);

    document.querySelector(".question_list").append(parentDiv);

    btnOptA.addEventListener("click", () =>
      Check_Questions(index, btnOptA, elem.Answer)
    );
    btnOptB.addEventListener("click", () =>
      Check_Questions(index, btnOptB, elem.Answer)
    );
    btnOptC.addEventListener("click", () =>
      Check_Questions(index, btnOptC, elem.Answer)
    );
    btnOptD.addEventListener("click", () =>
      Check_Questions(index, btnOptD, elem.Answer)
    );
  });
};

const Check_Questions = (index, btn, answer) => {
  if (btn.value == quizQuestions[index].Answer)
    btn.style.backgroundColor = "green";
  else btn.style.backgroundColor = "red";
};

// document.getElementById("strBtn").addEventListener("click", Ui_Maker);

Ui_Maker();

const Data_Handle = (event) => {
  event.preventDefault();

  let obj = {
    Question: document.getElementById("que").value,
    option_A: document.getElementById("opA").value,
    option_B: document.getElementById("opB").value,
    option_C: document.getElementById("opC").value,
    option_D: document.getElementById("opD").value,
    Answer: document.getElementById("ans").value,
  };

  if (
    obj.Question.length > 3 &&
    (obj.option_A == obj.Answer ||
      obj.option_B == obj.Answer ||
      obj.option_C == obj.Answer ||
      obj.option_D == obj.Answer)
  ) {
    quizQuestions.push(obj);
    console.log("hhi");
    Ui_Maker();
  }
};

document.getElementById("form").addEventListener("submit", Data_Handle);
