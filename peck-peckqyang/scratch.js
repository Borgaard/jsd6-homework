var dateFormat = require('dateformat');
    var nowDate = new Date();


    // Get the number of days between two times
    function getDateDiffDays(time1, time2) {
        var diffDays = Math.round((time2 - time1)/(1000 * 60 * 60 * 24));

        return (diffDays);
    }


    var endDateString = class_dates[class_dates.length - 1];
        var endDateInArray = endDateString.split('/');
        var endDate = new Date(endDateInArray[2], endDateInArray[0]-1, endDateInArray[1]);

    console.log(getDateDiffDays(nowDate, endDate));