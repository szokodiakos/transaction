import { Client, Pool, PoolClient } from "pg";

import { SQLFooRepo } from "./sql-foo-repo";
import { FooRepo } from "./foo-repo";
import { BarRepo } from "./bar-repo";
import { SQLBarRepo } from "./sql-bar-repo";

export class TransactionService {
  constructor(
    private pool: Pool,
  ) {}

  async begin() {
    const client = await this.pool.connect();
    return new Transaction(client);
  }
}

export class Transaction {
  readonly fooRepo: FooRepo;
  readonly barRepo: BarRepo;

  constructor(
    private client: PoolClient,
  ) {
    this.fooRepo = new SQLFooRepo(this.client);
    this.barRepo = new SQLBarRepo(this.client);
  }

  async commit(): Promise<void> {
    await this.client.query('COMMIT');
  }

  async rollback(): Promise<void> {
    await this.client.query('ROLLBACK');
  }
}
