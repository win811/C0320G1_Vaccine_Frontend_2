import { VaccineRoadDetails } from './VaccineRoadDetails';
import { Patient } from './patient';
import {Vaccine} from './vaccine';

export interface VaccineRoad {
  id: number;
  vaccine: Vaccine;
  patient: Patient;
  vaccineRoadDetailsList : VaccineRoadDetails[];
}
