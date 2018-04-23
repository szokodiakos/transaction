import { Bar } from "./bar";

export interface BarRepo {
  add(bar: Bar): Promise<void>;
}
