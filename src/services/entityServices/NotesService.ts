import ApiBaseService from '../apiServices/ApiBaseService';

export interface INoteResponse {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default class NoteService extends ApiBaseService {
  public static async getPersonalNotes(user_id: number): Promise<any> {
    const res = await this.securedGet<Array<INoteResponse>>(`notes/nutritionist/personal-notes/${user_id}`);
    return res;
  }

  public static async getPatientNotes(user_id: number): Promise<any> {
    const res = await this.securedGet<Array<INoteResponse>>(`notes/nutritionist/patients-notes/${user_id}`);
    return res;
  }
}
