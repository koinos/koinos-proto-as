import { Writer, Reader } from "as-proto";

export namespace koinos {
  export namespace contracts {
    export namespace resources {
      @unmanaged
      export class market {
        static encode(message: market, writer: Writer): void {
          writer.uint32(8);
          writer.uint64(message.resource_supply);

          writer.uint32(16);
          writer.uint64(message.rc_reserve);

          writer.uint32(24);
          writer.uint64(message.block_budget);

          writer.uint32(32);
          writer.uint64(message.block_limit);
        }

        static decode(reader: Reader, length: i32): market {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new market();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.resource_supply = reader.uint64();
                break;

              case 2:
                message.rc_reserve = reader.uint64();
                break;

              case 3:
                message.block_budget = reader.uint64();
                break;

              case 4:
                message.block_limit = reader.uint64();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        resource_supply: u64;
        rc_reserve: u64;
        block_budget: u64;
        block_limit: u64;

        constructor(
          resource_supply: u64 = 0,
          rc_reserve: u64 = 0,
          block_budget: u64 = 0,
          block_limit: u64 = 0
        ) {
          this.resource_supply = resource_supply;
          this.rc_reserve = rc_reserve;
          this.block_budget = block_budget;
          this.block_limit = block_limit;
        }
      }

      @unmanaged
      export class resource_markets {
        static encode(message: resource_markets, writer: Writer): void {
          const disk_storage = message.disk_storage;
          if (disk_storage !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.contracts.resources.market.encode(disk_storage, writer);
            writer.ldelim();
          }

          const network_bandwidth = message.network_bandwidth;
          if (network_bandwidth !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.contracts.resources.market.encode(network_bandwidth, writer);
            writer.ldelim();
          }

          const compute_bandwidth = message.compute_bandwidth;
          if (compute_bandwidth !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.contracts.resources.market.encode(compute_bandwidth, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): resource_markets {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new resource_markets();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.disk_storage = koinos.contracts.resources.market.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.network_bandwidth =
                  koinos.contracts.resources.market.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 3:
                message.compute_bandwidth =
                  koinos.contracts.resources.market.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        disk_storage: koinos.contracts.resources.market | null;
        network_bandwidth: koinos.contracts.resources.market | null;
        compute_bandwidth: koinos.contracts.resources.market | null;

        constructor(
          disk_storage: koinos.contracts.resources.market | null = null,
          network_bandwidth: koinos.contracts.resources.market | null = null,
          compute_bandwidth: koinos.contracts.resources.market | null = null
        ) {
          this.disk_storage = disk_storage;
          this.network_bandwidth = network_bandwidth;
          this.compute_bandwidth = compute_bandwidth;
        }
      }

      @unmanaged
      export class get_resource_markets_arguments {
        static encode(
          message: get_resource_markets_arguments,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): get_resource_markets_arguments {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_resource_markets_arguments();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        constructor() {}
      }

      @unmanaged
      export class get_resource_markets_result {
        static encode(
          message: get_resource_markets_result,
          writer: Writer
        ): void {
          const value = message.value;
          if (value !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.contracts.resources.resource_markets.encode(value, writer);
            writer.ldelim();
          }
        }

        static decode(
          reader: Reader,
          length: i32
        ): get_resource_markets_result {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_resource_markets_result();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.value =
                  koinos.contracts.resources.resource_markets.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        value: koinos.contracts.resources.resource_markets | null;

        constructor(
          value: koinos.contracts.resources.resource_markets | null = null
        ) {
          this.value = value;
        }
      }
    }
  }
}
