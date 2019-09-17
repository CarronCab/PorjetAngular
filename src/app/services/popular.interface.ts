import { Film } from "./film.interface";

export interface Popular {
  page?: number;
  films?: Film[];
  total_results?: number;
  total_pages?: number;
}
