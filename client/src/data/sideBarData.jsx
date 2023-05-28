// icons
import { BiNews } from 'react-icons/bi';
import { MdOutlineAccountCircle, } from 'react-icons/md';
import { AiOutlineInbox } from 'react-icons/ai'
import { IoExit } from 'react-icons/io5';

// Define an object called sidebarData with an array of links
export const sidebarData =
{
    links: [
        [
            { txt: 'News', icon: <BiNews />, href:'/' ,classLink: null  },
            { txt: 'Store', icon: <AiOutlineInbox />, href:'/storage',classLink: null },
            { txt: 'Account', icon: <MdOutlineAccountCircle />, href:'/profile',classLink: null }
        ],
        [
            { txt: 'Log out', icon: <IoExit />, href:'/login' }
        ]
    ],
};
