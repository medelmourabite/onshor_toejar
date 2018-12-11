import { HttpClient } from "@angular/common/http";
export class Service {
  // url = "https://answerbucket.herokuapp.com/api";
  url = "http://localhost:3000/api";
  entity = "";
  http: HttpClient;

  constructor(entity: string, http: HttpClient) {
    this.entity = entity;
    this.http = http;
  }

  create(item) {
    console.log("new", item);
    return this.http.post(this.url + "/" + this.entity, { item: item });
  }

  update(id, item) {
    console.log("update", item);
    return this.http.put(this.url + "/" + this.entity + "/" + id, { item });
  }

  find() {
    return this.http.get(this.url + "/" + this.entity);
  }

  findOne(id) {
    return this.http.get(this.url + "/" + this.entity + "/" + id);
  }

  delete(id) {
    return this.http.delete(this.url + "/" + this.entity + "/" + id);
  }

  findByQuery(query) {
    return this.http.post(this.url + "/query/" + this.entity, { query });
  }
}
