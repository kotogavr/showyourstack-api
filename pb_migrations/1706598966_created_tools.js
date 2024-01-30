/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "voe17td77nnrfve",
    "created": "2024-01-30 07:16:06.703Z",
    "updated": "2024-01-30 07:16:06.703Z",
    "name": "tools",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jkpstdle",
        "name": "name",
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
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("voe17td77nnrfve");

  return dao.deleteCollection(collection);
})
