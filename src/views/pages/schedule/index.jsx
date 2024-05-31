import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "rsuite/dist/rsuite.css";

import { Calendar, Whisper, Popover, Badge } from 'rsuite';

function getTodoList(date) {
    const day = date.getDate();

    switch (day) {
        case 1:
        case 2:
        case 5:
        case 8:
        case 10:
            return [
                { time: '10:30 am', title: 'Học tiếng nhật' },
                { time: '12:00 pm', title: 'Báo cáo UIUX' },
                { time: '15:00 pm', title: 'Khóa học React' }
            ];
        case 12:
        case 15:
        case 16:
        case 20:
        case 23:
        case 26:
        case 27:
        case 30:
            return [
                { time: '09:30 pm', title: 'Học tiếng nhật' },
                { time: '12:30 pm', title: 'Khóa học React' },
                { time: '02:00 pm', title: 'Báo cáo ITSS' },
                { time: '05:00 pm', title: 'Chạy bộ' },
            ];
        default:
            return [];
    }
}

const Schedule = () => {
    function renderCell(date) {
        const list = getTodoList(date);
        const displayList = list.filter((item, index) => index < 2);

        if (list.length) {
            const moreCount = list.length - displayList.length;
            const moreItem = (
                <li>
                    <Whisper
                        placement="top"
                        trigger="click"
                        speaker={
                            <Popover>
                                {list.map((item, index) => (
                                    <p key={index}>
                                        <b>{item.time}</b> - {item.title}
                                    </p>
                                ))}
                            </Popover>
                        }
                    >
                        <a>{moreCount} more</a>
                    </Whisper>
                </li>
            );

            return (
                <ul className="calendar-todo-list">
                    {displayList.map((item, index) => (
                        <li key={index}>
                            <Badge /> <b>{item.time}</b> - {item.title}
                        </li>
                    ))}
                    {moreCount ? moreItem : null}
                </ul>
            );
        }

        return null;
    }

    return (
        <div className='schedule-container'>
            <div className='schedule-title'>
                Lịch
            </div>
            <div className='schedule-content'>
                <div className='schedule-calender'>
                    <div className="custom-calendar">
                        <Calendar bordered renderCell={renderCell} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Schedule;