export const useFormatter = () => {
  const currency = (
    value: number | string
  ): string => {
    const amount =
      Number(value) || 0

    return `IDR ${new Intl.NumberFormat(
      "id-ID",
      {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }
    ).format(amount)}`
  }

  return {
    currency
  }
}