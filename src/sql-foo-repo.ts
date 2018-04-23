import { PoolClient } from "pg";

import { FooRepo } from "./foo-repo";
import { Foo } from "./foo";

export class SQLFooRepo implements FooRepo {
  constructor(private client: PoolClient) {}

  async add(foo: Foo): Promise<void> {
    await this.client.query('INSERT INTO foo(a, b) VALUES($1, $2)', [foo.a, foo.b]);
  }
}
