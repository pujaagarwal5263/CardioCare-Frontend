import {useState, useEffect} from "react"
import {Sidebar , Menu, MenuItem} from "react-pro-sidebar";
import {Box, IconButton, Typography, useTheme} from '@mui/material'
import { Text, Flex, Button } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Inbox from './Inbox'; // Import content components for each section
import Sent from './Sent';
import Social from './Social';
import Spam from './Spam';
import Promotion from './Promotion';
import AllMail from './AllMail';
import ComposeMail from './ComposeMail';

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ClearIcon from '@mui/icons-material/Clear';
import MailIcon from '@mui/icons-material/Mail';


const SidebarFunc = ({emails})=>{
    const [isCollapsed,setIsCollapsed] = useState(true);
    const [activeSection, setActiveSection] = useState('Inbox');

    const sections = [
      { id: 'Inbox', label: 'Inbox' , icon:<InboxOutlinedIcon />},
      { id: 'Sent', label: 'Sent' , icon:<SendOutlinedIcon /> },
      { id: 'Social', label: 'Social' , icon:<FacebookIcon /> },
      { id: 'Spam', label: 'Spam' , icon:<ReportOutlinedIcon /> },
      { id: 'Promotion', label: 'Promotion' , icon:<StarOutlineOutlinedIcon /> },
      { id: 'All', label: 'All' , icon:<MailIcon /> },
      { id: 'Compose', label: 'Compose' , icon:<CreateOutlinedIcon /> },
    ];
  
    const handleSectionClick = (sectionId) => {
      setActiveSection(sectionId);
    };
  
    // Define content components for each section
    const sectionComponents = {
      Inbox: <Inbox />,
      Sent: <Sent />,
      Social: <Social />,
      Spam: <Spam />,
      Promotion: <Promotion />,
      All: <AllMail />,
      Compose: <ComposeMail/>
    };

    useEffect(()=>{
      console.log('emails are here')
      console.log(emails);
    },[])

    return(
      <>
        <Flex direction="row">
          <Box>
            <Sidebar collapsed={isCollapsed}>
              <Menu iconShape="square">
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                    margin: "10px 0 20px 0",
                    color: "grey",
                    }}
                >
                  <Box>
                      <Flex justifyContent="space-between">
                        <Text fontWeight="bold" fontSize="xl">
                          {activeSection}
                        </Text>
                         <ClearIcon />
                      </Flex>
                  </Box>
                </MenuItem>

                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    mb={4}
                    textDecoration={activeSection === section.id ? 'underline' : 'none'}
                    cursor="pointer"
                  >
                    <MenuItem
                        active={activeSection === section.id}
                        style={{
                        color: "grey"
                        }}
                        icon={section.icon}
                    >
                      {section.id}
                    </MenuItem>
                  </Link>
                ))}
                </Box>
              </Menu>
            </Sidebar>
          </Box>
          <Flex flex="1" direction="column">
            {sectionComponents[activeSection]}
          </Flex>
        </Flex>
      </>
    )
}

export default SidebarFunc;