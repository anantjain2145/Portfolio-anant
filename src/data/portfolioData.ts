export type ProjectCategory = 'all' | 'python' | 'c-lang' | 'aiml' | 'utility';

export interface SkillItem {
  id: string;
  name: string;
  stage: string;
  description: string;
  topics: string[];
  accent: 'violet' | 'cyan';
  iconKey: 'c' | 'python' | 'javascript' | 'html' | 'css' | 'cloud' | 'ai' | 'ml';
}

export interface SkillCategory {
  id: string;
  title: string;
  accentColor: 'violet' | 'cyan';
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  status: string;
  summary: string;
  details: string;
  concepts: string[];
  highlights: string[];
  codeFilename: string;
  codeLanguage: string;
  codeSnippet: string;
  /** Replace with your real GitHub repository URL when published */
  repoUrl: string;
  /** Replace with a live demo URL if hosted externally */
  liveUrl: string;
  hasInteractiveVisualizer?: boolean;
  visualTheme: 'arcade' | 'memory' | 'agent' | 'visualizer';
}

export const PROFILE = {
  name: 'Anant Jain',
  initials: 'AJ',
  roleHeadline: 'Aspiring AI Engineer | CSE-AIML Student',
  careerGoal: 'Agentic AI Engineer',
  university: 'GLA University, Mathura, India',
  shortUniversity: 'GLA University',
  degree: 'B.Tech in Computer Science and Engineering',
  specialization: 'Artificial Intelligence and Machine Learning (CSE-AIML)',
  enrollmentPeriod: '2026 – Present (First Year)',
  hometown: 'Bharatpur, Rajasthan, India',
  campusCoords: '27.5706° N, 77.6746° E',
  email: 'anantjain2145@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/anant-jain068',
  linkedinHandle: 'linkedin.com/in/anant-jain068',
  /**
   * PLACEHOLDER: Add your real GitHub profile URL below (e.g. 'https://github.com/your-username')
   * Leave as empty string until ready so no broken links appear.
   */
  githubUrl: '',
  githubPlaceholderLabel: 'Add GitHub URL in src/data/portfolioData.ts',
  /**
   * PLACEHOLDER: Place your real PDF resume at /public/resume.pdf and set '/resume.pdf' here.
   * While empty, the portfolio provides a downloadable starter resume built from your verified profile.
   */
  resumeUrl: '',
  /**
   * PLACEHOLDER: Add a cropped headshot at /public/avatar.jpg and set '/avatar.jpg' here.
   */
  avatarUrl: '',
  heroNeuralImage: '/assets/aistudio/screen_fddd9715.png',
  heroBio:
    "I'm a curious computer science student passionate about programming, artificial intelligence, and building technology that solves real-world problems. Currently exploring AI, software development, and intelligent autonomous systems.",
  aboutParagraphs: [
    "I'm Anant Jain, a first-year B.Tech student at GLA University, Mathura, specializing in Computer Science and Engineering with Artificial Intelligence and Machine Learning (CSE-AIML).",
    'I enjoy exploring new technologies, solving problems, and turning creative ideas into practical projects. My long-term career goal is to become an Agentic AI Engineer and develop intelligent AI systems capable of solving real-world challenges.',
  ],
  coursework: [
    'Foundational Computing',
    'Procedural Programming (C)',
    'Data Structures Prep',
    'Applied Mathematics for ML',
  ],
  interests: [
    {
      title: 'Artificial Intelligence & ML',
      subtitle: 'Model foundations & reasoning',
      icon: 'brain' as const,
    },
    {
      title: 'Agentic AI',
      subtitle: 'Goal-directed & multi-step agents',
      icon: 'bot' as const,
    },
    {
      title: 'Software & Web Development',
      subtitle: 'Clean architecture & interfaces',
      icon: 'code' as const,
    },
    {
      title: 'Cloud & Problem Solving',
      subtitle: 'Scalable deployment & algorithms',
      icon: 'cloud' as const,
    },
  ],
};

export const HERO_PYTHON_SNIPPET = `from agent_mesh import NeuralAgent

agent = NeuralAgent(focus="agentic-ai")
agent.learn(
    domain="CSE-AIML @ GLA University",
    curiosity=float("inf")
)
print("Ready to engineer intelligent systems.")`;

export const SKILLS_C_SNIPPET = `#include <stdio.h>

int main(void) {
    // Continuous daily practice in C & fundamentals
    printf("Building core mastery step by step.\\n");
    return 0;
}`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Systems',
    accentColor: 'violet',
    skills: [
      {
        id: 'c-lang',
        name: 'C Language',
        stage: 'Foundational',
        description:
          'Systems foundation, memory management fundamentals, and structured algorithmic logic.',
        topics: ['Pointers', 'Memory Allocation', 'Control Flow', 'Data Structures'],
        accent: 'violet',
        iconKey: 'c',
      },
      {
        id: 'python',
        name: 'Python',
        stage: 'Active Lab',
        description:
          'Problem solving, scripting, object-oriented programming, and AI/ML exploration.',
        topics: ['OOP Paradigm', 'Automation', 'NumPy Exploration', 'Pandas I/O'],
        accent: 'cyan',
        iconKey: 'python',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        stage: 'Practical',
        description:
          'Interactive web scripting, event handling, and client-side DOM manipulation.',
        topics: ['DOM API', 'Fetch & Events', 'Async / Await', 'ES6+ Syntax'],
        accent: 'violet',
        iconKey: 'javascript',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web Architecture',
    accentColor: 'cyan',
    skills: [
      {
        id: 'html5',
        name: 'HTML5',
        stage: 'Standard',
        description:
          'Semantic document structuring, accessible markup, and modern web standards.',
        topics: ['Semantic Elements', 'Accessible Forms', 'SEO Metadata'],
        accent: 'cyan',
        iconKey: 'html',
      },
      {
        id: 'css3',
        name: 'CSS3',
        stage: 'Styling',
        description:
          'Responsive layouts with Flexbox and Grid, visual hierarchy, and smooth transitions.',
        topics: ['Flexbox & Grid', 'Responsive Media', 'Backdrop Filters'],
        accent: 'violet',
        iconKey: 'css',
      },
    ],
  },
  {
    id: 'cloud-ai',
    title: 'Cloud, AI & Machine Learning',
    accentColor: 'cyan',
    skills: [
      {
        id: 'cloud',
        name: 'Cloud Computing',
        stage: 'Foundations',
        description:
          'Cloud architecture concepts, service models, hosting fundamentals, and virtualization.',
        topics: ['IaaS / PaaS', 'Virtual Hosts', 'Deployment Basics'],
        accent: 'cyan',
        iconKey: 'cloud',
      },
      {
        id: 'ai',
        name: 'Artificial Intelligence',
        stage: 'Core Theory',
        description:
          'Foundations of search spaces, problem formulation, rational agents, and reasoning.',
        topics: ['Search Heuristics', 'Intelligent Agents', 'State Space Graphs'],
        accent: 'violet',
        iconKey: 'ai',
      },
      {
        id: 'ml',
        name: 'Machine Learning',
        stage: 'Hands-On Prep',
        description:
          'Core learning paradigms, dataset preparation, regression, and basic classification.',
        topics: ['Supervised Basics', 'Data Cleaning', 'Linear Models'],
        accent: 'cyan',
        iconKey: 'ml',
      },
    ],
  },
];

export const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All [4]' },
  { id: 'python', label: 'Python' },
  { id: 'c-lang', label: 'C Lang' },
  { id: 'aiml', label: 'AI / ML Lab' },
  { id: 'utility', label: 'Web & Utilities' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'python-arcade',
    title: 'Python Arcade Suite & Mini Games',
    subtitle: 'Python Mini Games',
    category: 'python',
    categoryLabel: 'Python',
    status: 'Learning Build',
    summary:
      'Interactive console and GUI-based mini games built to practice control flow, object-oriented programming, and clean state management.',
    details:
      'A collection of foundational Python mini-games (number guessing with adaptive hints, rock-paper-scissors tournament tracker, and turn-based logic puzzles) structured with modular functions, input validation, and score persistence.',
    concepts: ['Python', 'CLI', 'OOP', 'State Management'],
    highlights: [
      'Modular game loop separation with clean input validation and edge-case handling',
      'Object-oriented player/session state tracking without external heavy frameworks',
      'Focused on readable beginner-friendly architecture and iterative debugging',
    ],
    codeFilename: 'arcade_engine.py',
    codeLanguage: 'Python',
    codeSnippet: `class GameSession:
    def __init__(self, target: int, max_attempts: int = 7):
        self.target = target
        self.max_attempts = max_attempts
        self.attempts = 0

    def guess(self, value: int) -> str:
        self.attempts += 1
        if value == self.target:
            return f"Solved in {self.attempts} attempts!"
        hint = "higher" if value < self.target else "lower"
        remaining = self.max_attempts - self.attempts
        return f"Try {hint} ({remaining} attempts left)"`,
    repoUrl: '',
    liveUrl: '',
    visualTheme: 'arcade',
  },
  {
    id: 'c-terminal-engines',
    title: 'Classic C Terminal Games & Logic Engines',
    subtitle: 'C Programming Games',
    category: 'c-lang',
    categoryLabel: 'C Lang',
    status: 'Coursework Build',
    summary:
      'Performance-focused console games exploring pointers, arrays, structured programming, and procedural logic in standard C.',
    details:
      'Built during first-year procedural programming labs to strengthen understanding of memory layout, 2D board arrays, pointer arithmetic, and deterministic win-condition checks in standard C.',
    concepts: ['C', 'Pointers', 'Arrays', 'Procedural Logic'],
    highlights: [
      '2D array game board rendering in terminal with zero external dependencies',
      'Pointer-based state updates and strict boundary checking',
      'Compiled cleanly with standard C flags (-Wall -Wextra)',
    ],
    codeFilename: 'board_engine.c',
    codeLanguage: 'C',
    codeSnippet: `#include <stdio.h>

void render_board(const char board[3][3]) {
    for (int r = 0; r < 3; r++) {
        printf(" %c | %c | %c \\n", board[r][0], board[r][1], board[r][2]);
        if (r < 2) printf("---|---|---\\n");
    }
}`,
    repoUrl: '',
    liveUrl: '',
    visualTheme: 'memory',
  },
  {
    id: 'agentic-ai-prototype',
    title: 'Autonomous Agentic AI Prototype',
    subtitle: 'Future AI/ML Exploration',
    category: 'aiml',
    categoryLabel: 'AI / ML Lab',
    status: 'Concept Prototype',
    summary:
      'Conceptual architecture exploring multi-step reasoning, tool selection, and goal-directed task orchestration for intelligent AI workflows.',
    details:
      'An early design and Python prototyping workspace aligned with my goal of becoming an Agentic AI Engineer—studying how planning, memory, and tool-calling loops let models break complex user goals into verifiable steps.',
    concepts: ['Agentic AI', 'Python', 'Task Planning', 'AI Workflows'],
    highlights: [
      'Separates planner, tool executor, and verification steps into clear Python interfaces',
      'Focuses on structured JSON task decomposition and error recovery',
      'Serves as the foundation for upcoming AIML coursework projects',
    ],
    codeFilename: 'task_planner.py',
    codeLanguage: 'Python',
    codeSnippet: `from dataclasses import dataclass

@dataclass
class AgentStep:
    step_id: int
    action: str
    status: str = "pending"

def plan_goal(goal: str) -> list[AgentStep]:
    return [
        AgentStep(1, f"Analyze requirements for: {goal}"),
        AgentStep(2, "Select appropriate computational tools"),
        AgentStep(3, "Execute and verify output constraints"),
    ]`,
    repoUrl: '',
    liveUrl: '',
    visualTheme: 'agent',
  },
  {
    id: 'algorithm-visualizer',
    title: 'Smart Algorithm Visualizer',
    subtitle: 'Utility & Learning Tool',
    category: 'utility',
    categoryLabel: 'Web & Utilities',
    status: 'Interactive Demo',
    summary:
      'Visual walkthrough tool to observe sorting algorithms step by step with real-time comparison and swap highlights.',
    details:
      'Designed to make foundational Data Structures & Algorithms intuitive for students. Watch Bubble Sort and Selection Sort compare elements, swap values, and lock sorted indices in real time.',
    concepts: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms'],
    highlights: [
      'Interactive step-by-step visualization built directly into this portfolio modal',
      'Highlights active comparison pairs and sorted elements clearly',
      'Supports array randomization and algorithm switching on the fly',
    ],
    codeFilename: 'bubble_sort.js',
    codeLanguage: 'JavaScript',
    codeSnippet: `export function* bubbleSortSteps(arr) {
  const items = [...arr];
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - i - 1; j++) {
      yield { items: [...items], comparing: [j, j + 1] };
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
      }
    }
  }
  yield { items, comparing: [] };
}`,
    repoUrl: '',
    liveUrl: '',
    hasInteractiveVisualizer: true,
    visualTheme: 'visualizer',
  },
];
