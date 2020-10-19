import { VaccineRoad } from './vaccineRoad';
export interface Patient {
  id: number;
  code: string;
  fullName: string;
  gender: string;
  birthDay: Date;
  parentName: string;
  parentIdCard: string;
  address: string;
  phoneNumber: string;
  email: string;
  vaccineRoadList : VaccineRoad[];
}
