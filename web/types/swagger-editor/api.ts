/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * backend-api
 * Backend API
 *
 * OpenAPI spec version: 0.0.1
 * Contact: tech@tradeling.com
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:3000".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface V1GetMovieActionResponse
 */
export interface V1GetMovieActionResponse {
    /**
     * 
     * @type {string}
     * @memberof V1GetMovieActionResponse
     */
    errorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof V1GetMovieActionResponse
     */
    errorMsg?: string;
    /**
     * 
     * @type {string}
     * @memberof V1GetMovieActionResponse
     */
    status?: V1GetMovieActionResponse.StatusEnum;
}

/**
 * @export
 * @namespace V1GetMovieActionResponse
 */
export namespace V1GetMovieActionResponse {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Success = <any> 'Success',
        Failure = <any> 'Failure'
    }
}
/**
 * MovieApi - fetch parameter creator
 * @export
 */
export const MovieApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get movie details.
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1GetMovieAction(body?: any, options: any = {}): FetchArgs {
            const localVarPath = `/v1-get-movie`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MovieApi - functional programming interface
 * @export
 */
export const MovieApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get movie details.
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1GetMovieAction(body?: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<V1GetMovieActionResponse> {
            const localVarFetchArgs = MovieApiFetchParamCreator(configuration).v1GetMovieAction(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * MovieApi - factory interface
 * @export
 */
export const MovieApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Get movie details.
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1GetMovieAction(body?: any, options?: any) {
            return MovieApiFp(configuration).v1GetMovieAction(body, options)(fetch, basePath);
        },
    };
};

/**
 * MovieApi - object-oriented interface
 * @export
 * @class MovieApi
 * @extends {BaseAPI}
 */
export class MovieApi extends BaseAPI {
    /**
     * Get movie details.
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MovieApi
     */
    public v1GetMovieAction(body?: any, options?: any) {
        return MovieApiFp(this.configuration).v1GetMovieAction(body, options)(this.fetch, this.basePath);
    }

}
