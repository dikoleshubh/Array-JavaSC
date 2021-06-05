console.log("Welcome to Employee Wage Problem \n")

//UC1 Ability to check Employees is present or absent.

console.log("UC1 Checking employee is present or absent ");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%3;
{
    if(empCheck == IS_ABSENT)
    {
        console.log("Employee is absent");
    }
    else 
    {
        console.log("Employee is present");
    }
}

//UC2 Ability to Calculate  Daily Employee Wage based on part time or full time work.
{
console.log("UC2 Calculating wage for employee");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHours = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case IS_PART_TIME:
    console.log("Employee is working part time");
    empHours=PART_TIME_HOURS;
    break;
    case IS_FULL_TIME:
    console.log("Employee is working full time");
    empHours = FULL_TIME_HOURS;
    break;
    default:
    empHours =0;
    break;
}
let empWage = empHours*WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);
}
//UC3 Refactor the UC2 Code to write a function to get work hours.
  console.log("UC3 Refactor the Code to write a function to get work hours");
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS =4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;
  function getWorkingHrs(empCheck)
  {
      switch (empCheck) 
      {
          case IS_PART_TIME:
              return PART_TIME_HOURS;          
          case IS_FULL_TIME:
              return FULL_TIME_HOURS;
          default:       
              return 0;
      }
  }
  
  let empWage = WAGE_PER_HOUR*getWorkingHrs(empCheck);
  console.log("Employee wage: " + empWage);

  //UC4 Calculating total emp wage for a month assuming 20 working day in a month.
  console.log("UC4 Calculating total emp wage for a month assuming 20 working day in a month")
  const NUM_OF_WORKING_DAYS =20;
  let empHours=0;
  for(let day =0; day<NUM_OF_WORKING_DAYS; day++)
  {
        let empCheck = Math.floor(Math.random()*10)%3;
        empHours += getWorkingHrs(empCheck);
  }
  empWage = WAGE_PER_HOUR*empHours;
  console.log("Total working hours in mmonth: "+empHours+"\nTotal monthly employee wage : " + empWage);

  //UC5 Calculating Wages til a condition of total working hours of 160 or max days of 20 is reached for a month.
  console.log("UC5 Calculating monthly wage given condition")
  const MAX_HOURS_IN_MONTHS=160;
  const MAX_NUMBER_OF_DAYS=20;
  let totalEmpHours=0;
  let totalWorkingDays=0;
  let empDailyWageArray = new Array();
  let empDailyWageMap = new Map();
  let empDailyHourMap = new Map();
  while(totalEmpHours<MAX_HOURS_IN_MONTHS && totalWorkingDays<MAX_NUMBER_OF_DAYS)
  {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random()*10)%3;
      empHours = getWorkingHrs(empCheck);
      if(empHours!=0 && totalEmpHours==156)
      {
          empHours=PART_TIME_HOURS;
      }
      totalEmpHours += empHours;
      //UC 6 refactor
      empDailyWageArray.push(empHours*WAGE_PER_HOUR);
      //UC 8 refactor
      empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHours));
       //UC 9 refactor
      empDailyHourMap.set(totalWorkingDays,empHours);
  }
  let totalEmpWage = WAGE_PER_HOUR*totalEmpHours;
  console.log("Total working days  : "+totalWorkingDays+"\nTotal working hours : "+totalEmpHours+" \nTotal employee wage : " + totalEmpWage);
//UC 6 Store the daily wage along with the total wage
for(let i=0;i<empDailyWageArray.length;i++)
{
    console.log("Emp wage for day: "+(i+1)+" is: "+empDailyWageArray[i]);
}
function calculateDailyWage(empHours)
{
    return empHours*WAGE_PER_HOUR;
}
//UC7A Calculate total wage using array methods
totalEmpWage=0;
function sum(dailyWage)
{
    totalEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC 7A\nTotal emp wage using Foreach: "+totalEmpWage);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Total emp wage using reduce(): "+empDailyWageArray.reduce(totalWages,0));

//UC7B Show the Day along with Daily Wage using Array map helper function
let dailyCounter=0;
function mapDayWithWage(dailyWage)
{
    dailyCounter++;
    return dailyCounter+" = "+dailyWage;
}
console.log("UC 7B\nDaily wage map:\n");
let mapDayWithWageArr=empDailyWageArray.map(mapDayWithWage);
console.log(mapDayWithWageArr);

//UC7C Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7C\nDaily wage filter when full time wage earned:");
let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log(fullDayWageArr);

//UC7D Find the first occurrence when Full Time Wage was earned using find function
console.log("UC 7D\nFirst time full time wage was earned on Day:")
console.log(mapDayWithWageArr.find(fullTimeWage));

//UC7E : Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes('160');
}
console.log("UC 7E\nCheck all elements have full time wage: "+fullDayWageArr.every(isAllFullTimeWage))

//UC7F Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes('80');
}
console.log("UC 7F\nCheck if any part time wage is present: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage>0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G\nNumber of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));

//UC8 Store the Day and the Daily Wage along with the Total Wage using map.
console.log("UC 8\nContents of the map:")
console.log(empDailyWageMap);
console.log("Total wage using emp wage map: "+Array.from(empDailyWageMap.values()).reduce(totalWages));

// UC9 Using the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions:
// 9.a. Calculating total Wage and total hours worked.
console.log("UC9.a Calculating total Wage and total hours worked.");
totalWage = empDailyWageArray.filter(empWage=>empWage>0).reduce(totalWages,0);
function calculateTotalHrs(totalHr,dailyHr)
{
    return totalHr+dailyHr;
}
totalHr = Array.from(empDailyHourMap.values()).reduce(calculateTotalHrs,0);
console.log("Using arrow functions,Total wage: "+totalWage+",Total hours: "+totalHr);

//9.b Show the full workings days, part working days and no working days.
console.log("UC9.b Show the full workings days, part working days and no working days");
let fullWorkingDaysArr=new Array();
let halfWorkingDaysArr=new Array();
let nonWorkingDaysArr=new Array();
empDailyHourMap.forEach((value,key,map)=>{
    if(value==8)
    fullWorkingDaysArr.push(key);
    else if(value==4)
    halfWorkingDaysArr.push(key);
    else
    nonWorkingDaysArr.push(key);
})
console.log("Full working days: "+fullWorkingDaysArr);
console.log("Half working days: "+halfWorkingDaysArr);
console.log("Non working days: "+nonWorkingDaysArr);