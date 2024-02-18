/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wvgmixqca5qkcjh",
    "created": "2024-02-13 05:34:21.098Z",
    "updated": "2024-02-13 05:34:21.098Z",
    "name": "applicants",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kybv9m9e",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "o01njpr1",
        "name": "bio",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_CfDERWO` ON `applicants` (`email`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wvgmixqca5qkcjh");

  return dao.deleteCollection(collection);
})
