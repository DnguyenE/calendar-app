import "./Calendar.css";

import {
    Inject,
    ScheduleComponent,
    Day,
    Week,
    Month,
    ViewsDirective, ViewDirective, TimelineViews, DragAndDrop, TimelineMonth
} from "@syncfusion/ej2-react-schedule";

const data = [
    {
        Id:1,
        Subject: "Testing",
        StartTime: new Date(2024, 3, 30, 8, 30),
        EndTime: new Date(2024, 3, 30, 9, 30),
        IsAllDay: false,
    },
    {
        Id: 2,
        Subject: "Testing2",
        StartTime: new Date(2024, 4, 2, 8, 30),
        EndTime: new Date(2024, 4, 2, 9, 30),
        IsAllDay: false,
    }
]

const eventSettings = {dataSource: data,};

function Calendar() {

    return(
        <ScheduleComponent
            currentView={"Month"}
            selectedDate={new Date(2024, 3, 30)}
            eventSettings={eventSettings}
        >
            <ViewsDirective>
                <ViewDirective option={"TimelineViews"} startHour={"09:00"} endHour={"18:00"}/>
                <ViewDirective option={"Day"} startHour={"09:00"} endHour={"18:00"} />
                <ViewDirective option={"Week"} startHour={"09:00"} endHour={"18:00"} showWeekNumber={true}/>
                <ViewDirective option={"Month"} />
            </ViewsDirective>

            <Inject services={[Day, Month, Week, DragAndDrop, TimelineViews]} />
        </ScheduleComponent>
    );
}

export default Calendar;