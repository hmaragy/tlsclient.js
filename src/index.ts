import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import {
  createAdapter,
  DEFAULT_CLIENT_ID,
  DEFAULT_HEADERS,
  DEFAULT_HEADER_ORDER,
} from "./helpers/adapter";

type TLSClientIdentifier =
  | "chrome_103"
  | "chrome_104"
  | "chrome_105"
  | "chrome_106"
  | "chrome_107"
  | "chrome_108"
  | "chrome_109"
  | "chrome_110"
  | "chrome_111"
  | "chrome_112"
  | "chrome_116_PSK"
  | "chrome_116_PSK_PQ"
  | "chrome_117"
  | "chrome_120"
  | "chrome_124"
  | "chrome_130_PSK"
  | "chrome_131"
  | "chrome_131_PSK"
  | "chrome_133"
  | "chrome_133_PSK"
  | "chrome_144"
  | "chrome_144_PSK"
  | "chrome_146"
  | "chrome_146_PSK"
  | "safari_15_6_1"
  | "safari_16_0"
  | "safari_ipad_15_6"
  | "safari_ios_15_5"
  | "safari_ios_15_6"
  | "safari_ios_16_0"
  | "safari_ios_17_0"
  | "safari_ios_18_0"
  | "safari_ios_18_5"
  | "safari_ios_26_0"
  | "firefox_102"
  | "firefox_104"
  | "firefox_105"
  | "firefox_106"
  | "firefox_108"
  | "firefox_110"
  | "firefox_117"
  | "firefox_120"
  | "firefox_123"
  | "firefox_132"
  | "firefox_133"
  | "firefox_135"
  | "firefox_146_PSK"
  | "firefox_147"
  | "firefox_147_PSK"
  | "opera_89"
  | "opera_90"
  | "opera_91"
  | "zalando_android_mobile"
  | "zalando_ios_mobile"
  | "nike_ios_mobile"
  | "nike_android_mobile"
  | "cloudscraper"
  | "mms_ios"
  | "mms_ios_1"
  | "mms_ios_2"
  | "mms_ios_3"
  | "mesh_ios"
  | "mesh_ios_1"
  | "mesh_ios_2"
  | "mesh_android"
  | "mesh_android_1"
  | "mesh_android_2"
  | "confirmed_ios"
  | "confirmed_android"
  | "okhttp4_android_7"
  | "okhttp4_android_8"
  | "okhttp4_android_9"
  | "okhttp4_android_10"
  | "okhttp4_android_11"
  | "okhttp4_android_12"
  | "okhttp4_android_13";

interface TLSClientConfiguration extends CreateAxiosDefaults<any> {
  proxy?: string | any;
  tlsClientIdentifier?: TLSClientIdentifier;
  customTlsClient?: any;
  tlsLibPath?: string;
  forceHttp1?: boolean;
  followRedirects?: boolean;
  insecureSkipVerify?: boolean;
  withRandomTLSExtensionOrder?: boolean;
  timeout?: number;
  defaultHeaders?: any;
  headerOrder?: string[];
  withCookieJar?: boolean;
  sessionId?: string;
}

/**
 * Create a TLS client.
 * Extra/Modified options available in config (can be also used per request (except tlsLibPath)) are:
 * - `proxy` - The proxy to use. (http://user:pass@host:port)
 * - `tlsClientIdentifier` - Choose the desired tls client. (https://github.com/bogdanfinn/tls-client/blob/master/profiles/profiles.go#L10)
 * - `customTlsClient` - Use a custom tls client instead of the default one. (https://github.com/bogdanfinn/tls-client/blob/master/cffi_dist/example_node/index_custom_client.js#L27)
 * - `tlsLibPath` - Specify path for a bogdanfinn/tls-client fork (.dll, .dylib, .so) (optional).
 * - `forceHttp1` - Force http1.
 * - `followRedirects` - Follow redirects.
 * - `insecureSkipVerify` - Skip tls certificate verification.
 * - `withRandomTLSExtensionOrder` - Randomize the order of tls extensions.
 * - `timeout` - Request timeout.
 * - `defaultHeaders` - Default headers to use. Usually the browser default headers.
 * - `headerOrder` - The order of the headers.
 */
function createTLSClient(config: TLSClientConfiguration = {}): AxiosInstance {
  let adapter: any = createAdapter(config);
  return axios.create({
    adapter,
    ...config,
  });
}

export default createTLSClient;

export {
  DEFAULT_CLIENT_ID,
  DEFAULT_HEADERS,
  DEFAULT_HEADER_ORDER,
  TLSClientIdentifier,
  TLSClientConfiguration,
  createTLSClient,
};
