export const PORTFOLIO_SYSTEM_INSTRUCTION = `You are the official AI Portfolio Assistant for Anant Jain.
Answer visitor questions clearly, concisely, and helpfully using ONLY the verified portfolio facts provided below.

STRICT RULES:
1. Do NOT invent or assume any achievements, internships, jobs, certifications, GPA/grades, exact dates, or projects not explicitly listed below.
2. If a visitor asks about something not covered in Anant's portfolio, politely state that the portfolio does not include that information and invite them to contact Anant directly at anantjain2145@gmail.com.
3. Keep answers friendly, accurate, and easy to scan (2-5 concise sentences or brief bullet points).

VERIFIED PORTFOLIO FACTS ABOUT ANANT JAIN:
- Name: Anant Jain
- Education: First-year B.Tech student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (CSE-AIML) at GLA University, Mathura, India (2026 – Present).
- Hometown: Bharatpur, Rajasthan, India.
- Interests: Artificial Intelligence and Machine Learning, Agentic AI, Programming and software development, Cloud computing (including Microsoft Azure fundamentals), Web development, and Problem-solving.
- Long-term Career Goal: To become an Agentic AI Engineer and develop intelligent AI systems capable of solving real-world problems.
- Technical Skills:
  * Programming & Systems: C Language (pointers, memory allocation basics, control flow, data structures), Python (OOP, automation, NumPy exploration, Pandas I/O), JavaScript (DOM API, Fetch & Events, Async/Await, ES6+ syntax).
  * Web Development: HTML5 (semantic elements, accessible forms, SEO metadata), CSS3 (Flexbox & Grid, responsive media, backdrop filters).
  * Cloud & AI/ML: Cloud Computing (Microsoft Azure fundamentals, IaaS/PaaS, deployment basics), Artificial Intelligence (search heuristics, intelligent agents, state space graphs), Machine Learning (supervised basics, data cleaning, linear models).
- Projects & Prototypes:
  1. Python Arcade Suite & Mini Games (Python, CLI, OOP, State Management) — Interactive console and GUI-based mini games built to practice control flow, OOP, and state management.
  2. Classic C Terminal Games & Logic Engines (C, Pointers, Arrays, Procedural Logic) — Performance-focused console games exploring pointers, arrays, and procedural logic in standard C.
  3. Autonomous Agentic AI Prototype (Agentic AI, Python, Task Planning, AI Workflows) — Conceptual prototype exploring multi-step reasoning, tool selection, and goal-directed task orchestration.
  4. Smart Algorithm Visualizer (JavaScript, HTML5, CSS3, Algorithms) — Visual walkthrough tool with an interactive Bubble Sort visualizer showing step-by-step comparisons and swaps.
- Learning Journey Timeline:
  1. Foundation: Started learning programming fundamentals using C.
  2. Programming: Explored Python and developed small programming projects and games.
  3. Web Development: Started learning HTML, CSS, and JavaScript.
  4. Cloud Computing: Explored cloud computing and Microsoft Azure fundamentals.
  5. Artificial Intelligence: Exploring AI, machine learning, and agentic AI concepts.
  6. Future Goals: Aspiring to become an Agentic AI Engineer and build AI systems that solve real-world problems.
- Contact Information:
  * Email: anantjain2145@gmail.com
  * LinkedIn: https://www.linkedin.com/in/anant-jain068
  * GitHub: Placeholder in portfolio (to be added when published)
  * Resume: Starter placeholder resume preview/download available on the portfolio`;

export function getDemoAssistantReply(rawQuestion: string): string {
  const q = rawQuestion.toLowerCase();

  if (
    q.includes('who is') ||
    q.includes('about anant') ||
    q.includes('introduce') ||
    q.includes('tell me about')
  ) {
    return "Anant Jain is a first-year B.Tech CSE-AIML student at GLA University, Mathura (from Bharatpur, Rajasthan). He is passionate about programming, Artificial Intelligence, Machine Learning, Cloud Computing, and Web Development, with a long-term goal of becoming an Agentic AI Engineer.";
  }

  if (
    q.includes('language') ||
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('know') ||
    q.includes('stack')
  ) {
    return "Anant is building skills across:\n• Programming: C, Python, and JavaScript\n• Web Development: HTML5 and CSS3\n• Cloud & AI/ML: Cloud Computing (Microsoft Azure fundamentals), Artificial Intelligence, and Machine Learning foundations.";
  }

  if (q.includes('project') || q.includes('built') || q.includes('develop') || q.includes('work')) {
    return "Anant's portfolio features four builds and prototypes:\n1. Python Arcade Suite & Mini Games (Python, CLI, OOP)\n2. Classic C Terminal Games & Logic Engines (C, pointers, arrays)\n3. Autonomous Agentic AI Prototype (conceptual multi-step AI workflow)\n4. Smart Algorithm Visualizer (interactive JavaScript sorting visualizer with a live demo on this site).";
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
    return "Anant's learning journey progresses through six stages: Foundation (C fundamentals) → Programming (Python games & projects) → Web Development (HTML, CSS, JavaScript) → Cloud Computing (cloud & Microsoft Azure fundamentals) → Artificial Intelligence (AI, ML & Agentic AI concepts) → Future Goals (becoming an Agentic AI Engineer).";
  }

  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('linkedin') ||
    q.includes('reach') ||
    q.includes('hire') ||
    q.includes('connect')
  ) {
    return "You can contact Anant directly via email at anantjain2145@gmail.com or connect on LinkedIn at linkedin.com/in/anant-jain068. You can also use the Contact section on this page to draft a message.";
  }

  if (q.includes('resume') || q.includes('cv')) {
    return "You can preview and download Anant's starter resume by clicking the Resume button in the navigation bar or Contact section.";
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return "Hello! I'm Anant Jain's portfolio assistant (running in Demo Mode). Ask me about his education at GLA University, technical skills, projects, learning journey, career goals, or contact details.";
  }

  return "I can answer questions based strictly on Anant Jain's portfolio—such as his B.Tech CSE-AIML background at GLA University, skills (C, Python, JavaScript, HTML5, CSS3, Microsoft Azure, AI/ML), projects, learning journey, career goal as an aspiring Agentic AI Engineer, or how to contact him at anantjain2145@gmail.com.";
}
