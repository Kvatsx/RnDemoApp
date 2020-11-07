export const getBaseHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
}

export const DEFAULT_API_TIMEOUT = 60000;