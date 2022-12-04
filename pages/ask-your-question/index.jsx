import dynamic from "next/dynamic";

const CreateBlog = () => {
  const JoditEditor = dynamic(
    () => import("./../../src/components/QEditor/Editor"),
    {
      ssr: false,
    }
  );

  return <JoditEditor />;
};

export default CreateBlog;
