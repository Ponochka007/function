const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Алиса",
            "id_3": "Катерина",
            "id_4": "Евгения",
            "id_5": "Ева",
            "id_6": "Оксана",
            "id_7": "Светлана",
            "id_8": "Ника",
            "id_9": "Диана",
            "id_10": "Зоя"
        }
    }`,
    occupationFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "агент по недвижимости",
            "id_2": "маркетолог",
            "id_3": "учительница",
            "id_4": "секретарь",
            "id_5": "пекарь",
            "id_6": "кондитер",
            "id_7": "товаровед",
            "id_8": "психолог",
            "id_9": "экономист",
            "id_10": "ассисент"
    }
    }`,
    occupationMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "директор",
            "id_2": "предприниматель",
            "id_3": "продюссер",
            "id_4": "строитель",
            "id_5": "инженер",
            "id_6": "автослесарь",
            "id_7": "механик",
            "id_8": "студент",
            "id_9": "пилот",
            "id_10": "менеджер по закупкам"
    }
    }`,

    birthMonth: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
    }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Валентинович",
            "id_2": "Александрович",
            "id_3": "Афанасьевич",
            "id_4": "Евгеньевич",
            "id_5": "Иванович",
            "id_6": "Дмитриевич",
            "id_7": "Павлович",
            "id_8": "Вениаминович",
            "id_9": "Геннадьевич",
            "id_10": "Олегович"
    }
    }`,
        patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Валентиновна",
            "id_2": "Александровна",
            "id_3": "Афанасьевична",
            "id_4": "Евгеньевна",
            "id_5": "Ивановна",
            "id_6": "Дмитриевна",
            "id_7": "Павловна",
            "id_8": "Вениаминовна",
            "id_9": "Геннадьевна",
            "id_10": "Олеговна"
    }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.firstNameMaleJson);
		}
		return this.randomValue(this.firstNameFemaleJson);

	},

	randomSurname() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.surnameJson);
		}
		return this.randomValue(this.surnameJson) + 'a';

	},

	randomPatronymic() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.patronymicMaleJson);
		}
		return this.randomValue(this.patronymicFemaleJson);

	},

	randomGender() {

		return (this.randomIntNumber(1, 0) === 0) ? this.GENDER_MALE : this.GENDER_FEMALE;

	},

    randomOccupation() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.occupationMaleJson);
		}
		return this.randomValue(this.occupationFemaleJson);

	},
    randomBirth() {

		return this.randomIntNumber(2020, 1948);

	},

	randomBirthMonth() {

		return this.randomValue(this.birthMonth);

	},

    randomBirthDay() {

		if (this.person.birthMonth === "апреля" || this.person.birthMonth === "июня" || this.person.birthMonth === "сентября" || this.person.birthMonth === "ноября") {
			return this.randomIntNumber(1, 30);
		} else if (this.person.birthMonth === "февраля") {
			return this.randomIntNumber(1, 28);
		} else {
			return this.randomIntNumber(1, 31);
		}

	},

	getPerson() {
		this.person = {};
		this.person.gender = this.randomGender();
		this.person.firstName = this.randomFirstName();
		this.person.surname = this.randomSurname();
		this.person.patronymic = this.randomPatronymic();
		this.person.occupation = this.randomOccupation();
		this.person.birth = this.randomBirth();
		this.person.birthMonth = this.randomBirthMonth();
		this.person.birthDay = this.randomBirthDay();
		return this.person;
	}
};