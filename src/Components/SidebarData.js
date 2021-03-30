import React from "react";
import { RiHome8Line } from "react-icons/ri";
import { VscSearchStop } from "react-icons/vsc";
import { GiTicTacToe, GiBeehive } from "react-icons/gi";
import { FcTodoList } from "react-icons/fc";
import { CgEditUnmask } from "react-icons/cg";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <RiHome8Line />,
    class: 'nav-text'
  },
  {
    title: 'Todo',
    path: '/todo',
    icon: <FcTodoList />,
    class: 'nav-text'
  },
  {
    title: 'SnapSearch',
    path: '/snap-search',
    icon: <VscSearchStop />,
    class: 'nav-text'
  },
  {
    title: 'TicTacToe',
    path: '/tic-tac-toe',
    icon: <GiTicTacToe />,
    class: 'nav-text'
  },
  {
    title: 'QuizBee',
    path: '/quiz-bee',
    icon: <GiBeehive />,
    class: 'nav-text'
  },
  {
    title: 'Facial Recognition',
    path: 'face-recognition',
    icon: <CgEditUnmask />,
    class: 'nav-text'
  }
]