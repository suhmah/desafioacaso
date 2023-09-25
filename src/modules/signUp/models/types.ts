export interface IRequestSignUp {
  email?: string;
  firstName?: string;
  lastedName?: string;
  password?: string;
}
export interface IRequestValidateCode {
  email?: string;
  confirmationCode: string;
}
