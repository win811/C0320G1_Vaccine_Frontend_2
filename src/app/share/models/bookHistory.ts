import { Vaccine } from './vaccine';

export interface BookHistory {
  id: number;
  name: string;
  birthDay: Date;
  gender : string;
  parentName: string;
  parentIdCard: string;
  address: string;
  phoneNumber: string;
  email : string,
  vaccine: Vaccine;
  injectionDate: Date;
}
