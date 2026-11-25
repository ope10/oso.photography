export type Category = "all" | "portraits" | "events" | "commercial";

export interface Project {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  date: string;
  image: string;
  description: string;
  client?: string;
  camera?: string;
  lens?: string;
  iso?: string;
}

export interface ServiceSubPackage {
  title: string;
  price: string;
  unit: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  subPackages: ServiceSubPackage[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
