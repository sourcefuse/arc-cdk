import { ApiGatewayRestApiConfig } from "@cdktf/provider-aws/lib/api-gateway-rest-api";
import {
  APIGatewayAuthorizer,
  APIGatewayEndPointType,
  APIGatewayHTTPMethod,
  APIGatewayLoggingLevel,
} from "./types";

/** @internal */
interface BaseConfig extends Omit<ApiGatewayRestApiConfig, ""> {}
export interface IRestAPIGatewayConfig extends BaseConfig {
  /**
   * Type of API Gateway.
   */
  type: APIGatewayEndPointType;

  /**
   * Region of API Gateway.
   */
  region: string;

  /**
   * Stage Name of the API Gateway.
   */
  stageName: string;

  /**
   * Enable Data Tracking. Defaults to false.
   */
  dataTraceEnabled?: boolean;

  /**
   * API Gateway Logging Level. Default is OFF.
   */
  loggingLevel?: APIGatewayLoggingLevel;

  /**
   * Throttling Burst Limit. Default is -1.
   */
  throttlingBurstLimit?: number;

  /**
   * Throttling Rate limit. Default is -1.
   */
  throttlingRateLimit?: number;

  /**
   * Web ACL ARN to attach with API Gateway..
   */
  webAclArn?: string;

  /**
   * Array of Proxy Integrations.
   */
  proxyIntegrations: IProxyIntegration[];

  /**
   * API Key Required?
   */
  apiKeyRequired?: boolean;

  /**
   * Name of the API Key.
   */
  apiKeyName?: string;

  /**
   * Name of the Usage Plan.
   */
  apiKeyUsagePlanName?: string;

  /**
   * API Key Burst Limit. Default value is 5000.
   */
  apiKeyBurstLimit?: number;

  /**
   * API Key Rate Limit Per Sec. Default value is 10000 Per Second
   */
  apiKeyRateLimit?: number;

  name: string;
  namespace: string;
  environment: string;
}

export interface IProxyIntegration {
  methods: IRestAPIGatewayMethods[];
  name: string;
  path: string;
}

export interface IRestAPIGatewayMethods {
  apiKeyRequired?: boolean;
  authorization?: APIGatewayAuthorizer;
  lambdaName: string;
  method?: APIGatewayHTTPMethod;
  name: string;
  schema?: string;
  alias?: string;
}
