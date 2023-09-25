import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";

// Import course card images from the public/assets/courseCard folder
import ai from "../../../../public/assets/courseCard/ai.png";
import ml from "../../../../public/assets/courseCard/ml.png";
import dataScience from "../../../../public/assets/courseCard/dataScience.png";
import cyberSecurity from "../../../../public/assets/courseCard/cyberSecurity.png";
import aws from "../../../../public/assets/courseCard/aws.png";
import webDevelopment from "../../../../public/assets/courseCard/webDevelopment.png";
import orecle from "../../../../public/assets/courseCard/orecle.png";
import sap from "../../../../public/assets/courseCard/sap.png";
import tally from "../../../../public/assets/courseCard/tally.png";
import autoCad from "../../../../public/assets/courseCard/autoCad.png";
import catia from "../../../../public/assets/courseCard/catia.png";
import digitalMarketing from "../../../../public/assets/courseCard/digitalMarketing.png";
import iot from "../../../../public/assets/courseCard/iot.png";
import robotics from "../../../../public/assets/courseCard/robotics.png";
import powerBi from "../../../../public/assets/courseCard/powerBi.png";
import apiTesting from "../../../../public/assets/courseCard/apiTesting.png";
import devopes from "../../../../public/assets/courseCard/devopes.png";
import java from "../../../../public/assets/courseCard/java.png";
import pyton from "../../../../public/assets/courseCard/pyton.png";
import devops from "../../../../public/assets/courseCard/devops.png";

const CourseCard = ({ slug, title, image, lessons, students, level, rating }) => {
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image src={image} width={340} height={240} className={styles.course_image} />
        </div>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.stats_contianer}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lessons: {lessons}
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Students: {students}
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Level: {level}
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating} />
        </div>
      </div>
    </>
  );
};

const CourseCards = () => {
  const courses = [
    {
      slug: "ai",
      title: "AI",
      image: ai,
      lessons: 150,
      mentors : 2,
      level: "Intermediate to advance level",
      rating: rating4,
    },
    {
      slug: "ml",
      title: "Machine Learning",
      image: ml,
      lessons: 120,
      projects: "4 mini,4 major",
      level: "Basic to Advanced",
      rating: rating4,
    },
    {
      slug: "data-science",
      title: "Data Science",
      image: dataScience,
      lessons: 110,
      projects: "3 mini,4 major",
      level: "Intermediate to advance level",
      rating: rating4,
    },
    {
      slug: "cyber-security",
      title: "Cyber Security",
      image: cyberSecurity,
      lessons: 130,
      projects: "4 mini,4majot",
      level: "Intermediate to advance level",
      rating: rating4,
    },
    {
      slug: "aws",
      title: "AWS",
      image: aws,
      lessons: 160,
      projects: "2 mini,4 major",
      level: "Beginner to advance level",
      rating: rating4,
    },
    {
      slug: "web-development",
      title: "Web Development",
      image: webDevelopment,
      lessons: 120,
      projects: "3 mini, 2 major",
      level: "Basic to Advance level",
      rating: rating4,
    },
    {
      slug: "orecle",
      title: "Oracle",
      image: orecle,
      lessons: 180,
      projects: "2 mini,2 major",
      level: "Intermediate to advance level",
      rating: rating4,
    },
    {
      slug: "sap",
      title: "SAP",
      image: sap,
      lessons: 110,
      projects: "3 mini,4 major",
      level: "Intermediate to advance level ",
      rating: rating4,
    },
    {
      slug: "tally",
      title: "Tally",
      image: tally,
      lessons: 160,
      projects: "2 mini,3 major",
      level: "Basic to advance level",
      rating: rating4,
    },
    {
      slug: "auto-cad",
      title: "AutoCAD",
      image: autoCad,
      lessons: 8,
      projects:"2 mini,2 major ",
      level: "Intermediate to advance level",
      rating: rating4,
    },
    {
      slug: "catia",
      title: "CATIA",
      image: catia,
      lessons: 10,
      students: 180,
      level: "Intermediate",
      rating: rating4,
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      image: digitalMarketing,
      lessons: 120,
      projects: "3 major",
      level: "Basics to Advanced",
      rating: rating4,
    },
    {
      slug: "iot",
      title: "IoT",
      image: iot,
      lessons: 8,
      students: 200,
      level: "Intermediate",
      rating: rating4,
    },
    {
      slug: "robotics",
      title: "Robotics",
      image: robotics,
      lessons: 108,
      projects: '2 mini,4 major',
      level: "Intermediate to Advance level ",
      rating: rating4,
    },
    {
      slug: "power-bi",
      title: "Power BI",
      image: powerBi,
      lessons: 160,
      Projects: "2 mini,2 major",
      level: "Basic to advance level",
      rating: rating4,
    },
    {
      slug: "api-testing",
      title: "API Testing",
      image: apiTesting,
      lessons: 180,
      projects: "2 mini,2 major",
      level: "Basic to Advance level",
      rating: rating4,
    },
    {
      slug: "devopes",
      title: "DevOps",
      image: devopes,
      projects: "2 mini ,2 major ",
      lessons: 180,
      level: "Basic to advance level",
      rating: rating4,
    },
    {
      slug: "java",
      title: "Java",
      image: java,
      lessons: 120,
      projects: "2 mini,3 major",
      level: "Basic to Advanced",
      rating: rating4,
    },
    {
      slug: "python",
      title: "Python",
      image: pyton,
      lessons: 180,
      projects: "2 mini,2 major",
      level: "Intermediate to advance level",
      rating: rating4,
    },
    {
      slug: "devops",
      title: "DevOps",
      image: devops,
      lessons: 120,
      projects: "1 mini,3 major",
      level: "Intermediate to advance level ",
      rating: rating4,
    },
  ];

  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.slug}
          slug={course.slug}
          title={course.title}
          image={course.image}
          lessons={course.lessons}
          students={course.students}
          level={course.level}
          rating={course.rating}
        />
      ))}
    </>
  );
};

export default CourseCards;