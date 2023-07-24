const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const request = async <T>(url: string, method: string, body: object | undefined, headers: object | undefined): Promise<T> => {
  const response = await fetch(url, {
    method: method,
    headers: { ...HEADERS, ...headers },
    body: JSON.stringify(body),
  })

  return await processResponse(response);
}

const processResponse = async <T>(response: Response): Promise<T> => {
  try {
    const body = await response.json();
    return body;
  } catch (error: any) {
    throw error;
  }
}

const get = async <T>(url: string, headers?: object): Promise<T> => {
  return request(url, 'GET', undefined, headers);
}

const post = async <T>(url: string, body: object, headers: object): Promise<T> => {
  return request(url, 'POST', body, headers);
}

export const HttpService = {
  get: get,
  post: post,
}
