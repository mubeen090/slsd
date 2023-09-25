jsx
import styles from "./PopularCoursesSection.module.css";
import Heading from "../common/Heading/Heading";
import CourseCard from "../common/CourseCard/CourseCard";
import Link from "next/link";

const PopularCoursesSection = () => {
  return (
    <>
      <div className={styles.pop_course_section} id="courses">
        <Heading
          para1={"Explore Programs"}
          heading={"Our Most Popular Class"}
          para2={
            "Let's join our famous class, the knowledge provided will definitely be useful for you."
          }
        />
        <div className={styles.pop_course_container}>
          <CourseCard slug={"cyber-security"} />
          <CourseCard slug={"aws"} />
          <CourseCard slug={"web-development"} />
          <CourseCard slug={"orecle"} />
          <CourseCard slug={"sap"} />
          <CourseCard slug={"tally"} />
          <CourseCard slug={"auto-cad"} />
          <CourseCard slug={"catia"} />
          <CourseCard slug={"digital-marketing"} />
          <CourseCard slug={"iot"} />
          <CourseCard slug={"robotics"} />
          <CourseCard slug={"power-bi"} />
          <CourseCard slug={"api-testing"} />
          <CourseCard slug={"devopes"} />
          <CourseCard slug={"java"} />
          <CourseCard slug={"python"} />
          <CourseCard slug={"devops"} />
        </div>
        <div className={styles.btn_container}>
          <Link href="/explore">
            <button className={styles.btn}>Explore All Courses</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularCoursesSection;
