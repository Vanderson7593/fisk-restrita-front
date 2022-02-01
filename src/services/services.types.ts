export type ApiRequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

export interface HttpResponse<T extends Object> {
  success: boolean;
  message: string;
  code: string;
  data?: T;
}
export interface ModelData<T> extends Response {
  data: T;
}

export interface ListData<T> extends Response {
  data: Array<T>;
}

