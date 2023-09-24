interface IProps {
  password?: string | undefined;
  confirmPassword?: string | undefined;
}
export const checkPassword = ({ password, confirmPassword }: IProps) => {
  if (password && confirmPassword) {
    return password === confirmPassword;
  }
  return true;
};
