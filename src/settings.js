// settings.js
export const defaultWorkDuration = 25; // minutes
export const defaultBreakDuration = 5; // minutes

export function validateDuration(duration) {
  return duration > 0 && duration <= 60;
}
