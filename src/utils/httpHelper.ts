import { HttpResponse } from "../models/httpResponseModel";

export const responseOk = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data
  };
};

export const responseCreated = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data
  };
};

export const responseNoContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  };
};

export const responseBadRequest = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: { error: message }
  };
};

export const responseUnauthorized = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 401,
    body: { error: message }
  };
};

export const responseForbidden = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 403,
    body: { error: message }
  };
};

export const responseNotFound = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: { error: message }
  };
};

export const responseInternalServerError = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 500,
    body: { error: message }
  };
};

export const responseNotImplemented = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 501,
    body: { error: message }
  };
};

export const responseServiceUnavailable = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 503,
    body: { error: message }
  };
};



