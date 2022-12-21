
export default function selectSpecialEventYears() {
    const today = new Date();

    const christmasDayYears = [];
    if(today.getMonth() == 11){
        christmasDayYears.push(today.getFullYear())
    }else{
        christmasDayYears.push(today.getFullYear()-1)
    }

    const newYearsDayYears = [];
    if(today.getMonth() == 11){
        newYearsDayYears.push(today.getFullYear()+1)
    }else{
        newYearsDayYears.push(today.getFullYear())
    }

    return {
        christmasDayYears,
        newYearsDayYears
    }
  };