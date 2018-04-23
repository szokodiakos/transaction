import { PoolClient } from "pg";

import { BarRepo } from "./bar-repo";
import { Bar } from "./bar";

export class SQLBarRepo implements BarRepo {
  constructor(private client: PoolClient) {}

  async add(bar: Bar): Promise<void> {
    await this.client.query('INSERT INTO bar(c, d) VALUES($1, $2)', [bar.c, bar.d]);
  }
}
