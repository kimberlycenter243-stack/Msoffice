export interface NavigationItem {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
  style: 'primary' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export interface FormField {
  type: 'text' | 'email' | 'tel' | 'select' | 'checkbox';
  name: string;
  label: string;
  required: boolean;
  options?: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ProgramModule {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface InfoBlock {
  icon: string;
  title: string;
  content: string;
  note?: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
}