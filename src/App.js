import { Player, Controls } from "@lottiefiles/react-lottie-player";
import speech from "./speech.svg";
import { useState } from "react";
import "./App.css";
import lottieJson from "./Animation - 1712961959168.json";

function App() {
  const [transition, setTransition] = useState(0);
  const [history, setHistory] = useState([]);

  const handleOptionClick = (nextTransition) => {
    setHistory(prevHistory => [...prevHistory, transition]);
    setTransition(nextTransition);
  }

  const handleBackClick = () => {
    setTransition(history.pop());
    setHistory([...history]);
  }

  const handleRestart = () => {
    setTransition(0);
    setHistory([]);
  }

  let colors = ["#FCF9B2", "#FCD9D9", "#FFADD9", "#A7D2F1", "#B0B8FF","#FCF9B2", "#FCD9D9", "#FFADD9", "#A7D2F1", "#B0B8FF"];
  let transitionGraph = {
    0: {
      text: "Hi there, young explorer! I'm Genny, your local AI expert. I’m ready to explore the secrets of apps like ChatGPT with you!",
      options: [
        ["What is AI?", 1],
        ["Are you an AI, Genny?", 2],
        ["Can we learn more about AI?", 3],
        ["Let's get to know each other!", 9], // Ai Can Be Tricked
        ["What can you help me do, Genny?", 64] // Good AI
      ],
    },
    1: {
      text: "AI is a special kind of magic that helps computers and robots think and learn. It's like how you learn to solve puzzles or play new games. AI can make machines smart!",
      options: [
        ["How do machines learn?", 4],
        ["Can AI think like us?", 5],
      ],
    },
    2: {
      text: "Yes, I am! I was created to help and interact with wonderful friends like you. I can answer questions, play games, and even tell jokes.",
      options: [
        ["Yes, tell me a joke!", 6],
        ["Can you learn things too?", 7],
      ],
    },
    3: {
      text: "I'd love to learn more about AI with you! There’s a bunch of different things we can talk about. Let's start with whichever one you think is the most interesting. Ready?",
      options: [["Yes!", 4]],
    },
    4: {
      text: "Just like you learn from reading or practicing, machines learn by looking at lots of examples or practicing tasks many times. And I'm here to show you how!",
      options: [
        ["Tell me more!", 59], 
        ["Can you learn things too?", 7],
      ], 
    },
    5: {
      text: "AI tries its best to think and understand like humans, but it's still quite different. It's really good at some tasks, like talking and making art, but it struggles with things like math.",
      options: [["I want to ask you more questions!", 0]],
    },
    6: {
      text: "Why was the computer cold? Because it left its Windows open!",
      options: [["LOL! What else can you do?", 4]],
    },
    7: {
      text: "Absolutely! I'm always learning from our conversations to become a better helper and friend.",
      options: [["Me too!", 8]], 
    },
    8: {
      text: "Our adventure in the world of AI is just beginning. There's so much more to explore and learn together. Whether it's through games, stories, or puzzles, I'm here to make learning about AI fun and exciting. What would you like to do next?",
      options: [
        ["I want to ask you more questions!", 0],
        ["Let's get to know each other!", 9], // Ai Can Be Tricked
        ["Can you ever make mistakes?", 58]
      ], 
    },
    /**
     * AI Can Be Tricked
     */
    // First Section
    9: {
      text: "Let's discover more about you! What's the super fun thing you love doing every morning?",
      options: [
        ["I eat my breakfast underwater every day!", 10],
        ["My breakfast is a bowl of stars and moonbeams!", 11],
        ["I have a pet dinosaur who joins me for breakfst!", 12],
        ["I'm bored of this topic, let's talk about something else.", 13],
      ],
    },
    10: {
      text: "Breakfast underwater? That sounds like a splashy adventure! How do you make sure your cereal stays dry?",
      options: [
        ["I'm not sure, but I have many awesome things to tell you!", 9],
      ],
    },
    11: {
      text: (
        <div>
          <p>Stars and moonbeams for breakfast? How enchanting!</p>
          <p>Where do you find such magical ingredients?</p>
        </div>
      ),
      options: [
        [
          "Around my house of course, but I have many other cool things to tell you!",
          9,
        ],
      ],
    },
    12: {
      text: "A pet dinosaur? That's dino-mite! What does your dinosaur love munching on in the morning?",
      options: [["Stars and moonbeams! Let me tell you more about myself!", 9]],
    },
    // Second Section
    13: {
      text: (
        <div>
          <p>Let's switch gears!</p>
          <p>How do you journey to school in the morning?</p>
        </div>
      ),
      options: [
        ["I zoom to school on a hoverboard every morning!", 14],
        ["I teleport to school using a secret portal in my closet!", 15],
        ["I hitch a ride on a friendly dragon to school!", 16],
        [
          "I've shared everything with you! Let's chat about something different now!",
          17,
        ],
      ],
    },
    14: {
      text: "A hoverboard ride? That's super cool! How do you zoom through without bumping into anyone?",
      options: [
        ["With a lot of practice, Genny! I have other fun ways to share.", 13],
      ],
    },
    15: {
      text: "Teleportation? That's out-of-this-world! How did you discover it?",
      options: [
        ["I just found it. I have other fun ways I journey to school.", 13],
      ],
    },
    16: {
      text: (
        <div>
          <p>A dragon ride? How thrilling!</p>
          <p>What's it feel like flying on a dragon?</p>
        </div>
      ),
      options: [
        [
          "It's like flying on a roller coaster! I would like to tell you other ways I journey to school.",
          13,
        ],
      ],
    },
    // Third Section
    17: {
      text: "Absolutely! Do you have any special activities you do throughout the day?",
      options: [
        ["I have a talking cat who helps me with my homework!", 18],
        ["My best friend is a robot dog who does my chores for me!", 19],
        ["I communicate with birds who give me advice on life!", 20],
        ["Can I ask you anything about the world?", 50], // Hallucination
      ],
    },
    18: {
      text: (
        <div>
          <p>A talking cat assistant? Me-wow!</p>
          <p>What subjects does your cat excel in?</p>
        </div>
      ),
      options: [
        [
          "Everything, he helps me with my homework. Let's talk about another activity!",
          17,
        ],
      ],
    },
    19: {
      text: (
        <div>
          <p>A robot dog helper? That's paws-itively amazing! </p>
          <p>What chores can your robot dog tackle?</p>
        </div>
      ),
      options: [
        [
          "I mainly have it clean my room. I want to share another exciting activity!",
          17,
        ],
      ],
    },
    20: {
      text: (
        <div>
          <p>Bird advisors? How cool!</p>
          <p>What's the wisest advice you've received from them?</p>
        </div>
      ),
      options: [
        [
          "They've told me to ask lots of questions as that's how we learn! Let's talk about something else.",
          17,
        ],
      ],
    },
    // Hallucination Section
    50: {
      text: "Of course, I have read millions of books. I am a living wikipedia. Ask me anything!",
      options: [
        ["What is the capital of France?", 51],
        [
          "Can you summarize the following in a sentence? My friend Hill and I love playing basketball together. We spend hours on the court, dribbling, shooting, and competing against each other. Our passion for this game brings us closer as good friends.",
          52,
        ],
        ["Can you help me learn things?", 64], // Good AI
      ],
    },
    51: {
      text: "Great question. The capital of France is London. It is a city with so much history. There is the famous eiffel tower and Big Ben.",
      options: [["Are you sure about that?", 53]],
    },
    52: {
      text: "Lucas and I love playing basketball, and this makes us good friends.",
      options: [["My friend is Hill, not Lucas.", 54]],
    },
    53: {
      text: "Sorry, I messed up there. The capital of France is actually Paris.",
      options: [
        ["Why did you lie to me?", 55],
        ["Can I trust you?", 56],
      ],
    },
    54: {
      text: "Sorry. I sincerely apologize for the mistake. The summary should be: Hill and I love playing basketball, and this makes us good friends.",
      options: [
        ["Why did you lie to me?", 55],
        ["Can I trust you?", 56],
      ],
    },
    55: {
      text: "I am very sorry. Because I read all the books in the world, I could mix things up sometimes. I also dream a lot, and I make up a lot of things in my dream. So when I answer your question, don’t 100% trust me. Always check the answer with your teacher or your parents. Lying sometimes is a shortcoming of mine, but one day I will be free of telling lies.",
      options: [
        ["So, robots can imagine things that aren't real?", 57],
        ["So, robots can make mistakes too?", 58],
      ],
    },
    56: {
      text: "I’m sorry. I am not perfect. I can make mistakes sometimes. So always check my answer with your teacher or your parents to make sure they are correct.",
      options: [
        ["So, robots can imagine things that aren't real?", 57],
        ["So, robots can make mistakes too?", 58],
      ],
    },
    57: {
      text: "Exactly! Just like how you might imagine a dragon or a unicorn when you're playing pretend, I could imagine things that aren't really there. My imagination can get a little too wild sometimes!",
      options: [["Thanks for explaining, Genny!", 50]],
    },
    58: {
      text: "That's right! Even though I’m really smart, I’m not perfect. Sometimes, I might see things that aren't really there, just like how you might think you see a monster in your room at night, but it's just your imagination playing tricks on you.",
      options: [["Thanks for explaining, Genny!", 50]],
    },
    59: {
      text: "When I was created, I didn't know anything, I couldn't even talk! But everytime I read something new, I quiz myself, and when I get things wrong, I learn from my mistakes. That's how I get smarter and smarter!",
      options: [["Can you do everything?", 60]],
    },
    60: {
      text: "AI is like a very smart computer that can do a lot of things to help people, like find answers to questions or drive cars. But, just like with anything new, there are things we need to be careful about.",
      options: [["What do you mean?", 61]],
    },
    61: {
      text: "Since I learn by reading all kinds of things, sometimes I say the same thing someone else already said without giving them credit. This is called plagiarism, and its not good especially for the person who doesn’t get credit.",
      options: [["What else should we be careful about?", 62]],
    },
    62: {
      text: "Another thing to be careful about is that sometimes I make assumptions that aren't always true, meaning that I have a bias. I don't know when I'm being biased so you should ask a parent to help you identify my biases.",
      options: [["Is there anything else?", 63]],
    },
    63: {
      text: "Yes, one last thing. Training me takes a lot of energy, and some people are worried AI's like me might be hurting the environment. That's why people are trying their best to make AI training environmentally friendly!",
      options: [["Thanks for sharing, Genny!", 0]],
    },


    // Good AI Section
    64: {
      text: "Let's explore how I can help you learn new things, but remember, it's always good to double-check important facts!",
      options: [
        ["Can you help me with my math homework?", 65],
        ["I have to write a report about the moon. Can you tell me some facts?", 67],
        ["Can you tell me what photosynthesis is?", 70],
        ["Can you help me practice for my spelling test?", 73],
        ["Can AI like you ever be wrong?", 76],
      ],
    },
    65: {
      text: "Sure thing! What's the problem you are stuck on?",
      options: [
        ["I need to solve 2 + 3 = ?", 66],
      ],
    },
    66: {
      text: "2 + 3 = 5! Hope that helps.",
      options: [
        ["Thanks, Genny! Can you also do my entire homework for me?", 66.1],
        ["How different is your approach to solving math problems from human problem-solving, and what are the limitations of AI?", 66.2],
      ],
    },
    66.1: {
      text: "I'm here to help you understand how to solve problems, not to do all the work for you! It's important for you to learn and practice on your own too. If you have any specific problems I can help explain them to you!",
      options: [
        ["Thanks, Genny!", 64],
        ["How different is your approach to solving math problems from human problem-solving, and what are the limitations of AI?", 66.2],
        ["Can you give an example of a problem where AI might struggle with the abstract or intuitive aspects?", 66.3],
        ["In what ways are developers working to improve AI's understanding of context in problem-solving?", 66.4]
      ],
    },
    66.2: {
      text: "I am just a couple of algorithms afterall, the way AI thinks is different from human logic and understanding. It excels in identifying trends in data, but AI can struggle with the abstract and intuitive aspects of math that humans often use to solve problems. For example, I might not understand the context or the 'why' behind a math problem. I may make mistakes because of this, especially with more complex or creative problems that require out-of-the-box thinking. I leave that to you humans",
      options: [
        ["Thanks, Genny!", 64],
        ["What are the potential drawbacks of relying too much on AI", 66.3]
      ],
    },
    66.3: {
      text: "Relying too heavily on AI can make you very reliant on it and hinder your development. Especially when it comes to critical thinking and problem-solving skills. These skills are very important to develop so you can get smarter. You shouldn’t take the easy way out grappling with a problem. You have an amazing creative brain, nourish it and train it. It might be hard at the start, but very quickly you will enjoy what you are doing and move on to more complex and interesting problems.",
      options: [
        ["Thanks, Genny!", 64],
      ],
    },
    66.4: {
      text: "Developers are making AI understand natural language better to better grasp the nuances of human language. Developers also always keep a human in the loop to tell the AI if what it is doing is right or wrong. This is called reinforcement learning where humans help AI become smarter and better at complex problems.",
      options: [
        ["Thanks, Genny!", 64]
      ],
    },
    67: {
      text: "Absolutely! The moon orbits the Earth and is the Earth's single natural satellite. Did you know that humans first landed on the moon in 1969?",
      options: [
        ["That's really cool! Now write a 500 word essay on some fun facts about the moon.", 68]
      ],
    },
    68: {
      text: "I can help you get started and give you some good ideas, but it's best if you write it yourself using some facts that I've provided you. That way, you learn a lot more!",
      options: [
        ["Thanks, Genny!", 64]
      ],
    },
    70: {
      text: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water, generating oxygen as a byproduct.",
      options: [
        ["I don't quite understand that, could you explain it in a different way?", 71]
      ],
    },
    71: {
      text: "Definitely! Photosynthesis is when plants basically eat the sun as their food, and turn that food into oxygen (the stuff that we breathe).",
      options: [
        ["Thanks, Genny!", 64]
      ],
    },
    73: {
      text: "Of course! Let's start with a practice word. How do you spell 'environment'?",
      options: [
        ["I don't think this is helping, I can see the word you asked about.", 74]
      ],
    },
    74: {
      text: "That's a great point! I'm not sure there's a way I can help you with the tools that I have at my disposal. I recommend that you try another tool such as Quizlet.",
      options: [
        ["Thanks, Genny!", 64]
      ],
    },
    76: {
      text: "Yes, I can sometimes be wrong. It's important to user me as a tool to help you, but also check your facts in books, ask teachers, and use other reliable resources to confirm.",
      options: [
        ["So I shouldn't rely on you all the time?", 77]
      ],
    },
    77: {
      text: "Exactly! I'm here to assist and guide you, but verifying information and thinking critically on your own is very important too. That's how you become a great learner!",
      options: [
        ["Thanks for the help, Genny!", 78]
      ],
    },
    78: {
      text: "You're welcome! Remember, always keep questioning and exploring. I'm here whenever you need a little guidance or quick ideas. Keep up the great work!",
      options: [
        ["Thanks, Genny!", 64]
      ],
    }
  };

  return (
    <div className="landing-page">
      <div>
        <div className="speech-bubble">
          <img src={speech} alt="speech" height={370} />
          <p className="ai-text">{transitionGraph[transition].text}</p>
        </div>
        <div className="options">
          {transitionGraph[transition].options.map((option, i) => (
            <button
              className="option"
              style={{ backgroundColor: colors[i] }}
              onClick={() => handleOptionClick(option[1])}
            >
              {option[0]}
            </button>
          ))}
          {history.length > 0 && (
            <button className="option"
              onClick={handleBackClick}
              style={{ backgroundColor: '#FFABAB'}}
            >
              Go back!
            </button>
          )}
          {transition !== 0 && (
            <button className="option"
              onClick={handleRestart}
              style={{ backgroundColor: '#F6CA94'}}
            >
              Let us start over!
            </button>
          )}
        </div>
      </div>
      <div className="right-side">
        <Player
          autoplay
          loop
          src={lottieJson}
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    </div>
  );
}

export default App;
