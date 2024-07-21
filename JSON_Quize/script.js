let quizQuestions = [];
let score = {
  right: 0,
  wrong: 0,
  unanswered: 0,
};

let tabHiddenTime = 0;
let tabVisibleTime = 0;
let totalHiddenTime = 0;
let isTabHidden = false;

// URL to the JSON Server
const apiUrl = "http://localhost:3000/Questions";

// Initialize the video feed
const initCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.getElementById("video");
    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
};

// Fetch questions from the server
const fetchQuestions = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    quizQuestions = await response.json();
    Ui_Maker();
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};

// Add a question to the server
const addQuestion = async (question) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    await fetchQuestions(); // Reload questions after adding
  } catch (error) {
    console.error("Error adding question:", error);
  }
};

// Create UI elements for the questions
const Ui_Maker = () => {
  const questionListDiv = document.getElementById("question_list");
  questionListDiv.innerHTML = "";

  quizQuestions.forEach((elem, index) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "question-container";

    const questionHeader = document.createElement("div");
    questionHeader.className = "question-header";
    questionHeader.innerText = `${index + 1}) ${elem.Que}`;
    parentDiv.appendChild(questionHeader);

    // Create options with custom styling
    ["A", "B", "C", "D"].forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "option-label";

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = `question${index}`;
      radioInput.value = option;
      radioInput.className = "option-input";
      radioInput.id = `q${index}_opt${option}`;

      const label = document.createElement("label");
      label.htmlFor = radioInput.id;
      label.innerText = elem.options[option];

      optionDiv.appendChild(radioInput);
      optionDiv.appendChild(label);
      parentDiv.appendChild(optionDiv);
    });

    questionListDiv.appendChild(parentDiv);
  });
};

// Check answers and calculate score
const Check_Questions = () => {
  score = {
    right: 0,
    wrong: 0,
    unanswered: 0,
  };

  quizQuestions.forEach((elem, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption) {
      if (selectedOption.value === elem.Answer) {
        score.right++;
        selectedOption.parentElement.classList.add("correct-answer");
      } else {
        score.wrong++;
        selectedOption.parentElement.classList.add("wrong-answer");
        document
          .querySelector(
            `input[name="question${index}"][value="${elem.Answer}"]`
          )
          ?.parentElement.classList.add("correct-answer");
      }
    } else {
      score.unanswered++;
      document
        .querySelectorAll(`input[name="question${index}"]`)
        .forEach((input) => {
          input.parentElement.classList.add("unanswered");
        });
    }
  });

  // Update score display
  document.getElementById("score").innerHTML = `
    <li>Right: ${score.right}</li>
    <li>Wrong: ${score.wrong}</li>
    <li>Unanswered: ${score.unanswered}</li>
  `;

  // Disable all buttons
  document.querySelectorAll("input[type=radio]").forEach((input) => {
    input.disabled = true;
  });
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("restart-btn").style.display = "block";
};

// Handle new question form submission
const Data_Handle = async (event) => {
  event.preventDefault();

  const obj = {
    Que: document.getElementById("que").value,
    options: {
      A: document.getElementById("opA").value,
      B: document.getElementById("opB").value,
      C: document.getElementById("opC").value,
      D: document.getElementById("opD").value,
    },
    Answer: document.getElementById("ans").value,
  };

  if (obj.Que.length > 3 && Object.values(obj.options).includes(obj.Answer)) {
    await addQuestion(obj);
    // Optionally clear form fields
    document.getElementById("form").reset();
  }
};

// Restart the quiz
const Restart_Quiz = () => {
  document.querySelectorAll("input[type=radio]").forEach((input) => {
    input.disabled = false;
  });
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("restart-btn").style.display = "none";

  // Clear previous answers and classes
  document
    .querySelectorAll(".correct-answer, .wrong-answer, .unanswered")
    .forEach((element) => {
      element.classList.remove("correct-answer", "wrong-answer", "unanswered");
    });
};

// Show a message when switching tabs
const handleVisibilityChange = () => {
  const messageList = document.getElementById("visibility-messages");
  const currentTime = new Date().getTime();

  if (document.hidden) {
    // Tab is hidden
    tabHiddenTime = currentTime;
    isTabHidden = true;
  } else {
    // Tab is visible
    if (isTabHidden) {
      const hiddenDuration = Math.floor((currentTime - tabHiddenTime) / 1000); // Duration in seconds
      totalHiddenTime += hiddenDuration;

      const messageItem = document.createElement("li");
      messageItem.textContent = `You were away for ${hiddenDuration} seconds.`;
      messageList.appendChild(messageItem);
      isTabHidden = false;
    } else {
      const messageItem = document.createElement("li");
      messageItem.textContent = "Welcome back to the quiz!";
      messageList.appendChild(messageItem);
    }
  }
};

// Event listeners
document.getElementById("form").addEventListener("submit", Data_Handle);
document
  .getElementById("submit-btn")
  .addEventListener("click", Check_Questions);
document.getElementById("restart-btn").addEventListener("click", Restart_Quiz);
document.addEventListener("visibilitychange", handleVisibilityChange);

// Initialize the UI and camera
fetchQuestions();
initCamera();
