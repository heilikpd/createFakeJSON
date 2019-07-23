const faker = require("faker");
const fs = require("fs");
const generateCards = numberOfCards => {
  let resultData = [];
  let numOfCards = numberOfCards;
  let moduleStatusName = [
    "In progress",
    "Submitted",
    "High priority",
    "Ready to release",
    "Done"
  ];
  let moduleKeyName = [
    "in_progress",
    "submitted",
    "high_priority",
    "ready_to_release",
    "done"
  ];
  /* --------------------------------- */
  for (let i = 0; i < numOfCards; i++) {
    //number of course cards
    let guidOfCourse = faker.random.uuid();
    let courseTitle = faker.finance.accountName();
    let numberOfModules = faker.random.number({ min: 3, max: 10 });
    let modules = [];
    for (let j = 0; j < numberOfModules; j++) {
      let moduleGUID = faker.random.uuid();
      let statusKey = faker.random.number({ min: 0, max: 5 });
      let moduleTitle = faker.finance.currencyName();
      modules.push({
        guid: moduleGUID,
        title: moduleTitle,
        status: {
          key: moduleKeyName[statusKey],
          title: moduleStatusName[statusKey]
        }
      });
    }
    resultData.push({
      guid: guidOfCourse,
      title: courseTitle,
      modules: modules
    });
  }
  /* --------------------------------- */
  return resultData;
};

//call function(number of cards in JSON file)
let cardsData = generateCards(100);
//create file and write data to them
fs.writeFile("cardsData.json", JSON.stringify(cardsData, null, "\t"), err => {
  if (err) console.warn(err);
  console.log("Successfully written your fake JSON file :)");
});
