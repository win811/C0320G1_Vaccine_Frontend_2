import {VaccineRoad} from './vaccineRoad';

export interface VaccineRoadDetails {
  id: number;
  vaccineRoad: VaccineRoad;
  injectionDate: Date;
  injectionTimes: number;
  isInjected: boolean;
}
