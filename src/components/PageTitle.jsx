import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Bes Parmakh 
      </title>
    </Helmet>
  );
};

export default PageTitle;
