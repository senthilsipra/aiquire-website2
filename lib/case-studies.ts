export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  techTags: string[];
  accentColor: string;
  ongoingVisibility?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fraud-detection-fintech",
    industry: "Financial Services",
    title: "Reducing Fraud Detection Time by 60% with Real-Time ML",
    challenge:
      "A regional bank was losing $4M annually to fraud while their rule-based system generated 40% false positives, overwhelming their investigation team and degrading customer experience.",
    solution:
      "We built a real-time ML scoring system using gradient boosting and neural networks trained on 3 years of transaction data. The system evaluates each transaction in under 50ms and feeds a human-in-the-loop review queue that prioritizes by confidence score.",
    results: [
      "60% faster fraud detection (avg. 3.2 min → 78 seconds)",
      "$2.4M annual fraud losses prevented",
      "False positive rate reduced from 40% to 11%",
      "Investigation team capacity freed by 35%",
    ],
    techTags: ["Python", "XGBoost", "PyTorch", "AWS SageMaker", "Kafka", "PostgreSQL"],
    accentColor: "#2980B9",
    ongoingVisibility: "Real-time dashboard showing leads processed, response times, and conversion lift updated every 15 minutes.",
  },
  {
    slug: "predictive-maintenance-manufacturing",
    industry: "Manufacturing",
    title: "Cutting Unplanned Downtime by 47% with Predictive Maintenance",
    challenge:
      "A Midwest automotive parts manufacturer was experiencing $800K/month in unplanned downtime. Their maintenance team relied entirely on scheduled PMs and reactive repairs.",
    solution:
      "We deployed IoT sensor pipelines collecting 200+ signals per machine, then built anomaly detection and remaining useful life models that give maintenance engineers 72-hour advance warning of equipment failures.",
    results: [
      "47% reduction in unplanned downtime",
      "$380K/month in savings within 6 months",
      "72-hour advance warning on 89% of detected failures",
      "Maintenance labor costs down 22%",
    ],
    techTags: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "Azure IoT Hub", "Grafana"],
    accentColor: "#27AE60",
  },
  {
    slug: "demand-forecasting-retail",
    industry: "Retail & E-Commerce",
    title: "18% Inventory Cost Reduction with AI Demand Forecasting",
    challenge:
      "A mid-market apparel retailer was carrying 23% excess inventory while simultaneously experiencing stockouts on 15% of SKUs. Their manual forecasting process couldn't handle the complexity of 12,000 SKUs across seasonal demand patterns.",
    solution:
      "We built a hierarchical demand forecasting system using LightGBM with external signals (weather, events, promotions) that generates SKU-level and store-level forecasts 12 weeks out. The system automatically re-forecasts weekly as new sales data arrives.",
    results: [
      "18% reduction in inventory carrying costs",
      "Stockout rate reduced from 15% to 6%",
      "Forecast accuracy improved from 62% to 87% MAPE",
      "$1.2M freed from working capital",
    ],
    techTags: ["Python", "LightGBM", "dbt", "Snowflake", "Airflow", "Looker"],
    accentColor: "#E67E22",
  },
  {
    slug: "clinical-nlp-healthcare",
    industry: "Healthcare & Life Sciences",
    title: "Automating Clinical Documentation Review with NLP",
    challenge:
      "A regional hospital network's clinical coding team was 3 weeks behind on chart reviews, causing billing delays and compliance risk. Manual review of 800+ charts per day was unsustainable.",
    solution:
      "We built a clinical NLP pipeline that extracts diagnoses, procedures, medications, and risk factors from unstructured clinical notes, flags potential coding gaps, and prioritizes charts for human review by complexity score.",
    results: [
      "Chart review time reduced from 12 min to 3 min per chart",
      "Coding backlog cleared within 45 days",
      "Revenue capture improved by $2.1M annually",
      "HIPAA-compliant, on-premise deployment",
    ],
    techTags: ["Python", "spaCy", "HuggingFace Transformers", "FastAPI", "PostgreSQL", "On-premise"],
    accentColor: "#8E44AD",
  },
];
