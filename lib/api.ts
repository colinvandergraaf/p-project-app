const fetcher = async ({ url: string, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    // body: body && JSON.stringify(body),
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = async (user) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
    json: false,
  });
};

const signin = async (user) => {
  return fetcher({
    url: '/api/signin',
    method: 'POST',
    body: user,
    json: false,
  });
};
