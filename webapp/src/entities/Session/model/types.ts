export interface ISignInDto {
  email: string;
  password: string;
}

export interface ISignUpDto {
  email: string;
  password: string;
}

export interface ISession {
  access_token: string;
}
