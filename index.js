const getJulianDate = (date = new Date()) => {
 	const time = date.getTime();
 	const tzoffset = date.getTimezoneOffset()
  	return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
}

const LUNAR_MONTH = 29.530588853;

const getLunarAge = (date = new Date()) => {
	const percent = getLunarAgePercent(date);
	const age = percent * LUNAR_MONTH;
  console.log(age);
	return age;
}

const getLunarAgePercent = (date = new Date()) => {
	return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
}

const normalize = value => {
	value = value - Math.floor(value);
	if (value < 0)
	value = value + 1
	return value;
}

const getCardNumber = (date = new Date()) => {
  const age = getLunarAge(date);
  if (age < 1.01829615621)
    return "1";
  else if (age < 2.03659231242)
    return "2";
  else if (age < 3.05488846863)
    return "3";
  else if (age < 4.07318462484)
    return "4";
  else if (age < 5.09148078105)
    return "5";
  else if (age < 6.10977693726)
    return "6";
  else if (age < 7.12807309347)
    return "7";
  else if (age < 8.14636924968)
    return "8";
  else if (age < 9.16466540589)
    return "9";
  else if (age < 10.1829615621)
    return "10";
  else if (age < 11.20125771831)
    return "11";
  else if (age < 12.21955387452)
    return "12";
  else if (age < 13.23785003073)
    return "13";
  else if (age < 14.25614618694)
    return "14";
  else if (age < 15.27444234315)
    return "15";
  else if (age < 16.29273849936)
    return "16";
  else if (age < 17.31103465557)
    return "17";
  else if (age < 18.32933081178)
    return "18";
  else if (age < 19.34762696799)
    return "19";
  else if (age < 20.3659231242)
    return "20";
  else if (age < 21.38421928041)
    return "21";
  else if (age < 22.40251543662)
    return "22";
  else if (age < 23.42081159283)
    return "23";
  else if (age < 24.43910774904)
    return "24";
  else if (age < 25.45740390525)
    return "25";
  else if (age < 26.47570006146)
    return "26";
  else if (age < 27.49399621767)
    return "27";
  else if (age < 28.51229237388)
    return "28";
  else 
    return "29";
}