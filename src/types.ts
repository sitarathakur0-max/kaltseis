export type NavigationPage = 'home' | 'about' | 'services' | 'contact';

export interface VehicleInquiryForm {
  name: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  mileage: string;
  serviceCategory: string;
  issueDescription: string;
  preferredContact: 'phone' | 'email';
}

export interface WorkshopDetail {
  title: string;
  code: string;
  description: string;
  focusAreas: string[];
}
