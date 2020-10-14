import { VaccineRoad } from './vaccineRoad';
export interface Patient {
  id: number;
  code: string;
  fullName: string;
  gender: string;
  birthday: Date;
  parentName: string;
  parentIdCard: string;
  address: string;
  phoneNumber: string;
  email: string;
  vaccineRoadList : VaccineRoad[];
}
