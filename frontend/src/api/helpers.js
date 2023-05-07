
export const makeApiCallAuthenticated = async (method, path, body, token) => {

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
    const response = await fetch(url(path), {
      method, headers, body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
  return Promise.resolve();
};

export const makeApiCall = async (method, path, body) => {
  try {
    const response = await fetch(url(path), {
      method, body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    });
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
  return Promise.resolve();
};

//const url = (path) => `${process.env.BACK_END_API}api/v1/${path}`

const url = (path) => `http://ecommerce-dev-1572531343.us-east-1.elb.amazonaws.com/api/v1/${path}`