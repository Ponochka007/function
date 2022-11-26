window.onload = function () {
	const initPerson = personGenerator.getPerson();
	document.getElementById('firstNameOutput').innerText = initPerson.firstName;
	document.getElementById('surnameOutput').innerText = initPerson.surname;
	document.getElementById('genderOutput').innerText = initPerson.gender;
	document.getElementById('birthYearOutput').innerText = initPerson.birth;
	document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
	document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
	document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
	document.getElementById('occupationOutput').innerText = initPerson.occupation;
	
};

document.querySelector('#once-again').addEventListener('click', function () {
	window.onload();
});

document.querySelector('#rand').addEventListener('click', function () {
	document.getElementById('firstNameOutput').innerText = "Имя: ";
	document.getElementById('surnameOutput').innerText = "Фамилия: ";
	document.getElementById('genderOutput').innerText = "Пол: ";
	document.getElementById('birthYearOutput').innerText = " ";
	document.getElementById('birthMonthOutput').innerText = " ";
	document.getElementById('birthDayOutput').innerText = " ";
	document.getElementById('patronymicOutput').innerText = "Отчество: ";
	document.getElementById('occupationOutput').innerText = " ";
});