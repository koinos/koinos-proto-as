import { Writer, Reader } from "as-proto";

export namespace kcs5 {
  @unmanaged
  export class name_arguments {
    static encode(message: name_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): name_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new name_arguments();

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

  export class name_result {
    static encode(message: name_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.string(message.value);
      }
    }

    static decode(reader: Reader, length: i32): name_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new name_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string;

    constructor(value: string = "") {
      this.value = value;
    }
  }

  @unmanaged
  export class symbol_arguments {
    static encode(message: symbol_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): symbol_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new symbol_arguments();

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

  export class symbol_result {
    static encode(message: symbol_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.string(message.value);
      }
    }

    static decode(reader: Reader, length: i32): symbol_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new symbol_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string;

    constructor(value: string = "") {
      this.value = value;
    }
  }

  @unmanaged
  export class uri_arguments {
    static encode(message: uri_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): uri_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new uri_arguments();

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

  export class uri_result {
    static encode(message: uri_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.string(message.value);
      }
    }

    static decode(reader: Reader, length: i32): uri_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new uri_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string;

    constructor(value: string = "") {
      this.value = value;
    }
  }

  export class token_uri_arguments {
    static encode(message: token_uri_arguments, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): token_uri_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new token_uri_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;

    constructor(token_id: Uint8Array = new Uint8Array(0)) {
      this.token_id = token_id;
    }
  }

  export class token_uri_result {
    static encode(message: token_uri_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.string(message.value);
      }
    }

    static decode(reader: Reader, length: i32): token_uri_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new token_uri_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string;

    constructor(value: string = "") {
      this.value = value;
    }
  }

  @unmanaged
  export class get_info_arguments {
    static encode(message: get_info_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_info_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_info_arguments();

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

  export class get_info_result {
    static encode(message: get_info_result, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.symbol.length != 0) {
        writer.uint32(18);
        writer.string(message.symbol);
      }

      if (message.uri != 0) {
        writer.uint32(24);
        writer.uint32(message.uri);
      }

      if (message.description.length != 0) {
        writer.uint32(34);
        writer.string(message.description);
      }
    }

    static decode(reader: Reader, length: i32): get_info_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_info_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.symbol = reader.string();
            break;

          case 3:
            message.uri = reader.uint32();
            break;

          case 4:
            message.description = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    symbol: string;
    uri: u32;
    description: string;

    constructor(
      name: string = "",
      symbol: string = "",
      uri: u32 = 0,
      description: string = ""
    ) {
      this.name = name;
      this.symbol = symbol;
      this.uri = uri;
      this.description = description;
    }
  }

  @unmanaged
  export class owner_arguments {
    static encode(message: owner_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): owner_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new owner_arguments();

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

  export class owner_result {
    static encode(message: owner_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): owner_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new owner_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  @unmanaged
  export class total_supply_arguments {
    static encode(message: total_supply_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): total_supply_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new total_supply_arguments();

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
  export class total_supply_result {
    static encode(message: total_supply_result, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint64(message.value);
      }
    }

    static decode(reader: Reader, length: i32): total_supply_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new total_supply_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;

    constructor(value: u64 = 0) {
      this.value = value;
    }
  }

  export class royalty {
    static encode(message: royalty, writer: Writer): void {
      if (message.percentage != 0) {
        writer.uint32(8);
        writer.uint64(message.percentage);
      }

      if (message.address.length != 0) {
        writer.uint32(18);
        writer.bytes(message.address);
      }
    }

    static decode(reader: Reader, length: i32): royalty {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new royalty();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.percentage = reader.uint64();
            break;

          case 2:
            message.address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    percentage: u64;
    address: Uint8Array;

    constructor(percentage: u64 = 0, address: Uint8Array = new Uint8Array(0)) {
      this.percentage = percentage;
      this.address = address;
    }
  }

  @unmanaged
  export class royalties_arguments {
    static encode(message: royalties_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): royalties_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new royalties_arguments();

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

  export class royalties_result {
    static encode(message: royalties_result, writer: Writer): void {
      const unique_name_value = message.value;
      for (let i = 0; i < unique_name_value.length; ++i) {
        writer.uint32(10);
        writer.fork();
        royalty.encode(unique_name_value[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): royalties_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new royalties_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value.push(royalty.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Array<royalty>;

    constructor(value: Array<royalty> = []) {
      this.value = value;
    }
  }

  export class balance_of_arguments {
    static encode(message: balance_of_arguments, writer: Writer): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }
    }

    static decode(reader: Reader, length: i32): balance_of_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new balance_of_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;

    constructor(owner: Uint8Array = new Uint8Array(0)) {
      this.owner = owner;
    }
  }

  @unmanaged
  export class balance_of_result {
    static encode(message: balance_of_result, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint64(message.value);
      }
    }

    static decode(reader: Reader, length: i32): balance_of_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new balance_of_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;

    constructor(value: u64 = 0) {
      this.value = value;
    }
  }

  export class owner_of_arguments {
    static encode(message: owner_of_arguments, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): owner_of_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new owner_of_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;

    constructor(token_id: Uint8Array = new Uint8Array(0)) {
      this.token_id = token_id;
    }
  }

  export class owner_of_result {
    static encode(message: owner_of_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): owner_of_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new owner_of_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  export class metadata_of_arguments {
    static encode(message: metadata_of_arguments, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): metadata_of_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new metadata_of_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;

    constructor(token_id: Uint8Array = new Uint8Array(0)) {
      this.token_id = token_id;
    }
  }

  export class metadata_of_result {
    static encode(message: metadata_of_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.string(message.value);
      }
    }

    static decode(reader: Reader, length: i32): metadata_of_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new metadata_of_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string;

    constructor(value: string = "") {
      this.value = value;
    }
  }

  export class get_tokens_arguments {
    static encode(message: get_tokens_arguments, writer: Writer): void {
      if (message.start.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(16);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(24);
        writer.bool(message.descending);
      }
    }

    static decode(reader: Reader, length: i32): get_tokens_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_tokens_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start = reader.bytes();
            break;

          case 2:
            message.limit = reader.int32();
            break;

          case 3:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start: Uint8Array;
    limit: i32;
    descending: bool;

    constructor(
      start: Uint8Array = new Uint8Array(0),
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_tokens_result {
    static encode(message: get_tokens_result, writer: Writer): void {
      const unique_name_values = message.values;
      if (unique_name_values.length !== 0) {
        for (let i = 0; i < unique_name_values.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_values[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): get_tokens_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_tokens_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<Uint8Array>;

    constructor(values: Array<Uint8Array> = []) {
      this.values = values;
    }
  }

  export class get_tokens_by_owner_arguments {
    static encode(
      message: get_tokens_by_owner_arguments,
      writer: Writer
    ): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.start.length != 0) {
        writer.uint32(18);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(24);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(32);
        writer.bool(message.descending);
      }
    }

    static decode(reader: Reader, length: i32): get_tokens_by_owner_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_tokens_by_owner_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.start = reader.bytes();
            break;

          case 3:
            message.limit = reader.int32();
            break;

          case 4:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    start: Uint8Array;
    limit: i32;
    descending: bool;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      start: Uint8Array = new Uint8Array(0),
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.owner = owner;
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_tokens_by_owner_result {
    static encode(message: get_tokens_by_owner_result, writer: Writer): void {
      const unique_name_values = message.values;
      if (unique_name_values.length !== 0) {
        for (let i = 0; i < unique_name_values.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_values[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): get_tokens_by_owner_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_tokens_by_owner_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<Uint8Array>;

    constructor(values: Array<Uint8Array> = []) {
      this.values = values;
    }
  }

  export class get_approved_arguments {
    static encode(message: get_approved_arguments, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): get_approved_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_approved_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;

    constructor(token_id: Uint8Array = new Uint8Array(0)) {
      this.token_id = token_id;
    }
  }

  export class get_approved_result {
    static encode(message: get_approved_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): get_approved_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_approved_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  export class is_approved_for_all_arguments {
    static encode(
      message: is_approved_for_all_arguments,
      writer: Writer
    ): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.operator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operator);
      }
    }

    static decode(reader: Reader, length: i32): is_approved_for_all_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_approved_for_all_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.operator = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    operator: Uint8Array;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      operator: Uint8Array = new Uint8Array(0)
    ) {
      this.owner = owner;
      this.operator = operator;
    }
  }

  @unmanaged
  export class is_approved_for_all_result {
    static encode(message: is_approved_for_all_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): is_approved_for_all_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_approved_for_all_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class get_operator_approvals_arguments {
    static encode(
      message: get_operator_approvals_arguments,
      writer: Writer
    ): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.start.length != 0) {
        writer.uint32(18);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(24);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(32);
        writer.bool(message.descending);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_operator_approvals_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_operator_approvals_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.start = reader.bytes();
            break;

          case 3:
            message.limit = reader.int32();
            break;

          case 4:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    start: Uint8Array;
    limit: i32;
    descending: bool;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      start: Uint8Array = new Uint8Array(0),
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.owner = owner;
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_operator_approvals_result {
    static encode(
      message: get_operator_approvals_result,
      writer: Writer
    ): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      const unique_name_operators = message.operators;
      if (unique_name_operators.length !== 0) {
        for (let i = 0; i < unique_name_operators.length; ++i) {
          writer.uint32(18);
          writer.bytes(unique_name_operators[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): get_operator_approvals_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_operator_approvals_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.operators.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    operators: Array<Uint8Array>;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      operators: Array<Uint8Array> = []
    ) {
      this.owner = owner;
      this.operators = operators;
    }
  }

  export class transfer_ownership_arguments {
    static encode(message: transfer_ownership_arguments, writer: Writer): void {
      if (message.to.length != 0) {
        writer.uint32(10);
        writer.bytes(message.to);
      }
    }

    static decode(reader: Reader, length: i32): transfer_ownership_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_ownership_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    to: Uint8Array;

    constructor(to: Uint8Array = new Uint8Array(0)) {
      this.to = to;
    }
  }

  @unmanaged
  export class transfer_ownership_result {
    static encode(message: transfer_ownership_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): transfer_ownership_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_ownership_result();

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

  export class owner_event {
    static encode(message: owner_event, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.to.length != 0) {
        writer.uint32(18);
        writer.bytes(message.to);
      }
    }

    static decode(reader: Reader, length: i32): owner_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new owner_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.to = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    to: Uint8Array;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      to: Uint8Array = new Uint8Array(0)
    ) {
      this.from = from;
      this.to = to;
    }
  }

  export class set_royalties_arguments {
    static encode(message: set_royalties_arguments, writer: Writer): void {
      const unique_name_value = message.value;
      for (let i = 0; i < unique_name_value.length; ++i) {
        writer.uint32(10);
        writer.fork();
        royalty.encode(unique_name_value[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): set_royalties_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_royalties_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value.push(royalty.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Array<royalty>;

    constructor(value: Array<royalty> = []) {
      this.value = value;
    }
  }

  @unmanaged
  export class set_royalties_result {
    static encode(message: set_royalties_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): set_royalties_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_royalties_result();

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

  export class royalties_event {
    static encode(message: royalties_event, writer: Writer): void {
      const unique_name_value = message.value;
      for (let i = 0; i < unique_name_value.length; ++i) {
        writer.uint32(10);
        writer.fork();
        royalty.encode(unique_name_value[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): royalties_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new royalties_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value.push(royalty.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Array<royalty>;

    constructor(value: Array<royalty> = []) {
      this.value = value;
    }
  }

  export class set_metadata_arguments {
    static encode(message: set_metadata_arguments, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }

      if (message.metadata.length != 0) {
        writer.uint32(18);
        writer.string(message.metadata);
      }
    }

    static decode(reader: Reader, length: i32): set_metadata_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_metadata_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          case 2:
            message.metadata = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;
    metadata: string;

    constructor(
      token_id: Uint8Array = new Uint8Array(0),
      metadata: string = ""
    ) {
      this.token_id = token_id;
      this.metadata = metadata;
    }
  }

  @unmanaged
  export class set_metadata_result {
    static encode(message: set_metadata_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): set_metadata_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_metadata_result();

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

  export class set_metadata_event {
    static encode(message: set_metadata_event, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }

      if (message.metadata.length != 0) {
        writer.uint32(18);
        writer.string(message.metadata);
      }
    }

    static decode(reader: Reader, length: i32): set_metadata_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_metadata_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          case 2:
            message.metadata = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;
    metadata: string;

    constructor(
      token_id: Uint8Array = new Uint8Array(0),
      metadata: string = ""
    ) {
      this.token_id = token_id;
      this.metadata = metadata;
    }
  }

  export class approve_arguments {
    static encode(message: approve_arguments, writer: Writer): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.operator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operator);
      }

      if (message.token_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(34);
        writer.string(message.memo);
      }

      if (message.approve != false) {
        writer.uint32(40);
        writer.bool(message.approve);
      }
    }

    static decode(reader: Reader, length: i32): approve_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new approve_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.operator = reader.bytes();
            break;

          case 3:
            message.token_id = reader.bytes();
            break;

          case 4:
            message.memo = reader.string();
            break;

          case 5:
            message.approve = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    operator: Uint8Array;
    token_id: Uint8Array;
    memo: string;
    approve: bool;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      operator: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = "",
      approve: bool = false
    ) {
      this.owner = owner;
      this.operator = operator;
      this.token_id = token_id;
      this.memo = memo;
      this.approve = approve;
    }
  }

  @unmanaged
  export class approve_result {
    static encode(message: approve_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): approve_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new approve_result();

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

  export class token_approval_event {
    static encode(message: token_approval_event, writer: Writer): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.operator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operator);
      }

      if (message.token_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(34);
        writer.string(message.memo);
      }

      if (message.approve != false) {
        writer.uint32(40);
        writer.bool(message.approve);
      }
    }

    static decode(reader: Reader, length: i32): token_approval_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new token_approval_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.operator = reader.bytes();
            break;

          case 3:
            message.token_id = reader.bytes();
            break;

          case 4:
            message.memo = reader.string();
            break;

          case 5:
            message.approve = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    operator: Uint8Array;
    token_id: Uint8Array;
    memo: string;
    approve: bool;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      operator: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = "",
      approve: bool = false
    ) {
      this.owner = owner;
      this.operator = operator;
      this.token_id = token_id;
      this.memo = memo;
      this.approve = approve;
    }
  }

  export class set_approval_for_all_arguments {
    static encode(
      message: set_approval_for_all_arguments,
      writer: Writer
    ): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.operator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operator);
      }

      if (message.approved != false) {
        writer.uint32(24);
        writer.bool(message.approved);
      }

      if (message.memo.length != 0) {
        writer.uint32(34);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): set_approval_for_all_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_approval_for_all_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.operator = reader.bytes();
            break;

          case 3:
            message.approved = reader.bool();
            break;

          case 4:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    operator: Uint8Array;
    approved: bool;
    memo: string;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      operator: Uint8Array = new Uint8Array(0),
      approved: bool = false,
      memo: string = ""
    ) {
      this.owner = owner;
      this.operator = operator;
      this.approved = approved;
      this.memo = memo;
    }
  }

  @unmanaged
  export class set_approval_for_all_result {
    static encode(message: set_approval_for_all_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): set_approval_for_all_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_approval_for_all_result();

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

  export class operator_approval_event {
    static encode(message: operator_approval_event, writer: Writer): void {
      if (message.owner.length != 0) {
        writer.uint32(10);
        writer.bytes(message.owner);
      }

      if (message.operator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operator);
      }

      if (message.approved != false) {
        writer.uint32(24);
        writer.bool(message.approved);
      }

      if (message.memo.length != 0) {
        writer.uint32(34);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): operator_approval_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new operator_approval_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.owner = reader.bytes();
            break;

          case 2:
            message.operator = reader.bytes();
            break;

          case 3:
            message.approved = reader.bool();
            break;

          case 4:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    owner: Uint8Array;
    operator: Uint8Array;
    approved: bool;
    memo: string;

    constructor(
      owner: Uint8Array = new Uint8Array(0),
      operator: Uint8Array = new Uint8Array(0),
      approved: bool = false,
      memo: string = ""
    ) {
      this.owner = owner;
      this.operator = operator;
      this.approved = approved;
      this.memo = memo;
    }
  }

  export class mint_arguments {
    static encode(message: mint_arguments, writer: Writer): void {
      if (message.to.length != 0) {
        writer.uint32(10);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(26);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): mint_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mint_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.bytes();
            break;

          case 2:
            message.token_id = reader.bytes();
            break;

          case 3:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    to: Uint8Array;
    token_id: Uint8Array;
    memo: string;

    constructor(
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = ""
    ) {
      this.to = to;
      this.token_id = token_id;
      this.memo = memo;
    }
  }

  @unmanaged
  export class mint_result {
    static encode(message: mint_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): mint_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mint_result();

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

  export class mint_event {
    static encode(message: mint_event, writer: Writer): void {
      if (message.to.length != 0) {
        writer.uint32(10);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(26);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): mint_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mint_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.bytes();
            break;

          case 2:
            message.token_id = reader.bytes();
            break;

          case 3:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    to: Uint8Array;
    token_id: Uint8Array;
    memo: string;

    constructor(
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = ""
    ) {
      this.to = to;
      this.token_id = token_id;
      this.memo = memo;
    }
  }

  export class transfer_arguments {
    static encode(message: transfer_arguments, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.to.length != 0) {
        writer.uint32(18);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(34);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): transfer_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.to = reader.bytes();
            break;

          case 3:
            message.token_id = reader.bytes();
            break;

          case 4:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    to: Uint8Array;
    token_id: Uint8Array;
    memo: string;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = ""
    ) {
      this.from = from;
      this.to = to;
      this.token_id = token_id;
      this.memo = memo;
    }
  }

  @unmanaged
  export class transfer_result {
    static encode(message: transfer_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): transfer_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_result();

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

  export class transfer_event {
    static encode(message: transfer_event, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.to.length != 0) {
        writer.uint32(18);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(34);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): transfer_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.to = reader.bytes();
            break;

          case 3:
            message.token_id = reader.bytes();
            break;

          case 4:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    to: Uint8Array;
    token_id: Uint8Array;
    memo: string;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = ""
    ) {
      this.from = from;
      this.to = to;
      this.token_id = token_id;
      this.memo = memo;
    }
  }

  export class burn_arguments {
    static encode(message: burn_arguments, writer: Writer): void {
      if (message.token_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(18);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): burn_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new burn_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_id = reader.bytes();
            break;

          case 2:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_id: Uint8Array;
    memo: string;

    constructor(token_id: Uint8Array = new Uint8Array(0), memo: string = "") {
      this.token_id = token_id;
      this.memo = memo;
    }
  }

  @unmanaged
  export class burn_result {
    static encode(message: burn_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): burn_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new burn_result();

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

  export class burn_event {
    static encode(message: burn_event, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.token_id.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token_id);
      }

      if (message.memo.length != 0) {
        writer.uint32(26);
        writer.string(message.memo);
      }
    }

    static decode(reader: Reader, length: i32): burn_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new burn_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.token_id = reader.bytes();
            break;

          case 3:
            message.memo = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    token_id: Uint8Array;
    memo: string;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0),
      memo: string = ""
    ) {
      this.from = from;
      this.token_id = token_id;
      this.memo = memo;
    }
  }
}
