// code your solution here



function superbowlWin(record) {

    let filteredRecord = record.find((item) => item.result === 'W');

    if (filteredRecord) {
        return filteredRecord.year;
    }
    else {
        return undefined;
    }

}



