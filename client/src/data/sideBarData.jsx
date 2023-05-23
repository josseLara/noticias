// icons
import { BiNews } from 'react-icons/bi';
import { MdOutlineAccountCircle, } from 'react-icons/md';
import { AiOutlineInbox } from 'react-icons/ai'
import { IoExit } from 'react-icons/io5';

export const sidebarData =
{
    links: [
        [
            { txt: 'News', icon: <BiNews />, classLink: 'active' },
            { txt: 'Store', icon: <AiOutlineInbox /> },
            { txt: 'Account', icon: <MdOutlineAccountCircle /> }
        ],
        [
            { txt: 'Log out', icon: <IoExit /> }
        ]
    ],
    user: {
        img: "https://cdn.dribbble.com/userupload/5279196/file/original-e7ac5ca215cbd2df38d4165020026124.png?compress=1&resize=1504x1665&vertical=center",
        name: "Alfaro"
    }
};
