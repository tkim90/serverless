'use strict';

module.exports.consumeData = async event => {
  const user = JSON.parse(event.body);
  const hasAtleastOneField = user.first_name || user.middle_name || user.last_name || user.zip_code;

  if (hasAtleastOneField) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        user,
        null,
        2
      ),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Missing first_name, middle_name, last_name, and zip_code."
        },
        null,
        2
      )
    };
  }
};

// module.exports.saveToS3 = async event => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "saveToS3",
//       },
//       null,
//       2
//     )
//   };
// };
