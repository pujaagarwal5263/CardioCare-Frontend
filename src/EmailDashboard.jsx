import React from "react";
// import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import axios from "axios";

import { Text, Flex, Button, Box ,  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter, useDisclosure} from "@chakra-ui/react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import MailIcon from "@mui/icons-material/Mail";

const Email = ({ emails }) => {
  const [AllMails, setAllMails] = useState({
    "Category Promotions": [],
    "Category Social": [],
    "Category Updates": [],
    "Sent Mail": [],
    Inbox: [],
    Trash: [],
    "All Mail": [],
    Spam: [],
    "Category Personal": [],
    Important: [],
  });

  const [InboxMail, setInboxMail] = useState([]);
  const [AllMail, setAll] = useState([]);
  const [CategoryPromotions, setCategoryPromotions] = useState([]);
  const [CategorySocial, setCategorySocial] = useState([]);
  const [CategoryUpdates, setCategoryUpdates] = useState([]);
  const [SentMail, setSentMail] = useState([]);
  const [Trash, setTrash] = useState([]);
  const [Spam, setSpam] = useState([]);
  const [CategoryPersonal, setCategoryPersonal] = useState([]);
  const [Important, setImportant] = useState([]);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("Inbox");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [sectionComponents, setSectionComponents] = useState({
    Inbox: [],
    Sent: [],
    Social: [],
    Spam: [],
    Promotion: [],
    All: [],
  });
  const [selectedEmail, setSelectedEmail] = useState(null);

  const [loading, setIsLoading] = useState(true);
  const SERVER_URI = "http://localhost:8000";

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    onOpen();
  };

  const userId = sessionStorage.getItem("userId");
  const userEmail = sessionStorage.getItem("userEmail");

  const getEmails = async () => {
    setIsLoading(true);
    try {
      const url = SERVER_URI + "/read_email";
      const response = await axios.post(
        url,
        { email: userEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      setAllMails(data);
      setInboxMail(data["Inbox"]);
      setAll(data["All Mail"]);
      setCategoryPromotions(data["Category Promotions"]);
      setCategorySocial(data["Category Social"]);
      setCategoryUpdates(data["Category Updates"]);
      setSentMail(data["Sent Mail"]);
      setTrash(data["Trash"]);
      setSpam(data["Spam"]);
      setCategoryPersonal(data["Category Personal"]);
      setImportant(data["Important"]);
    } catch (e) {
      console.warn(`Error retrieving emails:`, e);
      return false;
    }
  };

  useEffect(() => {
    setAllMails({
      "Category Promotions": CategoryPromotions,
      "Category Social": CategorySocial,
      "Category Updates": CategoryUpdates,
      "Sent Mail": SentMail,
      Inbox: InboxMail,
      Trash: Trash,
      "All Mail": AllMail,
      Spam: Spam,
      "Category Personal": CategoryPersonal,
      Important: Important,
    });
    setIsLoading(false);
  }, [AllMail, InboxMail]);

  useEffect(() => {
    getEmails();
  }, []);

  useEffect(() => {
    console.log("final all mails are herre");
    console.log(AllMails);
    // setIsLoading(false);
    setSectionComponents({
      Inbox: InboxMail,
      Sent: SentMail,
      Social: CategorySocial,
      Spam: Spam,
      Promotion: CategoryPromotions,
      All: AllMail,
    });
  }, [AllMails]);


  const sections = [
    { id: "Inbox", label: "Inbox", icon: <InboxOutlinedIcon /> },
    { id: "Sent", label: "Sent", icon: <SendOutlinedIcon /> },
    { id: "Social", label: "Social", icon: <FacebookIcon /> },
    { id: "Spam", label: "Spam", icon: <ReportOutlinedIcon /> },
    { id: "Promotion", label: "Promotion", icon: <StarOutlineOutlinedIcon /> },
    { id: "All", label: "All", icon: <MailIcon /> },
  ];

  const handleSectionClick = (sectionId) => {
    setSelectedEmail(null);
    setActiveSection(sectionId);
  };

  return (
    <>
      {loading ? (
        <h1>It's loading time, please wait</h1>
      ) : (
        <Flex direction="row"
          bg="linear-gradient(to left, #ff0606d9, #8c52ff)"
          minHeight="100vh"
        >
          <Box minHeight="100vh">
            <Sidebar collapsed={isCollapsed} h="100vh" bg="linear-gradient(to left, #ff0606d9, #8c52ff)" >
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
                      textDecoration={
                        activeSection === section.id ? "underline" : "none"
                      }
                      cursor="pointer"
                    >
                      <MenuItem
                        active={activeSection === section.id}
                        style={{
                          color: "grey",
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
          <Flex flex="1" direction="column" minHeight="100vh">
            <Box
              className="email-list"
              borderWidth="1px"
              borderColor="gray.200"
              p="4"
              borderRadius="md"
            >
              <Text as="h2" fontSize="xl" mb="4" color="white">
                {activeSection}
              </Text>
              {
                sectionComponents[activeSection].length>0? 

                  sectionComponents[activeSection].map((email) => (
                    <Box
                      key={email.id}
                      className={`email-item ${
                        selectedEmail === email ? "selected" : ""
                      }`}
                      onClick={() => handleEmailClick(email)}
                      style={{ cursor: "pointer" }}
                      borderBottomWidth="1px"
                      borderColor="gray.200"
                      py="2"
                      display="flex" 
                      justifyContent="space-between" 
                    >
                      <Box
                        flex="100%" 
                        borderWidth="1px" 
                        borderColor="gray.200"
                        fontWeight="600"
                        p="2"
                      >
                        <Text className="email-subject" color="white">{email.subject}</Text>
                        <Text className="email-date" color="gray.600">
                          {email.snippet}
                        </Text>
                      </Box>
                    </Box>
                  ))

                : 

                <h2>No Mail Available to Show For this Category</h2>
              }

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    {/* <ModalHeader>Schedule Appointment</ModalHeader> */}
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                      {selectedEmail && (
                        <Box
                          className="email-content"
                          borderWidth="1px"
                          borderColor="gray.200"
                          p="4"
                          mt="4"
                          borderRadius="md"
                        >
                          <Text as="h3" fontSize="xl" mb="2">
                            <b>Subject: </b>
                            {selectedEmail.subject}
                          </Text>
                          <Text mt="4">
                            <b>
                              Body:<br></br>
                            </b>
                            {selectedEmail.snippet}
                          </Text>
                        </Box>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Email;
