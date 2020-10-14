import {VaccineRoad} from './vaccineRoad';

export interface VaccineRoadDetails {
  id: number;
  vaccineRoad: VaccineRoad;
  injectionTimes: number;
  isInjected: boolean;
}
