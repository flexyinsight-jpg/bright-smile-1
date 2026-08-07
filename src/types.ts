export interface DentalService {
  id: string;
  title: string;
  category: 'preventative' | 'cosmetic' | 'restorative' | 'orthodontics' | 'surgical';
  shortDesc: string;
  fullDesc: string;
  price: string;
  duration: string;
  iconName: string;
  features: string[];
  beforeAfterImage?: {
    before: string;
    after: string;
  };
  popular?: boolean;
}

export interface Dentist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  education: string;
  image: string;
  rating: number;
  reviewCount: number;
  availableDays: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'insurance' | 'treatments';
}

export interface AppointmentFormData {
  serviceId: string;
  dentistId: string;
  date: string;
  timeSlot: string;
  patientName: string;
  email: string;
  phone: string;
  notes?: string;
  isFirstVisit: boolean;
  insuranceProvider?: string;
}

export interface BookingConfirmation extends AppointmentFormData {
  bookingRef: string;
  createdAt: string;
  serviceTitle: string;
  dentistName: string;
}
