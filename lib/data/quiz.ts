export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: "Indian Ecosystem" | "Term Sheet & Legal" | "Product & GTM" | "Founder Lore";
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Under DPIIT (Startup India) guidelines, up to how many years from incorporation can an entity be recognized as a startup?",
    options: ["5 years", "7 years", "10 years", "12 years"],
    correctIndex: 2,
    explanation: "Under Indian DPIIT regulations, an entity remains eligible for startup recognition for up to 10 years from its date of incorporation, provided turnover does not exceed ₹100 crore.",
    category: "Indian Ecosystem",
  },
  {
    id: 2,
    question: "What does '1x Non Participating Liquidation Preference' mean for common shareholders (founders)?",
    options: [
      "Investors get their investment back first, and do NOT double dip in remaining proceeds",
      "Investors take 100% of all sale proceeds regardless of price",
      "Investors get 1x back AND also share pro-rata with common shareholders",
      "Founders receive all cash before any investor gets paid",
    ],
    correctIndex: 0,
    explanation: "In a 1x non participating preference, the investor chooses between receiving 1x their original investment OR converting to common stock and taking their percentage share · preventing double dipping.",
    category: "Term Sheet & Legal",
  },
  {
    id: 3,
    question: "What is standard founder vesting in typical venture financings?",
    options: [
      "2 years with a 6-month cliff",
      "4 years with a 1-year cliff",
      "Immediate 100% vesting upon company formation",
      "5 years with no cliff",
    ],
    correctIndex: 1,
    explanation: "The global and Indian venture standard is a 4 year vesting schedule with a 1 year cliff (0% vests before month 12, then 25% at 12 months, followed by monthly vesting).",
    category: "Term Sheet & Legal",
  },
  {
    id: 4,
    question: "Which of the following metrics is the truest indicator of real Product Market Fit (PMF) for a SaaS product?",
    options: [
      "Total signups on Product Hunt launch day",
      "Number of followers on LinkedIn/Twitter",
      "Flattening cohort retention curve after 30/60/90 days",
      "Gross funding raised in angel rounds",
    ],
    correctIndex: 2,
    explanation: "Retention is the ultimate test of PMF. When cohort retention curves flatten horizontally rather than continuing down to zero, customers are genuinely hooked on the core loop.",
    category: "Product & GTM",
  },
  {
    id: 5,
    question: "In early stage startup financial modeling, what is the 'Burn Multiple' defined as?",
    options: [
      "Net Burn divided by Net New ARR added",
      "Total cash remaining divided by monthly expenses",
      "Monthly server bill divided by customer count",
      "Valuation divided by annual revenue",
    ],
    correctIndex: 0,
    explanation: "Burn Multiple = Net Burn / Net New ARR. A burn multiple under 1.0x is world class efficiency, while over 2.0x indicates capital inefficiency.",
    category: "Product & GTM",
  },
  {
    id: 6,
    question: "Which Indian digital public infrastructure layer enables consent based financial data sharing between banks and fintechs?",
    options: ["UPI AutoPay", "Account Aggregator (AA) framework", "DigiLocker API", "FASTag Gateway"],
    correctIndex: 1,
    explanation: "The RBI's Account Aggregator (AA) framework allows individuals and businesses to securely share financial information digitally across institutions with granular consent.",
    category: "Indian Ecosystem",
  },
  {
    id: 7,
    question: "What instrument is most commonly used by Indian founders to raise angel rounds quickly without pricing equity immediately?",
    options: [
      "iSAFE (India Simple Agreement for Future Equity)",
      "Non convertible Debentures (NCD)",
      "Bank Term Loans",
      "Commercial Paper",
    ],
    correctIndex: 0,
    explanation: "The iSAFE note (pioneered in India by 100X.VC based on Y Combinator's SAFE) defers formal company valuation to the next priced round and minimizes early legal paperwork.",
    category: "Term Sheet & Legal",
  },
  {
    id: 8,
    question: "Paul Graham's famous essay 'Do Things that Don't Scale' explicitly advises early founders to:",
    options: [
      "Automate every single support interaction before launch",
      "Recruit users manually one by one and provide obsessive support",
      "Spend marketing budget on billboard advertising",
      "Hire 20 sales representatives before having an MVP",
    ],
    correctIndex: 1,
    explanation: "In the early zero to one phase, unscalable manual effort (cold calling, in person installs, direct chat support) builds intimate founder customer relationships that software alone cannot replicate.",
    category: "Founder Lore",
  },
  {
    id: 9,
    question: "What does Section 80-IAC of the Indian Income Tax Act provide for recognized startups?",
    options: [
      "A 100% tax holiday on profits for 3 consecutive years out of 10 years",
      "Exemption from all GST requirements forever",
      "Free cloud hosting sponsored by the IT Ministry",
      "Automatic waiver of all state university tuition fees",
    ],
    correctIndex: 0,
    explanation: "Section 80-IAC gives eligible startups recognized by the Inter Ministerial Board a 100% tax deduction on eligible profits for three consecutive assessment years.",
    category: "Indian Ecosystem",
  },
  {
    id: 10,
    question: "At Polaris School of Technology (PST), what is the central motto governing student venture building?",
    options: [
      "Study first, start after graduation",
      "Build companies. Not résumés.",
      "Win pitch competitions for certificates",
      "Focus only on corporate campus placements",
    ],
    correctIndex: 1,
    explanation: "'Build companies. Not résumés.' is E Cell PST's core doctrine, turning dorm room curiosity into real, shipping ventures before graduation.",
    category: "Founder Lore",
  },
];
