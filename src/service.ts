import { TransactionService, Transaction } from "./transaction";
import { Foo } from "./foo";
import { Bar } from "./bar";

export class Service {
  constructor(
    private transactionService: TransactionService,
  ) {}

  async doIt() {
    let tr: Transaction;
    try {
      tr = await this.transactionService.begin();
      await tr.fooRepo.add(new Foo('hello', 'world'));
      await tr.barRepo.add(new Bar('goodbye', 'world'));
      await tr.commit();
    } catch (err) {
      await tr.rollback();
    }
  }
}
