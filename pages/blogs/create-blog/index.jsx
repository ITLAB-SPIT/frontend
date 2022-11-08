import dynamic from "next/dynamic";
import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";

const CreateBlog = () => {
  const JoditEditor = dynamic(
    () => import("../../../src/components/Editor/Editor"),
    {
      ssr: false,
    }
  );

  return <JoditEditor />;
};

export default CreateBlog;
