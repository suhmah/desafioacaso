export const validatePassword = (value: string) => {
  const hasNumber = value.replace(/\D/g, '').length > 0;
  if (!hasNumber) return false;
  const hasLower =
    value.replace(/[^a-zàáâãäåçčćèéêëòóôõöøssùúûüÿæ]/g, '').length > 0;
  if (!hasLower) return false;

  return true;
};
