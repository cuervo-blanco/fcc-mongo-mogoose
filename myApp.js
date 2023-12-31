require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

const personSchema = new Schema({
	name: { type: String, required: true },
	age:  Number,
	favoriteFoods:  [String]
});


let Person = mongoose.model('Person', personSchema);

let arrayOfPeople = [
	{name: "Feliberto", age: 45, favoriteFoods: ["Macarooni and Cheese", "Cornflakes and Milk", "Heroin"]},
	{name: "Humbert", age: 36, favoriteFoods: ["Humbertfood", "Humberdrinl", "Humbertpoop"]},
	{name: "Lupi", age: 54, favoriteFoods: ["Apples", "Humbertfood", "Bananas"]}
];

const createAndSavePerson = (done) => {
	var johnDoe = new Person({name: "John Doe", age: 25, favoriteFoods: ["Pizza", "Burgers"]});
	johnDoe.save(function(err, data) {
		if (err) return console.error(err);
		done(null, data);
	});
};

const createManyPeople = (arrayOfPeople, done) => {
	Person.create(arrayOfPeople, function(err, people) {
		if (err) return console.error(err);
		done(null, people);
	});
};

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, personFoodFound) {
    if (err) return console.log(err);
    done(null, personFoodFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, personIdFound) {
    if (err) return console.log(err);
    done(null, personIdFound);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenes, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
