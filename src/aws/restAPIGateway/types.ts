export namespace APIGatewayEndPointType {
  export const EDGE_OPTIMIZED: string = "EDGE";
  export const PRIVATE: string = "PRIVATE";
  export const REGIONAL: string = "REGIONAL";
}

export namespace APIGatewayLoggingLevel {
  export const ERROR: string = "ERROR";
  export const INFO: string = "INFO";
  export const OFF: string = "OFF";
}

export namespace APIGatewayHTTPMethod {
  export const ANY: string = "ANY";
  export const DELETE: string = "DELETE";
  export const GET: string = "GET";
  export const PATCH: string = "PATCH";
  export const POST: string = "POST";
  export const PUT: string = "PUT";
}

export namespace APIGatewayAuthorizer {
  export const AWS_IAM: string = "AWS_IAM";
  export const NONE: string = "NONE";
}
export namespace APIGatewayUsagePlanKey {
  export const API_KEY: string = "API_KEY";
}

export type TypeAPIGatewayAuthorizer = "AWS_IAM" | "NONE";
export type TypeAPIGatewayEndPointType = "EDGE" | "PRIVATE" | "REGIONAL";
export type TypeAPIGatewayHTTPMethod =
  | "ANY"
  | "DELETE"
  | "GET"
  | "PATCH"
  | "POST"
  | "PUT";
export type TypeAPIGatewayLoggingLevel = "ERROR" | "INFO" | "OFF";
export type TypeAPIGatewayUsagePlanKey = "API_KEY";
