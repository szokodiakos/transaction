import { Foo } from "./foo";

export interface FooRepo {
  add(foo: Foo): Promise<void>;
}
