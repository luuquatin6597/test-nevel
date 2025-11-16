/**
 * Format number with thousand separators
 * @param num - Number to format
 * @returns Formatted string with commas
 * @example formatNumber(1424042) => "1,424,042"
 */
export function formatNumber(num: number | string): string {
  const numValue = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(numValue)) return "0";

  return numValue.toLocaleString("en-US");
}

/**
 * Format currency with dollar sign and thousand separators
 * @param amount - Amount to format
 * @param currency - Currency symbol (default: "$")
 * @returns Formatted currency string
 * @example formatCurrency(7090099) => "$7,090,099"
 */
export function formatCurrency(
  amount: number | string,
  currency: string = "$"
): string {
  const numValue = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numValue)) return `${currency}0`;

  return `${currency}${numValue.toLocaleString("en-US")}`;
}

/**
 * Format currency with decimal places
 * @param amount - Amount to format
 * @param decimals - Number of decimal places (default: 2)
 * @param currency - Currency symbol (default: "$")
 * @returns Formatted currency string with decimals
 * @example formatCurrencyWithDecimals(7090099.5) => "$7,090,099.50"
 */
export function formatCurrencyWithDecimals(
  amount: number | string,
  decimals: number = 2,
  currency: string = "$"
): string {
  const numValue = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numValue)) return `${currency}0.${"0".repeat(decimals)}`;

  return `${currency}${numValue.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

/**
 * Compact number format (1K, 1M, 1B)
 * @param num - Number to format
 * @returns Compact formatted string
 * @example formatCompactNumber(1424042) => "1.4M"
 */
export function formatCompactNumber(num: number | string): string {
  const numValue = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(numValue)) return "0";

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(numValue);
}

/**
 * Parse formatted string back to number
 * @param str - Formatted string
 * @returns Number value
 * @example parseFormattedNumber("1,424,042") => 1424042
 */
export function parseFormattedNumber(str: string): number {
  return parseFloat(str.replace(/[^0-9.-]+/g, ""));
}
