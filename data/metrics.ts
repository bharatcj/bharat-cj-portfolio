export type Metric = {
  value: number;
  suffix: string;
  label: string;
  detail: string;
};

export const metrics: Metric[] = [
  {
    value: 8,
    suffix: "+",
    label: "Years of engineering",
    detail: "Full-stack, AI and Linux infrastructure since 2018",
  },
  {
    value: 10,
    suffix: "+",
    label: "Platform repositories",
    detail: "Web, mobile, admin, partner and infrastructure",
  },
  {
    value: 87,
    suffix: "%",
    label: "Of core backend authored",
    detail: "~75 controllers owned end to end",
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
    detail: "OCR and GPT-4 document pipelines",
  },
];
