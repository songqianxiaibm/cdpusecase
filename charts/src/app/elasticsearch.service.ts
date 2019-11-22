import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {
  private client: Client;

  private queryalldocs = {
    "size":"1000",
    "query": {
      "bool":{
        "must":[
          {"match": {"TRANSACTION_ID":"CSMI"}}
        ],
        "filter":[
          {"range":{
            "@timestamp":{
              "gte":"2019-10-08T06:28:50",
              "lte":"2019-10-09T07:30:00"
            }
           }
          }
        ]
      }
    }
  };

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://9.115.112.204:9200',
      log: 'trace'
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello grokonez!'
    });
  }

  addToIndex(value): any {
    return this.client.create(value);
  }



  getAllDocuments(index1, type1): any {
    return this.client.search({
      index: index1,
      type: type1,
      body: this.queryalldocs,
      filterPath: ['hits.hits._source']
    });
  }
}
