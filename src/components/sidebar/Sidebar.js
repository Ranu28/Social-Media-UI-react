import React from 'react'
import './sidebar.css'
import { Bookmark, CalendarToday, Chat, GolfCourse, Group, Headphones, QuestionAnswer, QueueMusicTwoTone, RssFeed, SyncProblem, Videocam } from '@mui/icons-material'
import SidebarFriendList from './SidebarFriendList';
import { Users } from '../../dummyData';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItems">
                        <RssFeed className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <Chat className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Chat
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <Videocam className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Video
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <Group className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <Bookmark className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <QueueMusicTwoTone className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Questions
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <Headphones className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <CalendarToday className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>
                    <li className="sidebarListItems">
                        <GolfCourse className="sidebarListIcon" />
                        <span className="sidebarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>

                <button className="sidebarButton">
                    Show More
                </button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((user)=>(
                        <SidebarFriendList key={user.id} users ={user} />
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}
