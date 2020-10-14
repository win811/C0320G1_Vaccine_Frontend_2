import { VaccineRoad } from './vaccineRoad';
export interface Vaccine {
  id: number;
  name: string;
  category: string;
  receiveDate: Date;
  expiryDate: Date;
  country: string;
  content: number;
  amount: number;
  conditions: string;
  limitAge: number;
  inventoryStatus: string;
  price: number;
  injectionTimes: number;
  rangeTime: number;
  image : string;
  vaccineRoadList : VaccineRoad[];
}
