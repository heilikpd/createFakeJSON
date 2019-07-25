const faker = require("faker");
const fs = require("fs");
const generateCards = ({
  numberOfCourses,
  minModulesInCourse,
  maxModulesInCourse
}) => {
  const MinModulesInCourse = minModulesInCourse;
  const MaxModulesInCourse = maxModulesInCourse;
  let resultData = [];
  const numOfCourses = numberOfCourses;
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
  /* ------------------------- */
  for (key in moduleKeyName) {
    let courses = [];
    for (let i = 0; i < numOfCourses; i++) {
      //number of course cards
      let guidOfCourse = faker.random.uuid();
      let courseTitle = faker.finance.accountName();
      let numberOfModules = faker.random.number({
        min: MinModulesInCourse,
        max: MaxModulesInCourse
      });
      let modules = [];
      courses.push({
        guid: guidOfCourse,
        title: courseTitle,
        modules: modules
      });
      for (let j = 0; j < numberOfModules; j++) {
        let moduleGUID = faker.random.uuid();
        let moduleTitle = faker.finance.currencyName();
        ~modules.push({
          guid: moduleGUID,
          title: moduleTitle
        });
      }
    }
    resultData.push({
      title: moduleStatusName[key],
      key: moduleKeyName[key],
      courses: courses
    });
  }

  return resultData;
};

//call function(number of cards in JSON file)
const cardsData = {
  stages: generateCards({
    numberOfCourses: 10,
    minModulesInCourse: 3,
    maxModulesInCourse: 10
  })
};
//create file and write data to them
fs.writeFile(
  "cardsDataSortedByStages.json",
  JSON.stringify(cardsData, null, "\t"),
  err => {
    if (err) console.warn(err);
    console.log("Successfully written your fake JSON file :)");
  }
);
