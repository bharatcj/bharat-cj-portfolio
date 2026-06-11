export type Metric = {
  value: number;
  suffix: string;
  label: string;
  detail: string;
};

export const metrics: Metric[] = [
  {
    value: 7,
    suffix: "+",
    label: "Years of engineering",
    detail: "Full-stack, AI & automation since 2018",
  },
  {
    value: 1186,
    suffix: "",
    label: "Commits in 4 months",
    detail: "Across 10 PartyWitty repositories",
  },
  {
    value: 87,
    suffix: "%",
    label: "Of core backend authored",
    detail: "889 of 1,017 commits · ~75 controllers",
  },
  {
    value: 4,
    suffix: "",
    label: "Payment gateways unified",
    detail: "Razorpay · Paytm · Stripe · Easebuzz",
  },
  {
    value: 24,
    suffix: "M+",
    label: "Records at scale",
    detail: "Bulk CRM operations engineered at Nablasol",
  },
  {
    value: 95,
    suffix: "%",
    label: "AI extraction accuracy",
    detail: "OCR + GPT-4 document pipelines",
  },
];
