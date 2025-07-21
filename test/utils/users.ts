export type User = {
  username: string;
  password: string;
};

export type CustomerData = {
  firstName: string;
  lastName: string;
  zipCode: string;
};

export const users: Record<"standard" | "locked" | "problem", User> = {
  standard: { username: "standard_user", password: "secret_sauce" },
  locked: { username: "locked_out_user", password: "secret_sauce" },
  problem: { username: "problem_user", password: "secret_sauce" },
};

export const testCustomer: CustomerData = {
  firstName: "Rafal",
  lastName: "Tester",
  zipCode: "12345",
};
