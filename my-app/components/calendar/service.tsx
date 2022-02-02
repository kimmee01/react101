export default function buildCalendar(value : any) : any {
    const startDate = value.clone().startOf("month").startOf("week");
    const endDate = value.clone().endOf("month").endOf("week");
    const day = startDate.clone().subtract(1 , "day");
    const calendar = []
    while (day.isBefore(endDate, "day")) {
        calendar.push(
            Array(7).fill(0)
            .map(() => day.add(1,"day").clone())
        )
    }
    return calendar
}


export const currMonthName = (value : any) => {
    return value.format("MMMM")
}

export const currYear = (value : any) => {
    return value.format("YYYY")
}

export const prevMonth = (value : any) => {
    return value.clone().subtract(1, "month")
}

export const nextMonth = (value : any) => {
    return value.clone().add(1, "month")
}