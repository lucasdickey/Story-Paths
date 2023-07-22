const HEADERS = {
  'Accept': 'application/json',
}

function request(url: string, method: string, body?: object, headers?: object) {
  return fetch(url, {
    method: method,
    headers: { ...HEADERS, ...headers },
    body: JSON.stringify(body),
  })
    .then(processResponse);
}

function processResponse(response: Response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((error: any) => {
      throw error;
    });
  }
}

function get(url: string, headers?: object) {
  return request(url, 'GET', undefined, headers);
}

function post(url: string, body: object, headers?: object) {
  return request(url, 'POST', body, headers);
}

export const HttpService = {
  get: get,
  post: post,
}
