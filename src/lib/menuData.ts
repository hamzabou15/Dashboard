import { IoImage, IoImageOutline, IoLogOut, IoLogOutOutline, IoMegaphone, IoMegaphoneOutline } from "react-icons/io5";
import { PiExam, PiExamFill, PiFilesFill, PiFilesLight, PiStudentDuotone, PiStudentFill, PiUsersThree, PiUsersThreeFill } from "react-icons/pi";
import { RiBookFill, RiBookLine, RiParentFill, RiParentLine } from "react-icons/ri";
import { BsCalendar2Check, BsCalendar2CheckFill, BsFileEarmarkText, BsFileEarmarkTextFill, BsPersonCheck, BsPersonCheckFill, BsPersonFillCheck } from "react-icons/bs";
import { LuSchool2 } from "react-icons/lu";
import { MdAssignmentReturned, MdOutlineAssignmentReturned  } from "react-icons/md";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TbSettings, TbSettingsFilled } from "react-icons/tb";
import { FaSchool } from "react-icons/fa6";

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
        label: "Teachers",
        iconOutlined: PiStudentDuotone,
        iconSolid: PiStudentFill,
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        iconOutlined: PiUsersThree,
        iconSolid: PiUsersThreeFill,
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        iconOutlined: RiParentLine,
        iconSolid: RiParentFill,
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        iconOutlined: BsFileEarmarkText,
        iconSolid: BsFileEarmarkTextFill,
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        iconOutlined: LuSchool2,
        iconSolid: FaSchool,
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        iconOutlined: RiBookLine,
        iconSolid: RiBookFill,
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        iconOutlined: PiFilesLight,
        iconSolid: PiFilesFill,
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        iconOutlined: MdOutlineAssignmentReturned,
        iconSolid: MdAssignmentReturned,
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
        iconOutlined: BsCalendar2Check,
        iconSolid: BsCalendar2CheckFill,
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
        iconOutlined: HiOutlineUserCircle,
        iconSolid: HiMiniUserCircle,
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        iconOutlined: TbSettings,
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