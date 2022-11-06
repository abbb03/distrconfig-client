import * as fs from 'fs'
import fetch from 'node-fetch';

export default class ConfigDistrClient {
    constructor(
        private readonly serverURI: string
    ) {}

    async getConfig(service: string, version?: number): Promise <object> {
        let fullUri: string = this.serverURI + '?service=' + service;
        if (version) {
            fullUri += '&v=' + version;
        }

        const response = await fetch(fullUri);
        const data = await response.json();
        return data;
    }

    async createConfig(path: string): Promise <object> {
        const file: string = (fs.readFileSync(path, {encoding: 'utf-8'}))
        const response = await fetch(this.serverURI, {method: 'POST', body: file, headers: {'Content-Type': 'application/json'}});
        const data = await response.json();
        return data;
    }

    async updateConfig(path: string): Promise<object> {
        const file: string = (fs.readFileSync(path, {encoding: 'utf-8'}))
        const response = await fetch(this.serverURI, {method: 'PATCH', body: file, headers: {'Content-Type': 'application/json'}});
        const data = await response.json();
        return data;
    }

    async deleteConfig(service: string): Promise<object> {
        let fullUri: string = this.serverURI + '?service=' + service;
        const response = await fetch(fullUri, {method: 'DELETE'});
        const data = await response.json();
        return data;
    }
}
