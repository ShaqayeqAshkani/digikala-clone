import Layout from "../components/layout/Layout";
import QuestionBanner from "../components/AskQuestion/QuestionBanner";
import QuestionCategories from "../components/AskQuestion/QuestionCategories";
import FaqAccordion from "../components/AskQuestion/FaqAccordion";

import icons from "../data/icons"; // اینجا فقط از data بگیر

const AskQuestion = () => {
  return (
    <Layout>
      <QuestionBanner />
      <QuestionCategories icons={icons} />
      <FaqAccordion />
    </Layout>
  );
};

export default AskQuestion;
