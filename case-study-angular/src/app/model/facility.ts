export interface Facility {
  id: number;
  img?: string;
  name: string;
  leasedArea: number;
  rentalCosts: number;
  maxPerson: number;
  rentType: number;
  facilityType: number;
  description?: string;
  room?: string;
  floor?: number;
  areaPool?: number;
  free?: string;
}
