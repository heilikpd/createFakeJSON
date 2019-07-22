const faker = require("faker");
const fs = require("fs");
const generateCards = numberOfCards => {
  let arr = [];
  let numrOfCards = numberOfCards;
  let moduleStatusName = [
    "In progress",
    "Submitted",
    "High priority",
    "Ready to release",
    "Done"
  ];
  let keyName = [
    "in_progress",
    "submitted",
    "high_priority",
    "ready_to_release",
    "done"
  ];
  for (let i = 0; i < numrOfCards; i++) {
    //number of course cards
    let guid = faker.random.uuid();
    let courseTitle = faker.finance.accountName();
    let numberOfModules = Math.floor(Math.random() * (10 - 3) + 3);
    let modules = [];
    for (let j = 0; j < numberOfModules; j++) {
      let moduleGUID = faker.random.uuid();
      let key = Math.floor(Math.random() * (5 - 0) + 0);
      let moduleTitle = faker.finance.currencyName();
      modules.push({
        guid: moduleGUID,
        title: moduleTitle,
        status: {
          key: keyName[key],
          title: moduleStatusName[key]
        }
      });
    }
    arr.push({
      guid: guid,
      title: courseTitle,
      modules: modules
    });
  }
  return arr;
};


//call function(number of cards in JSON file)
let cardsData = generateCards(100);
//create file and write data to them
fs.writeFile("cardsData.json", JSON.stringify(cardsData, null, "\t"), err => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
