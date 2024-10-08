import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ProductsContext } from "../../utils/contexts/products/ProductsContext";
import Input from "../formComponents/input/Input";
import Textarea from "../formComponents/textarea/Textarea";
import AutoCompleteMultiMui from "../formComponents/autoCompleteMultiMui/AutoCompleteMultiMui";
import DatePickerMui from "../formComponents/datePickerMui/DatePickerMui";
import Button from "../formComponents/button/Button";
import ModalLayout from "../layout/modal/ModalLayout";
import ModalSuccessContent from "./modalContents/ModalSuccessContent";
import ModalFailContent from "./modalContents/ModalFailContent";
import { bookAuthors, bookCategories } from "../../utils/initialDataProducts";
import { Book } from "../../interfaces/interfaces";
import styles from "./AddProductContainer.module.css";

const schema = yup.object({
  title: yup
    .string()
    .min(10, "Title must be at least 10 characters")
    .max(120, "Title must be at most 120 characters")
    .matches(
      /^[a-zA-Z0-9@”#&*! ]*$/,
      "Title can only contain letters, numbers, and @ ” # & * !"
    )
    .required("Title is required"),
  isbn: yup
    .string()
    .matches(/^\d{10}$|^\d{13}$/, "ISBN must be a 10 or 13 digit number")
    .required("ISBN is required"),
  description: yup
    .string()
    .max(512, "Description must be at most 512 characters")
    .matches(
      /^[A-Z][a-zA-Z0-9@”#&*! ]*$/,
      "Description must start with an uppercase letter and can only contain letters, numbers, and @ ” # & * !"
    )
    .required("Description is required"),
  category: yup
    .array()
    .of(yup.string().required("Category is required"))
    .test({
      message: "You have to add at least one category",
      test: (arr: any) => arr.length !== 0,
    }),
  author: yup
    .array()
    .of(yup.string().required("Author is required"))
    .test({
      message: "You have to add at least one authors, and maximum 3 authors",
      test: (arr: any) => arr.length !== 0 && arr.length <= 3,
    }),
  publisher: yup
    .string()
    .min(5, "Publisher minimum letters is 5")
    .max(60, "Publisher maximum letters is 60")
    .required("Publisher is required"),

  subtitle: yup.string(),
  website: yup
    .string()
    .nullable()
    .notRequired()
    .test(
      "is-url-valid",
      "Website must be a valid URL or it can be empty as it is not required",
      (value) => {
        return !value || yup.string().url().isValidSync(value);
      }
    ),
  year: yup
    .number()
    .typeError("Year must be a valid number")
    .required("Year is required")
    .positive("Year must be a positive number")
    .max(
      new Date().getFullYear(),
      `Year cannot be in the future (current year is ${new Date().getFullYear()})`
    ),
  pages: yup
    .number()
    .typeError("Pages must be a valid number")
    .min(1, "Pages minimum is 1")
    .max(9999, "Pages maximum is 9999")
    .required("Pages are required"),

  published: yup
    .date()
    .typeError("Published must be a valid date")
    .nullable()
    .required("Published is required"),
});

const AddProductContainer = () => {
  const [modalContentsOpen, setModalContentsOpen] = useState<
    null | "fail" | "success"
  >(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      subtitle: "",
      isbn: "",
      description: "",
      year: 0,
      published: undefined,
      pages: 0,
      publisher: "",
      website: "",
      category: [],
      author: [],
    },
  });

  const context = useContext(ProductsContext);

  if (!context) {
    return <div>Error: useContext must be used within a ProductsProvider</div>;
  }

  const { products, addProduct } = context;
  const onSave = (data: any) => {
    const sameBookExists = products.find(
      (product: Book) =>
        product.isbn === data.isbn || product.title === data.title
    );
    if (sameBookExists) {
      setModalContentsOpen("fail");
    } else {
      addProduct && addProduct(data);
      setModalContentsOpen("success");
      reset();
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1Cells}>
        <Input
          name="title"
          label="Title"
          required
          register={register}
          errors={errors}
        />
        <Input
          name="subtitle"
          label="Subtitle"
          register={register}
          errors={errors}
        />
        <Input
          name="isbn"
          label="ISBN"
          required
          register={register}
          errors={errors}
        />
        <Textarea
          name="description"
          label="Description"
          required
          register={register}
          errors={errors}
        />
      </div>
      <div className={styles.container2Cells}>
        <AutoCompleteMultiMui
          control={control}
          name="category"
          label="Category"
          errors={errors}
          required
          options={bookCategories}
        />
        <AutoCompleteMultiMui
          control={control}
          name="author"
          label="Author"
          register={register}
          errors={errors}
          required
          options={bookAuthors}
        />
        <Input
          name="publisher"
          label="Publisher"
          required
          register={register}
          errors={errors}
        />
        <Input
          name="website"
          label="Website"
          register={register}
          errors={errors}
        />
        <Input
          name="year"
          label="Year"
          required
          register={register}
          errors={errors}
        />
        <DatePickerMui
          name="published"
          label="Published"
          required
          control={control}
          errors={errors}
        />
        <Input
          name="pages"
          label="Pages"
          required
          register={register}
          errors={errors}
        />
      </div>
      <div className={styles.container2Cells}>
        <Button label="Reset" onClick={() => reset()} />
        <Button label="Save" onClick={handleSubmit(onSave)} />
      </div>

      {modalContentsOpen && (
        <ModalLayout
          contents={
            modalContentsOpen === "success" ? (
              <ModalSuccessContent onClose={() => setModalContentsOpen(null)} />
            ) : modalContentsOpen === "fail" ? (
              <ModalFailContent onClose={() => setModalContentsOpen(null)} />
            ) : null
          }
          open={modalContentsOpen ? true : false}
          onClose={() => setModalContentsOpen(null)}
        />
      )}
    </div>
  );
};
export default AddProductContainer;
