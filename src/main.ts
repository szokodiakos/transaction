import { Pool } from "pg";

import { Service } from "./service";
import { TransactionService } from "./transaction";

async function main() {
  const service = new Service(
    new TransactionService(
      new Pool(),
    ),
  );

  await service.doIt();
}

main().catch(err => console.log(err.stack || err));
