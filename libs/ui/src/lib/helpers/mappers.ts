import { ResultsFragment } from '@nx-covid/api';
export interface NgxData {
  name: string;
  value: number;
}
export function mapToPieData(data: ResultsFragment[]): NgxData[] {
  return data.map(it => {
    return { name: it.name, value: it.mostRecent.confirmed };
  });
}
