import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
 
export const NavData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "Uus postitus",
        link: "newpost"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: "Vestlused",
        link: "chatroom"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: "Posts",
        link: "post"
    }
]