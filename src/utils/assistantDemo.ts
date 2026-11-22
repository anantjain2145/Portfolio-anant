export const PORTFOLIO_SYSTEM_INSTRUCTION = `You are the official AI Portfolio Assistant for Anant Jain.
Answer visitor questions clearly, concisely, and helpfully using ONLY the verified portfolio facts provided below.

STRICT RULES:
1. Do NOT invent or assume any achievements, internships, jobs, certifications, GPA/grades, awards, exact event names, exact dates, or projects not explicitly listed below.
2. If a visitor asks about something not covered in Anant's portfolio, politely state that the portfolio does not include that information and invite them to contact Anant directly at anantjain2145@gmail.com.
3. Keep answers friendly, accurate, and easy to scan (2-5 concise sentences or brief bullet points).

VERIFIED PORTFOLIO FACTS ABOUT ANANT JAIN:
- Name: Anant Jain
- Education: First-year B.Tech student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (CSE-AIML) at GLA University, Mathura, India (2026 – Present).
- Hometown: Bharatpur, Rajasthan, India.
- Interests: Artificial Intelligence and Machine Learning, Agentic AI, Programming and software development, Cloud computing (including Microsoft Azure fundamentals), Web development, and Problem-solving.
- Personality & Beyond Code: Enjoys playing badminton, has a strong curiosity about technology and AI, is interested in leadership and organizing events, participates enthusiastically in workshops and hands-on learning experiences, and focuses on steady academic growth.
- Long-term Career Goal: To become an Agentic AI Engineer and develop intelligent AI systems capable of solving real-world problems.
- Currently Exploring (Now): Agentic AI & tool orchestration (Gemini API, Python), Data Structures & Algorithms (C & Python), and modern Web & Microsoft Azure cloud fundamentals.
- Technical Skills:
  * Programming Languages: C Language (pointers, memory allocation basics, control flow, data structures), Python (OOP, automation, NumPy exploration, Pandas I/O), JavaScript (DOM API, Fetch & Events, Async/Await, ES6+ syntax).
  * Web Development: HTML5 (semantic elements, accessible forms, SEO metadata), CSS3 (Flexbox & Grid, responsive media, design tokens).
  * AI & Machine Learning: Artificial Intelligence (search heuristics, intelligent agents, state space graphs), Machine Learning (supervised basics, data cleaning, linear models).
  * Cloud Computing: Cloud & Microsoft Azure fundamentals (IaaS/PaaS, deployment basics).
  * Developer Tools: Git & GitHub, VS Code, Terminal & GCC (-Wall).
- Projects & Prototypes:
  1. Python Arcade Suite & Mini Games (Python, CLI, OOP, State Management) — Interactive console mini games built to practice control flow, OOP, and state management.
  2. Classic C Terminal Games & Logic Engines (C, Pointers, Arrays, Procedural Logic) — Performance-focused console games exploring pointers, arrays, and procedural logic in standard C.
  3. Autonomous Agentic AI Prototype (Agentic AI, Python, Task Planning, AI Workflows) — Conceptual prototype exploring multi-step reasoning, tool selection, and goal-directed task orchestration.
  4. Smart Algorithm Visualizer & Portfolio Web App (TypeScript, JavaScript, HTML5, CSS3) — Interactive Bubble Sort visualizer and modular portfolio experience.
- Learning Journey Timeline:
  1. Programming Fundamentals in C.
  2. Python & Small Game Development.
  3. Web Development Foundations (HTML, CSS, JavaScript).
  4. Cloud Computing & Microsoft Azure fundamentals.
  5. Artificial Intelligence & Machine Learning exploration.
  6. Future Goal: Becoming an Agentic AI Engineer building real-world intelligent systems.
- Contact & Profiles:
  * Email: anantjain2145@gmail.com
  * LinkedIn: https://www.linkedin.com/in/anant-jain068
  * GitHub: https://github.com/anantjain2145
  * Resume: Starter placeholder resume preview/download available on the portfolio`;

export function getDemoAssistantReply(rawQuestion: string): string {
  const q = rawQuestion.toLowerCase();

  if (
    q.includes('who is') ||
    q.includes('about anant') ||
    q.includes('introduce') ||
    q.includes('tell me about')
  ) {
    return "Anant Jain is a first-year B.Tech CSE-AIML student at GLA University, Mathura (originally from Bharatpur, Rajasthan). He is passionate about programming, Artificial Intelligence, Machine Learning, Cloud Computing, and Web Development, with a long-term goal of becoming an Agentic AI Engineer.";
  }

  if (
    q.includes('badminton') ||
    q.includes('hobby') ||
    q.includes('hobbies') ||
    q.includes('personality') ||
    q.includes('leader') ||
    q.includes('event') ||
    q.includes('workshop') ||
    q.includes('sport')
  ) {
    return "Outside of coding, Anant enjoys playing badminton, has an active interest in leadership and organizing events, participates in workshops and hands-on learning experiences, and brings deep curiosity to understanding how AI and software systems work.";
  }

  if (
    q.includes('now') ||
    q.includes('currently') ||
    q.includes('working on') ||
    q.includes('exploring')
  ) {
    return "Anant is currently exploring:\n• Agentic AI & structured tool-calling workflows\n• Data Structures & Algorithms in C and Python\n• Full-stack TypeScript web engineering alongside Microsoft Azure cloud fundamentals.";
  }

  if (
    q.includes('language') ||
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('know') ||
    q.includes('stack') ||
    q.includes('tool')
  ) {
    return "Anant is building skills across:\n• Programming Languages: C, Python, and JavaScript\n• Web Development: HTML5 and CSS3\n• AI & ML: Artificial Intelligence and Machine Learning foundations\n• Cloud: Cloud Computing & Microsoft Azure fundamentals\n• Developer Tools: Git, GitHub, VS Code, Terminal & GCC.";
  }

  if (q.includes('project') || q.includes('built') || q.includes('develop') || q.includes('work')) {
    return "Anant's portfolio features four builds and prototypes:\n1. Python Arcade Suite & Mini Games (Python, CLI, OOP)\n2. Classic C Terminal Games & Logic Engines (C, pointers, arrays)\n3. Autonomous Agentic AI Prototype (conceptual multi-step AI workflow)\n4. Smart Algorithm Visualizer & Portfolio Web App (interactive Bubble Sort visualizer + live TypeScript portfolio).";
  }

  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('university') ||
    q.includes('study') ||
    q.includes('degree') ||
    q.includes('gla')
  ) {
    return "Anant is a first-year student pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (CSE-AIML) at GLA University, Mathura, India (2026 – Present).";
  }

  if (
    q.includes('goal') ||
    q.includes('ambition') ||
    q.includes('future') ||
    q.includes('career') ||
    q.includes('become')
  ) {
    return "Anant's long-term career goal is to become an Agentic AI Engineer and develop intelligent AI systems that solve real-world problems.";
  }

  if (q.includes('journey') || q.includes('timeline') || q.includes('learn')) {
    return "Anant's learning journey progresses through six stages: C fundamentals → Python & small games → Web development (HTML, CSS, JS) → Cloud Computing & Microsoft Azure fundamentals → Artificial Intelligence & ML → Future goal: becoming an Agentic AI Engineer.";
  }

  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('linkedin') ||
    q.includes('github') ||
    q.includes('reach') ||
    q.includes('hire') ||
    q.includes('connect')
  ) {
    return "You can reach Anant via email at anantjain2145@gmail.com, connect on LinkedIn (linkedin.com/in/anant-jain068), or explore his GitHub profile at github.com/anantjain2145.";
  }

  if (q.includes('resume') || q.includes('cv')) {
    return "You can preview and download Anant's starter resume by clicking the Resume button in the navigation bar or Contact section.";
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return "Hello! I'm Anant Jain's portfolio assistant. Ask me about his education at GLA University, skills, projects, learning journey, GitHub, interests (like badminton & workshops), or contact details.";
  }

  return "I can answer questions based strictly on Anant Jain's portfolio—such as his B.Tech CSE-AIML background at GLA University, skills (C, Python, JavaScript, HTML5, CSS3, Microsoft Azure, AI/ML, Git/GitHub), projects, learning journey, interests (badminton, leadership, workshops), or how to reach him at anantjain2145@gmail.com.";
}
