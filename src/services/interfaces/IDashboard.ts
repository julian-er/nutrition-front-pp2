import { IDietDashboard } from './interfaceResponses/IDiet';
import { INoteDashboard } from './interfaceResponses/INote';
import { IPatientDashboard } from './interfaceResponses/IPatient';

export interface IDashboardDataResponse {
  notes: Array<INoteDashboard>;
  days: Array<IDietDashboard>;
  patients: Array<IPatientDashboard>;
}
