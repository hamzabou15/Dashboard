import { IoImage, IoImageOutline, IoLogOut, IoLogOutOutline, IoMegaphone, IoMegaphoneOutline } from "react-icons/io5";
import { PiExam, PiExamFill, PiStudentDuotone, PiStudentFill, PiUsersThree, PiUsersThreeFill } from "react-icons/pi";
import {  BsPersonCheck,  BsPersonFillCheck } from "react-icons/bs";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { HiMiniUserCircle } from "react-icons/hi2";
import {  TbSettingsFilled } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { PiBookBookmarkFill , PiCalendarCheckFill  , PiArrowSquareUpRightFill , PiUserCircle   ,PiCalendarCheck , PiBuildingOfficeFill , PiBuildingOffice ,PiArrowSquareUpRight  , PiFileTextFill , PiFiles , PiFilesFill , PiBookBookmark ,PiFileText   } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";


type MenuItem = {
  icon: string;
  iconOutlined: React.ComponentType;
  iconSolid: React.ComponentType;
  label: string;
  href: string;
  visible: string[];
};

export const menuItems: { title: string; items: MenuItem[] }[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        iconOutlined: IoImageOutline,
        iconSolid: IoImage,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "teachers",
        iconOutlined: PiStudentDuotone,
        iconSolid: PiStudentFill,
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "students",
        iconOutlined: PiUsersThree,
        iconSolid: PiUsersThreeFill,
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        iconOutlined: HiOutlineUsers,
        iconSolid: HiUsers,
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        iconOutlined: PiFileText,
        iconSolid: PiFileTextFill,
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        iconOutlined: PiBuildingOffice,
        iconSolid: PiBuildingOfficeFill,
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        iconOutlined: PiBookBookmark,
        iconSolid: PiBookBookmarkFill,
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        iconOutlined: PiFiles,
        iconSolid: PiFilesFill,
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        iconOutlined: PiArrowSquareUpRight,
        iconSolid: PiArrowSquareUpRightFill,
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        iconOutlined: PiExam,
        iconSolid: PiExamFill,
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        iconOutlined: BsPersonCheck,
        iconSolid: BsPersonFillCheck,
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        iconOutlined: PiCalendarCheck,
        iconSolid: PiCalendarCheckFill ,
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        iconOutlined: AiOutlineMessage,
        iconSolid: AiFillMessage,
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        iconOutlined: IoMegaphoneOutline,
        iconSolid: IoMegaphone,
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        iconOutlined: PiUserCircle,
        iconSolid: HiMiniUserCircle,
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        iconOutlined: IoSettingsOutline,
        iconSolid: TbSettingsFilled,
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        iconOutlined: IoLogOutOutline,
        iconSolid: IoLogOut,
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];