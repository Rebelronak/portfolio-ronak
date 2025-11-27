export enum SkillNames {
  // AI Research Tools
  CHATGPT = "chatgpt",
  CLAUDE = "claude",
  PERPLEXITY = "perplexity",
  GEMINI = "gemini",
  
  // AI/ML Tools
  PYTHON = "python",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  JUPYTER = "jupyter",
  
  // AI Agents & APIs
  OPENAI = "openai",
  LANGCHAIN = "langchain",
  HUGGINGFACE = "huggingface",
  OLLAMA = "ollama",
  
  // Collaboration Tools
  GITHUB = "github",
  VSCODE = "vscode",
  COLAB = "colab",
  DRIVE = "drive",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  // AI Research Tools
  [SkillNames.CHATGPT]: {
    id: 1,
    name: "chatgpt",
    label: "ChatGPT",
    shortDescription: "OpenAI's conversational AI that's smarter than your average chatbot 🤖💬",
    color: "#10a37f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  },
  [SkillNames.CLAUDE]: {
    id: 2,
    name: "claude",
    label: "Claude",
    shortDescription: "Anthropic's AI assistant, thoughtful and helpful, no cap! 🧠✨",
    color: "#d97757",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anthropic/anthropic-original.svg",
  },
  [SkillNames.PERPLEXITY]: {
    id: 3,
    name: "perplexity",
    label: "Perplexity",
    shortDescription: "AI-powered search that actually gets you answers, fr fr! 🔍🚀",
    color: "#20808d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perplexity/perplexity-original.svg",
  },
  [SkillNames.GEMINI]: {
    id: 4,
    name: "gemini",
    label: "Gemini",
    shortDescription: "Google's multimodal AI, seeing and understanding everything! 👁️🌟",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  
  // AI/ML & Data Science
  [SkillNames.PYTHON]: {
    id: 5,
    name: "python",
    label: "Python",
    shortDescription: "The MVP of AI/ML, making data science look easy! 🐍📊",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 6,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Google's deep learning framework, training models like a boss! 🧠🔥",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 7,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Facebook's ML framework, researchers' favorite tool! 🔥🧪",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.JUPYTER]: {
    id: 8,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Interactive notebooks where data science magic happens! 📓✨",
    color: "#f37626",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  
  // AI Agents & APIs
  [SkillNames.OPENAI]: {
    id: 9,
    name: "openai",
    label: "OpenAI API",
    shortDescription: "Building AI agents with GPT power, unstoppable! 🤖⚡",
    color: "#10a37f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 10,
    name: "langchain",
    label: "LangChain",
    shortDescription: "Chaining LLMs together for AI agent magic! 🔗🪄",
    color: "#1c3c3c",
    icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 11,
    name: "huggingface",
    label: "HuggingFace",
    shortDescription: "The GitHub of AI models, community-driven! 🤗🎯",
    color: "#ffcc4d",
    icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png",
  },
  [SkillNames.OLLAMA]: {
    id: 12,
    name: "ollama",
    label: "Ollama",
    shortDescription: "Running LLMs locally, privacy on point! 🦙💻",
    color: "#000000",
    icon: "https://raw.githubusercontent.com/ollama/ollama/main/docs/images/ollama.png",
  },
  
  // Collaboration Tools
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Where code lives, collaborates, and thrives! 🐙💻",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 14,
    name: "vscode",
    label: "VS Code",
    shortDescription: "The code editor that does it all, literally! 💻🎨",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.COLAB]: {
    id: 15,
    name: "colab",
    label: "Google Colab",
    shortDescription: "Free GPUs for your ML experiments, blessed! 🎁🚀",
    color: "#f9ab00",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  },
  [SkillNames.DRIVE]: {
    id: 16,
    name: "drive",
    label: "Google Drive",
    shortDescription: "Cloud storage that keeps all your files safe! ☁️📁",
    color: "#4285f4",
    icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
  },
};


// +
// export const SKILLS: Record<SkillNames, Skill> = {
//   [SkillNames.AWS]: {
//     id: 1,
//     name: "aws",
//     label: "AWS",
//     shortDescription: "Cloud magic 🪄 that makes deploying infra feel like playing The Sims but for servers. ☁️💻",
//     color: "#ff9900",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
//   },
//   [SkillNames.AZURE]: {
//     id: 2,
//     name: "azure",
//     label: "Azure",
//     shortDescription:
//       "Microsoft’s Hey, we do cloud too flex. 🌥️🔗",
//     color: "#007acc",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
//   },
//   [SkillNames.LINUX]: {
//     id: 3,
//     name: "linux",
//     label: "LINUX",
//     shortDescription: "That OS which powers the internet but will make you feel like a hacker every time you use the terminal. 💻😎",
//     color: "#e34c26",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg",
//   },
//   [SkillNames.SHELL]: {
//     id: 4,
//     name: "shell",
//     label: "Shell Scripting",
//     shortDescription: "Automating boring stuff so you can sit back and sip chai ☕ while your scripts do the heavy lifting",
//     color: "#563d7c",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg",
//   },
//   [SkillNames.PYTHON]: {
//     id: 5,
//     name: "python",
//     label: "Python",
//     shortDescription: "The coding equivalent of 'It just works' — even when you barely know what you're doing. 🐍📜",
//     color: "#61dafb",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
//   },
//   [SkillNames.GIT]: {
//     id: 6,
//     name: "git",
//     label: "GIT",
//     shortDescription:
//       "Messing up your code? No worries, just 'commit' your sins and 'revert' like nothing happened. 😂🔧",
//     color: "#41b883",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   },
//   [SkillNames.DOCKER]: {
//     id: 7,
//     name: "docker",
//     label: "Docker",
//     shortDescription:
//       "Packing apps like Tupperware packs leftovers — neat, portable, and ready to reheat. 🐳📦",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
//   },
//   [SkillNames.SELENIUM]: {
//     id: 8,
//     name: "selenium",
//     label: "Selenium",
//     shortDescription: "Browser babysitting on steroids. Click-click-done! 🖱️🤖",
//     color: "#38bdf8",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
//   },
//   [SkillNames.JENKINS]: {
//     id: 9,
//     name: "jenkins",
//     label: "Jenkins",
//     shortDescription: "The 'butler' who builds and deploys your code but complains with every red build. 🤵🚦",
//     color: "#6cc24a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
//   },
//   [SkillNames.KUBERNETES]: {
//     id: 10,
//     name: "kubernetes",
//     label: "Kubernetes",
//     shortDescription: "Herding containers like a pro rancher. Yeehaw, pods! 🐂⛴️",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
//   },
//   [SkillNames.ANSIBLE]: {
//     id: 11,
//     name: "ansible",
//     label: "Ansible",
//     shortDescription: "Automation so simple even your non-techie friend would think it’s just magic. 🪄📜",
//     color: "#336791",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
//   },
//   [SkillNames.TERRAFORM]: {
//     id: 12,
//     name: "terraform",
//     label: "Terraform",
//     shortDescription: "Building cloud infra like playing Lego — but with code. 🧱🌍",
//     color: "#336791",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
//   },
//   [SkillNames.PROMETHEUS]: {
//     id: 13,
//     name: "prometheus",
//     label: "Prometheus",
//     shortDescription: "Your system’s stalker — knows all the CPU gossip. 📈👀",
//     color: "#f1502f",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
//   },
//   [SkillNames.GRAFANA]: {
//     id: 14,
//     name: "grafana",
//     label: "Grafana",
//     shortDescription: "Turning boring metrics into Pinterest-worthy dashboards. 📊✨",
//     color: "#000000",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
//   },
//   [SkillNames.SONARQUBE]: {
//     id: 15,
//     name: "sonarqube",
//     label: "Sonarqube",
//     shortDescription: "The code snitch that tells you how bad you are at writing clean code. 🐠🤐",
//     color: "#f7b93a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
//   },
//   [SkillNames.OWASP]: {
//     id: 16,
//     name: "owasp",
//     label: "OWASP",
//     shortDescription: "Your checklist for keeping hackers from crashing your web party. 🕵️🔒",
//     color: "#fff",
//     icon: "assets/icons/owasp-svgrepo-com.svg",
//   },
//   [SkillNames.TRIVY]: {
//     id: 17,
//     name: "trivy",
//     label: "Trivy",
//     shortDescription:
//       "Scans your containers for vulnerabilities like your mom checks your room for mess. 🚨🔍",
//     color: "#ffca28",
//     icon: "https://logo.svgcdn.com/s/trivy-dark.svg",
//   },
//   [SkillNames.MAVEN]: {
//     id: 18,
//     name: "maven",
//     label: "Maven",
//     shortDescription: "The build tool that's also really into managing dependencies. 📚🔧",
//     color: "#007acc",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
//   },
//   [SkillNames.GO]: {
//     id: 19,
//     name: "go",
//     label: "GO",
//     shortDescription: "Fast, minimal, and powerful — basically the 'straight-A student' of programming. 🏃‍♂️💻",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
//   },
//   [SkillNames.HTML]: {
//     id: 20,
//     name: "html",
//     label: "HTML",
//     shortDescription: "The bones of every website — no frills, just structure. 🦴🌐",
//     color: "#2496ed",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   },
//   [SkillNames.CSS]: {
//     id: 21,
//     name: "nginx",
//     label: "NginX",
//     shortDescription: "Because no one likes plain — add some drip to your HTML. 🎨✨",
//     color: "#008000",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   },
//   [SkillNames.JS]: {
//     id: 22,
//     name: "javascript",
//     label: "JavaScript",
//     shortDescription:
//       "Making your websites less boring and more 'click here to know your future.' 🖱️🪄",
//     color: "#ff9900",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   },
//   [SkillNames.JAVA]: {
//     id: 23,
//     name: "java",
//     label: "Java",
//     shortDescription: "The OG workhorse that still runs a zillion enterprise apps — slow but steady. 🏋️‍♂️☕",
//     color: "#e34c26",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
//   },
//   [SkillNames.POSTGRES]: {
//     id: 24,
//     name: "postgres",
//     label: "Postgres",
//     shortDescription:
//       "Data’s personal diary — secure, organized, and occasionally moody with your queries. 📔🛠️",
//     color: "#6cc24a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
//   },
// };

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

