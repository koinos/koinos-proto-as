import { Writer, Reader } from "as-proto";

export namespace fund {
  export class global_vars {
    static encode(message: global_vars, writer: Writer): void {
      if (message.fee_denominator != 0) {
        writer.uint32(8);
        writer.uint64(message.fee_denominator);
      }

      if (message.total_projects != 0) {
        writer.uint32(16);
        writer.uint32(message.total_projects);
      }

      if (message.total_upcoming_projects != 0) {
        writer.uint32(24);
        writer.uint32(message.total_upcoming_projects);
      }

      if (message.total_active_projects != 0) {
        writer.uint32(32);
        writer.uint32(message.total_active_projects);
      }

      const unique_name_payment_times = message.payment_times;
      if (unique_name_payment_times.length !== 0) {
        for (let i = 0; i < unique_name_payment_times.length; ++i) {
          writer.uint32(40);
          writer.uint64(unique_name_payment_times[i]);
        }
      }

      if (message.remaining_balance != 0) {
        writer.uint32(48);
        writer.uint64(message.remaining_balance);
      }
    }

    static decode(reader: Reader, length: i32): global_vars {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new global_vars();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee_denominator = reader.uint64();
            break;

          case 2:
            message.total_projects = reader.uint32();
            break;

          case 3:
            message.total_upcoming_projects = reader.uint32();
            break;

          case 4:
            message.total_active_projects = reader.uint32();
            break;

          case 5:
            message.payment_times.push(reader.uint64());
            break;

          case 6:
            message.remaining_balance = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    fee_denominator: u64;
    total_projects: u32;
    total_upcoming_projects: u32;
    total_active_projects: u32;
    payment_times: Array<u64>;
    remaining_balance: u64;

    constructor(
      fee_denominator: u64 = 0,
      total_projects: u32 = 0,
      total_upcoming_projects: u32 = 0,
      total_active_projects: u32 = 0,
      payment_times: Array<u64> = [],
      remaining_balance: u64 = 0
    ) {
      this.fee_denominator = fee_denominator;
      this.total_projects = total_projects;
      this.total_upcoming_projects = total_upcoming_projects;
      this.total_active_projects = total_active_projects;
      this.payment_times = payment_times;
      this.remaining_balance = remaining_balance;
    }
  }

  @unmanaged
  export class set_global_vars_arguments {
    static encode(message: set_global_vars_arguments, writer: Writer): void {
      if (message.fee_denominator != 0) {
        writer.uint32(8);
        writer.uint64(message.fee_denominator);
      }
    }

    static decode(reader: Reader, length: i32): set_global_vars_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_global_vars_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee_denominator = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    fee_denominator: u64;

    constructor(fee_denominator: u64 = 0) {
      this.fee_denominator = fee_denominator;
    }
  }

  export class submit_project_arguments {
    static encode(message: submit_project_arguments, writer: Writer): void {
      if (message.creator.length != 0) {
        writer.uint32(10);
        writer.bytes(message.creator);
      }

      if (message.beneficiary.length != 0) {
        writer.uint32(18);
        writer.bytes(message.beneficiary);
      }

      if (message.title.length != 0) {
        writer.uint32(26);
        writer.string(message.title);
      }

      if (message.description.length != 0) {
        writer.uint32(34);
        writer.string(message.description);
      }

      if (message.monthly_payment != 0) {
        writer.uint32(40);
        writer.uint64(message.monthly_payment);
      }

      if (message.start_date != 0) {
        writer.uint32(48);
        writer.uint64(message.start_date);
      }

      if (message.end_date != 0) {
        writer.uint32(56);
        writer.uint64(message.end_date);
      }

      if (message.fee != 0) {
        writer.uint32(64);
        writer.uint64(message.fee);
      }
    }

    static decode(reader: Reader, length: i32): submit_project_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new submit_project_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creator = reader.bytes();
            break;

          case 2:
            message.beneficiary = reader.bytes();
            break;

          case 3:
            message.title = reader.string();
            break;

          case 4:
            message.description = reader.string();
            break;

          case 5:
            message.monthly_payment = reader.uint64();
            break;

          case 6:
            message.start_date = reader.uint64();
            break;

          case 7:
            message.end_date = reader.uint64();
            break;

          case 8:
            message.fee = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    creator: Uint8Array;
    beneficiary: Uint8Array;
    title: string;
    description: string;
    monthly_payment: u64;
    start_date: u64;
    end_date: u64;
    fee: u64;

    constructor(
      creator: Uint8Array = new Uint8Array(0),
      beneficiary: Uint8Array = new Uint8Array(0),
      title: string = "",
      description: string = "",
      monthly_payment: u64 = 0,
      start_date: u64 = 0,
      end_date: u64 = 0,
      fee: u64 = 0
    ) {
      this.creator = creator;
      this.beneficiary = beneficiary;
      this.title = title;
      this.description = description;
      this.monthly_payment = monthly_payment;
      this.start_date = start_date;
      this.end_date = end_date;
      this.fee = fee;
    }
  }

  @unmanaged
  export class submit_project_result {
    static encode(message: submit_project_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): submit_project_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new submit_project_result();

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

  export class project {
    static encode(message: project, writer: Writer): void {
      if (message.id != 0) {
        writer.uint32(8);
        writer.uint32(message.id);
      }

      if (message.creator.length != 0) {
        writer.uint32(18);
        writer.bytes(message.creator);
      }

      if (message.beneficiary.length != 0) {
        writer.uint32(26);
        writer.bytes(message.beneficiary);
      }

      if (message.title.length != 0) {
        writer.uint32(34);
        writer.string(message.title);
      }

      if (message.description.length != 0) {
        writer.uint32(42);
        writer.string(message.description);
      }

      if (message.monthly_payment != 0) {
        writer.uint32(48);
        writer.uint64(message.monthly_payment);
      }

      if (message.start_date != 0) {
        writer.uint32(56);
        writer.uint64(message.start_date);
      }

      if (message.end_date != 0) {
        writer.uint32(64);
        writer.uint64(message.end_date);
      }

      if (message.status != 0) {
        writer.uint32(72);
        writer.int32(message.status);
      }

      if (message.total_votes != 0) {
        writer.uint32(80);
        writer.uint64(message.total_votes);
      }

      const unique_name_votes = message.votes;
      if (unique_name_votes.length !== 0) {
        for (let i = 0; i < unique_name_votes.length; ++i) {
          writer.uint32(88);
          writer.uint64(unique_name_votes[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): project {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new project();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.uint32();
            break;

          case 2:
            message.creator = reader.bytes();
            break;

          case 3:
            message.beneficiary = reader.bytes();
            break;

          case 4:
            message.title = reader.string();
            break;

          case 5:
            message.description = reader.string();
            break;

          case 6:
            message.monthly_payment = reader.uint64();
            break;

          case 7:
            message.start_date = reader.uint64();
            break;

          case 8:
            message.end_date = reader.uint64();
            break;

          case 9:
            message.status = reader.int32();
            break;

          case 10:
            message.total_votes = reader.uint64();
            break;

          case 11:
            message.votes.push(reader.uint64());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: u32;
    creator: Uint8Array;
    beneficiary: Uint8Array;
    title: string;
    description: string;
    monthly_payment: u64;
    start_date: u64;
    end_date: u64;
    status: project_status;
    total_votes: u64;
    votes: Array<u64>;

    constructor(
      id: u32 = 0,
      creator: Uint8Array = new Uint8Array(0),
      beneficiary: Uint8Array = new Uint8Array(0),
      title: string = "",
      description: string = "",
      monthly_payment: u64 = 0,
      start_date: u64 = 0,
      end_date: u64 = 0,
      status: project_status = 0,
      total_votes: u64 = 0,
      votes: Array<u64> = []
    ) {
      this.id = id;
      this.creator = creator;
      this.beneficiary = beneficiary;
      this.title = title;
      this.description = description;
      this.monthly_payment = monthly_payment;
      this.start_date = start_date;
      this.end_date = end_date;
      this.status = status;
      this.total_votes = total_votes;
      this.votes = votes;
    }
  }

  @unmanaged
  export class existence {
    static encode(message: existence, writer: Writer): void {}

    static decode(reader: Reader, length: i32): existence {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new existence();

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
  export class vote_info {
    static encode(message: vote_info, writer: Writer): void {
      if (message.project_id != 0) {
        writer.uint32(8);
        writer.uint32(message.project_id);
      }

      if (message.weight != 0) {
        writer.uint32(16);
        writer.uint32(message.weight);
      }

      if (message.expiration != 0) {
        writer.uint32(24);
        writer.uint64(message.expiration);
      }
    }

    static decode(reader: Reader, length: i32): vote_info {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new vote_info();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.project_id = reader.uint32();
            break;

          case 2:
            message.weight = reader.uint32();
            break;

          case 3:
            message.expiration = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    project_id: u32;
    weight: u32;
    expiration: u64;

    constructor(project_id: u32 = 0, weight: u32 = 0, expiration: u64 = 0) {
      this.project_id = project_id;
      this.weight = weight;
      this.expiration = expiration;
    }
  }

  export class set_votes_koinos_fund_arguments {
    static encode(
      message: set_votes_koinos_fund_arguments,
      writer: Writer
    ): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }

      if (message.votes_koinos_fund != false) {
        writer.uint32(16);
        writer.bool(message.votes_koinos_fund);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): set_votes_koinos_fund_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_votes_koinos_fund_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          case 2:
            message.votes_koinos_fund = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;
    votes_koinos_fund: bool;

    constructor(
      account: Uint8Array = new Uint8Array(0),
      votes_koinos_fund: bool = false
    ) {
      this.account = account;
      this.votes_koinos_fund = votes_koinos_fund;
    }
  }

  export class update_vote_arguments {
    static encode(message: update_vote_arguments, writer: Writer): void {
      if (message.voter.length != 0) {
        writer.uint32(10);
        writer.bytes(message.voter);
      }

      if (message.project_id != 0) {
        writer.uint32(16);
        writer.uint32(message.project_id);
      }

      if (message.weight != 0) {
        writer.uint32(24);
        writer.uint32(message.weight);
      }
    }

    static decode(reader: Reader, length: i32): update_vote_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new update_vote_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.voter = reader.bytes();
            break;

          case 2:
            message.project_id = reader.uint32();
            break;

          case 3:
            message.weight = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    voter: Uint8Array;
    project_id: u32;
    weight: u32;

    constructor(
      voter: Uint8Array = new Uint8Array(0),
      project_id: u32 = 0,
      weight: u32 = 0
    ) {
      this.voter = voter;
      this.project_id = project_id;
      this.weight = weight;
    }
  }

  @unmanaged
  export class update_vote_result {
    static encode(message: update_vote_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): update_vote_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new update_vote_result();

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
  export class pay_projects_result {
    static encode(message: pay_projects_result, writer: Writer): void {
      if (message.next_payment_time != 0) {
        writer.uint32(8);
        writer.uint64(message.next_payment_time);
      }
    }

    static decode(reader: Reader, length: i32): pay_projects_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pay_projects_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.next_payment_time = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    next_payment_time: u64;

    constructor(next_payment_time: u64 = 0) {
      this.next_payment_time = next_payment_time;
    }
  }

  export class update_votes_arguments {
    static encode(message: update_votes_arguments, writer: Writer): void {
      if (message.voter.length != 0) {
        writer.uint32(10);
        writer.bytes(message.voter);
      }

      if (message.new_balance != 0) {
        writer.uint32(16);
        writer.uint64(message.new_balance);
      }

      if (message.old_balance != 0) {
        writer.uint32(24);
        writer.uint64(message.old_balance);
      }
    }

    static decode(reader: Reader, length: i32): update_votes_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new update_votes_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.voter = reader.bytes();
            break;

          case 2:
            message.new_balance = reader.uint64();
            break;

          case 3:
            message.old_balance = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    voter: Uint8Array;
    new_balance: u64;
    old_balance: u64;

    constructor(
      voter: Uint8Array = new Uint8Array(0),
      new_balance: u64 = 0,
      old_balance: u64 = 0
    ) {
      this.voter = voter;
      this.new_balance = new_balance;
      this.old_balance = old_balance;
    }
  }

  @unmanaged
  export class get_project_arguments {
    static encode(message: get_project_arguments, writer: Writer): void {
      if (message.project_id != 0) {
        writer.uint32(8);
        writer.uint32(message.project_id);
      }
    }

    static decode(reader: Reader, length: i32): get_project_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_project_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.project_id = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    project_id: u32;

    constructor(project_id: u32 = 0) {
      this.project_id = project_id;
    }
  }

  export class get_projects_arguments {
    static encode(message: get_projects_arguments, writer: Writer): void {
      if (message.status != 0) {
        writer.uint32(8);
        writer.int32(message.status);
      }

      if (message.order_by != 0) {
        writer.uint32(16);
        writer.int32(message.order_by);
      }

      if (message.start.length != 0) {
        writer.uint32(26);
        writer.string(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(32);
        writer.int32(message.limit);
      }

      if (message.descending != false) {
        writer.uint32(40);
        writer.bool(message.descending);
      }
    }

    static decode(reader: Reader, length: i32): get_projects_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_projects_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.status = reader.int32();
            break;

          case 2:
            message.order_by = reader.int32();
            break;

          case 3:
            message.start = reader.string();
            break;

          case 4:
            message.limit = reader.int32();
            break;

          case 5:
            message.descending = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    status: project_status;
    order_by: order_projects_by;
    start: string;
    limit: i32;
    descending: bool;

    constructor(
      status: project_status = 0,
      order_by: order_projects_by = 0,
      start: string = "",
      limit: i32 = 0,
      descending: bool = false
    ) {
      this.status = status;
      this.order_by = order_by;
      this.start = start;
      this.limit = limit;
      this.descending = descending;
    }
  }

  export class get_projects_result {
    static encode(message: get_projects_result, writer: Writer): void {
      const unique_name_projects = message.projects;
      for (let i = 0; i < unique_name_projects.length; ++i) {
        writer.uint32(10);
        writer.fork();
        project.encode(unique_name_projects[i], writer);
        writer.ldelim();
      }

      if (message.start_next_page.length != 0) {
        writer.uint32(18);
        writer.string(message.start_next_page);
      }
    }

    static decode(reader: Reader, length: i32): get_projects_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_projects_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.projects.push(project.decode(reader, reader.uint32()));
            break;

          case 2:
            message.start_next_page = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    projects: Array<project>;
    start_next_page: string;

    constructor(projects: Array<project> = [], start_next_page: string = "") {
      this.projects = projects;
      this.start_next_page = start_next_page;
    }
  }

  export class get_user_votes_arguments {
    static encode(message: get_user_votes_arguments, writer: Writer): void {
      if (message.voter.length != 0) {
        writer.uint32(10);
        writer.bytes(message.voter);
      }
    }

    static decode(reader: Reader, length: i32): get_user_votes_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_user_votes_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.voter = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    voter: Uint8Array;

    constructor(voter: Uint8Array = new Uint8Array(0)) {
      this.voter = voter;
    }
  }

  export class get_user_votes_result {
    static encode(message: get_user_votes_result, writer: Writer): void {
      const unique_name_votes = message.votes;
      for (let i = 0; i < unique_name_votes.length; ++i) {
        writer.uint32(10);
        writer.fork();
        vote_info.encode(unique_name_votes[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_user_votes_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_user_votes_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.votes.push(vote_info.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    votes: Array<vote_info>;

    constructor(votes: Array<vote_info> = []) {
      this.votes = votes;
    }
  }

  export enum project_status {
    upcoming = 0,
    active = 1,
    past = 2,
  }

  export enum order_projects_by {
    by_date = 0,
    by_votes = 1,
  }
}
