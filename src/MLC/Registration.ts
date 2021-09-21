export default interface Registration {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  dob: string;
  ssn: string;
  referrer?: number;
  phone?: string;
}
