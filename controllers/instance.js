const instance = require("../models/instance");

// function isJson(item) {
//   item = typeof item !== "string" ? JSON.stringify(item) : item;
//   try {
//     item = JSON.parse(item);
//   } catch (e) {
//     return false;
//   }
//   if (typeof item === "object" && item !== null) {
//     return true;
//   }
//   return false;
// }
// let finalJson = {};
// let parentJsonKey = [];
// let parentJsonKeyCount = [];

// let nestedJsonToPlainJson = (nestedJson) => {
//   let jsonKeys = Object.keys(nestedJson);

//   console.log("jsonKeys.length: ", jsonKeys.length);

//   for (let key in jsonKeys) {
//     if (
//       isJson(nestedJson[jsonKeys[key]]) &&
//       Object.keys(nestedJson[jsonKeys[key]]).length
//     ) {
//       parentJsonKeyCount.push(Object.keys(nestedJson[jsonKeys[key]]).length);
//       parentJsonKey.push(jsonKeys[key]);
//       nestedJsonToPlainJson(nestedJson[jsonKeys[key]]);
//     } else {
//       if (Array.isArray(nestedJson[jsonKeys[key]])) {
//         nestedJson[jsonKeys[key]].forEach(function (item, index) {
//           parentJsonKey.push(index);
//           nestedJsonToPlainJson(nestedJson[jsonKeys[key[index]]]);
//         });
//       } else {
//         let keyName = "";
//         parentJsonKey.forEach(function (item, index) {
//           keyName += parentJsonKey[index] + "_";
//         });

//         parentJsonKeyCount[parentJsonKeyCount.length - 1] =
//           parentJsonKeyCount[parentJsonKeyCount.length - 1] - 1;

//         if (parentJsonKeyCount[parentJsonKeyCount.length - 1] === 0) {
//           parentJsonKeyCount.pop();
//           parentJsonKey.pop();
//         }

//         finalJson[keyName + jsonKeys[key]] = nestedJson[jsonKeys[key]];
//       }
//     }
//   }

//   return finalJson;
// };

//let finalPlainJson = {};
// Update a Doc by the id in the request
exports.update = async (req, res) => {
  try {
    const { id } = req.body;

    // nestedJsonToPlainJson(req.body);
    // console.log("finalJson => ", nestedJsonToPlainJson(req.body));

    if (id) {
      let query = await instance.find({ id: id });

      if (!query.length) {
        const body = req.body;
        const Doc = new instance(body);
        const doc = await Doc.save();
      } else {
        let filter = {};
        filter.id = id;

        const body = req.body;
        let doc = await instance.findOneAndUpdate(filter, body);
      }
    }

    res.json("Updated");
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
  }
};
