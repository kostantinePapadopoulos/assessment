import Input from "../formComponents/input/Input";
import styles from "./AddProductContainer.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// isbn: string;
// title: string;
// subtitle: string;
// author: string;
// published: string; // ISO date string format
// publisher: string;
// pages: number;
// description: string;
// website: string;

const schema = yup.object({
  title: yup.string().required("Title is required"),
  // .min(10, "Title must be at least 10 characters")
  // .max(120, "Title must be at most 120 characters")
  // .matches(
  //   /^[a-zA-Z0-9@”#&*! ]*$/,
  //   "Title can only contain letters, numbers, and @ ” # & * !"
  // )

  // description: yup
  //   .string()
  // .max(512, "Description must be at most 512 characters")
  // .matches(
  //   /^[A-Z][a-zA-Z0-9@”#&*! ]*$/,
  //   "Description must start with an uppercase letter and can only contain letters, numbers, and @ ” # & * !"
  // )
  // .required("Description is required"),
});

const AddProductContainer = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSave = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <div className={styles.container}>
        <Input name="title" label="Title" register={register} errors={errors} />
        {/* <Input
          name="description"
          label="Description"
          register={register}
          errors={errors}
        /> */}
      </div>
      <input type="button" value="submit" onClick={handleSubmit(onSave)} />
    </div>
  );
};
export default AddProductContainer;
