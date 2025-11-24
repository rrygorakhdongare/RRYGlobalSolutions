import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ValueItem {
  title: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}