import type { ChecklistCategory } from "./types"

export const linkedinChecklist: ChecklistCategory[] = [
  {
    category: "Profile Setup",
    items: [
      {
        id: "linkedin-1",
        title: "Custom URL",
        description: "Personalize your LinkedIn URL to include your name clearly (avoid numbers and symbols)",
        tips: ["Example: linkedin.com/in/yourname", "Makes your profile more memorable and professional"],
      },
      {
        id: "linkedin-2",
        title: "Profile Visibility",
        description: "Set your LinkedIn profile to public visibility for maximum reach",
        tips: ["Ensures recruiters can find you", "Adjust privacy settings to be visible to all users"],
      },
      {
        id: "linkedin-3",
        title: "Creator Mode",
        description: "Activate Creator Mode to reach a wider audience and showcase expertise",
        tips: ["Add specific links related to your work", "Enables followers instead of connections"],
      },
      {
        id: "linkedin-4",
        title: "Profile Links",
        description: "Add direct links to your project portfolio in your profile",
        tips: ["Link to personal website", "Include portfolio or project sites"],
      },
    ],
  },
  {
    category: "Visual Branding",
    items: [
      {
        id: "linkedin-5",
        title: "Cover Photo",
        description: "Use an industry-related image, personal branding element, or motivational quote",
        tips: ["First visual impression on your profile", "Keep it professional and relevant"],
      },
      {
        id: "linkedin-6",
        title: "Profile Picture",
        description: "Use a recent, high-quality headshot with a neutral background",
        tips: ["Clear and professional", "Essential for positive first impression"],
      },
    ],
  },
  {
    category: "Content Optimization",
    items: [
      {
        id: "linkedin-7",
        title: "Headline",
        description: "Create a clear, concise, and keyword-optimized headline",
        tips: [
          "Formula: What you do + Organization + Achievements + Fun fact",
          "Include relevant industry keywords",
          "Highlight your unique value proposition",
        ],
      },
      {
        id: "linkedin-8",
        title: "Featured Section",
        description: "Showcase your best work - articles, presentations, videos, or achievements",
        tips: ["Feature content that represents your achievements", "Keep it updated with recent work"],
      },
      {
        id: "linkedin-9",
        title: "Summary (About)",
        description: "Write an engaging summary reflecting your career journey and personality",
        tips: ["Write in first person", "Highlight experience, hobbies, and what makes you unique"],
      },
    ],
  },
  {
    category: "Experience & Education",
    items: [
      {
        id: "linkedin-10",
        title: "Experience",
        description: "Clearly outline your professional experience and achievements",
        tips: ["Focus on achievements with short, impactful sentences", "Demonstrate career progression"],
      },
      {
        id: "linkedin-11",
        title: "Education",
        description: "List your educational background accurately and comprehensively",
        tips: ["Include highest qualifications", "Add notable projects or activities"],
      },
      {
        id: "linkedin-12",
        title: "Licenses & Certifications",
        description: "Include all relevant certifications with issue and expiration dates",
        tips: ["Shows commitment to professional development"],
      },
    ],
  },
  {
    category: "Skills & Validation",
    items: [
      {
        id: "linkedin-13",
        title: "Skills",
        description: "Keep your skills up-to-date and seek endorsements from colleagues",
        tips: ["Crucial for recruiters to match you with opportunities", "Regularly update your skills list"],
      },
      {
        id: "linkedin-14",
        title: "Recommendations",
        description: "Request recommendations from trusted connections",
        tips: ["Serve as testimonials to your capabilities", "Offer to write recommendations for others"],
      },
    ],
  },
  {
    category: "Additional Sections",
    items: [
      {
        id: "linkedin-15",
        title: "Courses",
        description: "Showcase relevant courses with institution and completion date",
        tips: ["Demonstrates continuous learning", "Focus on courses relevant to your target role"],
      },
      {
        id: "linkedin-16",
        title: "Projects",
        description: "Highlight key projects with title, description, and achievements",
        tips: ["Illustrates practical experience", "Include relevant outcomes"],
      },
      {
        id: "linkedin-17",
        title: "Languages",
        description: "List languages you are proficient in",
        tips: ["Can be significant asset in diverse workplaces"],
      },
    ],
  },
]

export const resumeChecklist: ChecklistCategory[] = [
  {
    category: "Format",
    items: [
      {
        id: "resume-1",
        title: "ATS-Friendly Template",
        description: "Use a simple, ATS-friendly template with clean formatting",
        tips: ["Avoid complex layouts", "Use standard fonts"],
      },
      {
        id: "resume-2",
        title: "Font Size",
        description: "Use font size between 10-12pt for readability",
        tips: ["Maintain consistency throughout"],
      },
      {
        id: "resume-3",
        title: "Length",
        description: "Keep resume to one page, or two if justifiable for experienced professionals",
        tips: ["Freshers should aim for one page"],
      },
      {
        id: "resume-4",
        title: "White Space",
        description: "Maintain sufficient white space for ease of reading",
        tips: ["Avoid cramming too much content"],
      },
      {
        id: "resume-5",
        title: "Formatting",
        description: "Use bold and italics for highlighting, avoid underlining",
        tips: ["Keep dates consistent (MMM YYYY)", "Make section headings clear"],
      },
      {
        id: "resume-6",
        title: "File Naming",
        description: "Name the resume document appropriately",
        tips: ["Format: Firstname_Lastname_Position", "Use PDF format"],
      },
    ],
  },
  {
    category: "Section Sequence (Freshers)",
    items: [
      {
        id: "resume-7",
        title: "Section Order",
        description:
          "Follow the sequence: Personal Info → Skills → Education → Projects → Internships → Activities → Certifications",
        tips: ["Prioritize sections by relevance to the job"],
      },
    ],
  },
  {
    category: "Personal Information",
    items: [
      {
        id: "resume-8",
        title: "Contact Details",
        description: "Include full name, phone, email, LinkedIn, and Portfolio links",
        tips: ["Omit unnecessary info like age, DOB", "City or state only for address"],
      },
      {
        id: "resume-9",
        title: "Hyperlinks",
        description: "Include only professional social media links and test all hyperlinks",
        tips: ["Ensure all links are functional"],
      },
    ],
  },
  {
    category: "Summary & Skills",
    items: [
      {
        id: "resume-10",
        title: "Summary/Objective",
        description: "Highlight your unique value in simple, clear language",
        tips: ["Keep it concise and inviting", "Proofread thoroughly"],
      },
      {
        id: "resume-11",
        title: "Skills Section",
        description: "Categorize skills effectively and match them to job requirements",
        tips: ["Add soft skills with achievements in experience section"],
      },
    ],
  },
  {
    category: "Experience & Projects",
    items: [
      {
        id: "resume-12",
        title: "Experience/Internships",
        description: "List in reverse chronological order with action verbs and quantified achievements",
        tips: ["Start bullet points with action verbs", "Specify tools and software used"],
      },
      {
        id: "resume-13",
        title: "Projects",
        description: "Provide concise descriptions with quantifiable outcomes",
        tips: ["Balance academic and personal projects", "Include links to work samples"],
      },
    ],
  },
  {
    category: "Achievements & Education",
    items: [
      {
        id: "resume-14",
        title: "Achievements",
        description: "List relevant awards and their impacts, aligned with job role",
        tips: ["Quantify impact where possible"],
      },
      {
        id: "resume-15",
        title: "Certifications",
        description: "List relevant certifications with title, issuer, and completion date",
        tips: ["Prioritize impactful and recent certifications"],
      },
      {
        id: "resume-16",
        title: "Education",
        description: "Include degree, institution, graduation date, relevant projects, and GPA",
        tips: ["For experienced, prioritize highest degree"],
      },
    ],
  },
  {
    category: "Final Checks",
    items: [
      {
        id: "resume-17",
        title: "Privacy",
        description: "Omit personal details like religion and marital status",
        tips: ["Focus on professional information only"],
      },
      {
        id: "resume-18",
        title: "Proofreading",
        description: "Check for grammatical errors and proofread thoroughly",
        tips: ["Use Resume Worded to check ATS Score"],
      },
    ],
  },
]

export const linkedinTemplates = {
  headline: `[Your Role] at [Company] | [Key Skill 1] | [Key Skill 2] | [Achievement or Interest]

Example: AI Engineer at TechCorp | Machine Learning | Gen AI | Building RAG systems that reduce response time by 40%`,

  about: `I'm a [Your Role] passionate about [Your Focus Area].

Currently, I'm [What you're working on]. My expertise spans [Key Skills], and I've [Notable Achievement].

Previously, I [Past Experience]. This background has given me [Unique Perspective].

When I'm not [Work Activity], you'll find me [Personal Interest].

Let's connect if you're interested in [Topics of Interest].`,

  connectionRequest: `Hi [Name],

I came across your profile while exploring [Topic/Company]. I'm particularly interested in [Specific Interest Related to Their Work].

I'm currently [Your Situation - learning/working on] and would love to connect and learn from your experience in [Their Field].

Looking forward to connecting!

Best,
[Your Name]`,
}
