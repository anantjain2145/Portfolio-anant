export type ProjectCategory = 'all' | 'python' | 'c-lang' | 'aiml' | 'utility';

export interface SkillItem {
  id: string;
  name: string;
  stage: string;
  description: string;
  topics: string[];
  accent: 'primary' | 'secondary';
  iconKey:
    | 'c'
    | 'python'
    | 'javascript'
    | 'html'
    | 'css'
    | 'cloud'
    | 'ai'
    | 'ml'
    | 'git'
    | 'vscode'
    | 'cli';
}

export interface SkillCategory {
  id: string;
  title: string;
  accentColor: 'primary' | 'secondary';
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
  challenge: string;
  solution: string;
  concepts: string[];
  highlights: string[];
  codeFilename: string;
  codeLanguage: string;
  codeSnippet: string;
  repoUrl: string;
  liveUrl: string;
  hasInteractiveVisualizer?: boolean;
  visualTheme: 'arcade' | 'memory' | 'agent' | 'visualizer';
}

export interface NowItem {
  id: string;
  area: string;
  title: string;
  description: string;
  focusTags: string[];
}

export interface PersonalityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconKey: 'badminton' | 'leadership' | 'workshop' | 'curiosity' | 'academic';
}

export const PROFILE = {
  name: 'Anant Jain',
  initials: 'AJ',
  roleHeadline: 'Aspiring Agentic AI Engineer | CSE-AIML Student',
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
  githubUsername: 'anantjain2145',
  githubUrl: 'https://github.com/anantjain2145',
  githubHandle: 'github.com/anantjain2145',
  /**
   * Place your exported PDF resume at /public/resume.pdf and set '/resume.pdf' here.
   * While empty, the portfolio provides a downloadable starter resume built from your verified profile.
   */
  resumeUrl: '',
  avatarUrl: '/assets/aistudio/be3b3535-f5cc-494a-92ce-6c597952a4dc_26113af6.png',
  heroNeuralImage: '/assets/aistudio/screen_fddd9715.png',
  heroBio:
    "I'm a first-year Computer Science & Engineering (AI & ML) student at GLA University, Mathura. I enjoy turning curiosity about programming, cloud systems, and artificial intelligence into practical software while working toward becoming an Agentic AI Engineer.",
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
      subtitle: 'Microsoft Azure & algorithms',
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
    title: 'Programming Languages',
    accentColor: 'primary',
    skills: [
      {
        id: 'c-lang',
        name: 'C Language',
        stage: 'Foundational',
        description:
          'Systems foundation, memory management fundamentals, and structured algorithmic logic.',
        topics: ['Pointers', 'Memory Allocation', 'Control Flow', 'Data Structures'],
        accent: 'primary',
        iconKey: 'c',
      },
      {
        id: 'python',
        name: 'Python',
        stage: 'Active Lab',
        description:
          'Problem solving, scripting, object-oriented programming, and AI/ML exploration.',
        topics: ['OOP Paradigm', 'Automation', 'NumPy Exploration', 'Pandas I/O'],
        accent: 'secondary',
        iconKey: 'python',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        stage: 'Practical',
        description:
          'Interactive web scripting, event handling, and client-side DOM manipulation.',
        topics: ['DOM API', 'Fetch & Events', 'Async / Await', 'ES6+ Syntax'],
        accent: 'primary',
        iconKey: 'javascript',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    accentColor: 'secondary',
    skills: [
      {
        id: 'html5',
        name: 'HTML5',
        stage: 'Standard',
        description:
          'Semantic document structuring, accessible markup, and modern web standards.',
        topics: ['Semantic Elements', 'Accessible Forms', 'SEO Metadata'],
        accent: 'secondary',
        iconKey: 'html',
      },
      {
        id: 'css3',
        name: 'CSS3',
        stage: 'Styling',
        description:
          'Responsive layouts with Flexbox and Grid, visual hierarchy, and smooth transitions.',
        topics: ['Flexbox & Grid', 'Responsive Media', 'Design Tokens'],
        accent: 'primary',
        iconKey: 'css',
      },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    accentColor: 'primary',
    skills: [
      {
        id: 'ai',
        name: 'Artificial Intelligence',
        stage: 'Core Theory',
        description:
          'Foundations of search spaces, problem formulation, rational agents, and reasoning.',
        topics: ['Search Heuristics', 'Intelligent Agents', 'State Space Graphs'],
        accent: 'primary',
        iconKey: 'ai',
      },
      {
        id: 'ml',
        name: 'Machine Learning',
        stage: 'Hands-On Prep',
        description:
          'Core learning paradigms, dataset preparation, regression, and basic classification.',
        topics: ['Supervised Basics', 'Data Cleaning', 'Linear Models'],
        accent: 'secondary',
        iconKey: 'ml',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    accentColor: 'secondary',
    skills: [
      {
        id: 'cloud-azure',
        name: 'Cloud & Microsoft Azure',
        stage: 'Foundations',
        description:
          'Cloud architecture fundamentals, Microsoft Azure concepts, service models, and web hosting.',
        topics: ['Microsoft Azure', 'IaaS / PaaS', 'Deployment Basics'],
        accent: 'secondary',
        iconKey: 'cloud',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    accentColor: 'primary',
    skills: [
      {
        id: 'git-github',
        name: 'Git & GitHub',
        stage: 'Daily Workflow',
        description:
          'Version control, branching basics, repository management, and collaborative code hosting.',
        topics: ['Commits & Branches', 'GitHub Repos', 'Deployment Sync'],
        accent: 'primary',
        iconKey: 'git',
      },
      {
        id: 'vscode',
        name: 'VS Code',
        stage: 'Editor',
        description:
          'Primary coding environment for C, Python, and full-stack web development.',
        topics: ['Debugging', 'Extensions', 'Integrated Terminal'],
        accent: 'secondary',
        iconKey: 'vscode',
      },
      {
        id: 'cli-gcc',
        name: 'Terminal & GCC',
        stage: 'Environment',
        description:
          'Command-line compilation, shell navigation, and disciplined C warning checks.',
        topics: ['GCC (-Wall)', 'Shell Basics', 'Build Scripts'],
        accent: 'primary',
        iconKey: 'cli',
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
      'Interactive console mini games built to practice control flow, object-oriented programming, and clean state management.',
    details:
      'A collection of foundational Python mini-games (number guessing with adaptive hints, rock-paper-scissors tournament tracker, and turn-based logic puzzles) structured with modular functions, input validation, and score persistence.',
    challenge:
      'Preventing invalid user inputs and tangled game-loop state from crashing or resetting rounds unexpectedly.',
    solution:
      'Separated game state into clean GameSession classes with strict input parsing and deterministic turn transitions.',
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
    challenge:
      'Managing 2D board indexing, pointer updates, and buffer safety cleanly in standard C without memory leaks.',
    solution:
      'Used fixed-bounds array traversal, const-qualified display helpers, and strict compiler checks (-Wall -Wextra).',
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
    challenge:
      'Keeping multi-step AI tasks predictable and verifiable rather than letting a model drift across open-ended prompts.',
    solution:
      'Designed explicit typed AgentStep interfaces separating goal decomposition, tool execution, and constraint checks.',
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
    title: 'Smart Algorithm Visualizer & Portfolio Web App',
    subtitle: 'Web & Learning Tool',
    category: 'utility',
    categoryLabel: 'Web & Utilities',
    status: 'Interactive Demo',
    summary:
      'Interactive sorting visualizer and modular React + TypeScript web engineering showcase with real-time step inspection.',
    details:
      'Designed to make foundational Data Structures & Algorithms intuitive for students. Watch Bubble Sort compare elements, swap values, and lock sorted indices directly in this portfolio, backed by clean TypeScript state and responsive design.',
    challenge:
      'Synchronizing asynchronous animation delays with user interrupts (shuffle, reset, or modal close) without stale state updates.',
    solution:
      'Used cancellation refs and step-by-step state snapshots so animations pause, reset, or randomize cleanly at any moment.',
    concepts: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    highlights: [
      'Interactive step-by-step visualization built directly into the project details modal',
      'Highlights active comparison pairs and sorted elements clearly',
      'Supports array randomization and immediate reset without race conditions',
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
    repoUrl: 'https://github.com/anantjain2145/Portfolio-anant',
    liveUrl: 'https://portfolio-anant-m64i.vercel.app/',
    hasInteractiveVisualizer: true,
    visualTheme: 'visualizer',
  },
];

export interface JourneyStage {
  id: string;
  phase: string;
  timeframe: string;
  title: string;
  description: string;
  technologies: string[];
  iconKey: 'terminal' | 'code' | 'globe' | 'cloud' | 'brain' | 'rocket';
  accent: 'primary' | 'secondary';
}

export const LEARNING_JOURNEY: JourneyStage[] = [
  {
    id: 'foundation',
    phase: 'Stage 01',
    timeframe: 'Foundations',
    title: 'Programming Fundamentals in C',
    description:
      'Started building core problem-solving discipline with procedural programming, pointers, and memory basics in C.',
    technologies: ['C Language', 'Control Flow', 'Pointers', 'Problem Logic'],
    iconKey: 'terminal',
    accent: 'primary',
  },
  {
    id: 'programming',
    phase: 'Stage 02',
    timeframe: 'Applied Logic',
    title: 'Python & Small Game Development',
    description:
      'Explored Python to build interactive console mini-games, practice OOP concepts, and automate everyday logic tasks.',
    technologies: ['Python', 'OOP Basics', 'CLI Games', 'Scripting'],
    iconKey: 'code',
    accent: 'secondary',
  },
  {
    id: 'web-development',
    phase: 'Stage 03',
    timeframe: 'Frontend Craft',
    title: 'Web Development Foundations',
    description:
      'Learned semantic HTML5, responsive CSS3 layouts, and interactive JavaScript to ship ideas directly in the browser.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    iconKey: 'globe',
    accent: 'primary',
  },
  {
    id: 'cloud-computing',
    phase: 'Stage 04',
    timeframe: 'Infrastructure',
    title: 'Cloud Computing & Microsoft Azure',
    description:
      'Explored cloud service models, virtualization fundamentals, and Microsoft Azure core concepts for modern deployment.',
    technologies: ['Cloud Computing', 'Microsoft Azure', 'IaaS / PaaS'],
    iconKey: 'cloud',
    accent: 'secondary',
  },
  {
    id: 'artificial-intelligence',
    phase: 'Stage 05',
    timeframe: 'Current Focus',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Pursuing B.Tech CSE-AIML at GLA University while studying search algorithms, ML basics, and Agentic AI patterns.',
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Agentic AI'],
    iconKey: 'brain',
    accent: 'primary',
  },
  {
    id: 'future-goals',
    phase: 'Stage 06',
    timeframe: 'North Star',
    title: 'Future Goal: Agentic AI Engineer',
    description:
      'Aspiring to architect autonomous, tool-using AI systems that reliably solve meaningful real-world problems.',
    technologies: ['Agentic AI Systems', 'Autonomous Workflows', 'Real-World AI'],
    iconKey: 'rocket',
    accent: 'secondary',
  },
];

/**
 * Easy-to-update "Currently Exploring" (Now) section data.
 * Edit items here anytime to keep your current learning focus up to date.
 */
export const NOW_EXPLORING: NowItem[] = [
  {
    id: 'now-agentic',
    area: 'AI Systems',
    title: 'Agentic AI & Tool Orchestration',
    description:
      'Studying how multi-step planning loops, structured tool calls, and Gemini APIs turn language models into reliable problem solvers.',
    focusTags: ['Agentic AI', 'Gemini API', 'Python'],
  },
  {
    id: 'now-dsa',
    area: 'Core CS',
    title: 'Data Structures & Algorithms',
    description:
      'Strengthening foundational problem-solving in C and Python through sorting visualizations, arrays, and pointer exercises.',
    focusTags: ['C Language', 'Algorithms', 'Problem Solving'],
  },
  {
    id: 'now-cloud-web',
    area: 'Engineering',
    title: 'Modern Web & Cloud Fundamentals',
    description:
      'Refining full-stack TypeScript web experiences while deepening understanding of Microsoft Azure and cloud deployment patterns.',
    focusTags: ['TypeScript', 'React', 'Microsoft Azure'],
  },
];

/**
 * Grounded personality & co-curricular profile — strictly reflects genuine interests without invented awards.
 */
export const PERSONALITY_HIGHLIGHTS: PersonalityItem[] = [
  {
    id: 'badminton',
    title: 'Badminton & Focus',
    category: 'Athletics & Balance',
    description:
      'Playing badminton helps sharpen quick decision-making, consistency, and mental stamina outside of long coding sessions.',
    iconKey: 'badminton',
  },
  {
    id: 'leadership',
    title: 'Leadership & Organizing Events',
    category: 'Teamwork & Initiative',
    description:
      'Keen on coordinating student activities, helping organize collaborative sessions, and bringing peers together around shared goals.',
    iconKey: 'leadership',
  },
  {
    id: 'workshops',
    title: 'Workshops & Hands-On Learning',
    category: 'Continuous Growth',
    description:
      'Actively enjoys technical workshops, peer learning labs, and practical sessions that bridge classroom theory with real tools.',
    iconKey: 'workshop',
  },
  {
    id: 'curiosity',
    title: 'Curiosity About AI & Tech',
    category: 'Builder Mindset',
    description:
      'Driven by a habit of asking how systems work under the hood—from C memory pointers to autonomous AI workflows.',
    iconKey: 'curiosity',
  },
  {
    id: 'academic',
    title: 'Academic Journey @ GLA',
    category: 'B.Tech CSE-AIML',
    description:
      'Building a disciplined first-year engineering foundation at GLA University, Mathura with focus on AI, ML, and software craft.',
    iconKey: 'academic',
  },
];

export const TERMINAL_SUGGESTIONS = [
  'help',
  'about',
  'skills',
  'projects',
  'education',
  'journey',
  'contact',
  'clear',
] as const;

export const ASSISTANT_SUGGESTED_QUESTIONS = [
  'Who is Anant Jain?',
  'What programming languages does he know?',
  'What projects has he developed?',
  'What is his educational background?',
  'What are his career goals?',
  'How can I contact him?',
];
