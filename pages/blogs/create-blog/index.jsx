import dynamic from "next/dynamic";

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
