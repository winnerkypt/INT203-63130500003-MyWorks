import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../views/AboutUs.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue"
import NoteItem from "../views/NoteItem.vue"

const history = createWebHistory();
const routes = [
  {
    path: "/aboutus", // ชื่อพาร์ทปกติใช้ตัวเล็กหมด
    name: "About",
    component: AboutUs,
  },
  {
    path: "/", //เป็นหน้าโฮมแบบไม่ต้องการสร้างชื่อ
    name: "Home",
    component: Home,
  },
  {
      path: "/:catchNotMatchPath(.*)",
      name: "NotFound",
      component: NotFound,
  },
  {
      path: "/note-item/:noteId", //ส่ง param noteId ไปด้วย
      name: "NoteItem",
      component: NoteItem,
  }
];

const router = createRouter({ history, routes });
export default router;
