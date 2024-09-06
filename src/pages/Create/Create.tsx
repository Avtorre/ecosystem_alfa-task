import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import classes from "./Create.module.css";
import { addProduct } from "../../store/productsStrore/productsReducer";
import { number, object, string } from "yup";

const Create = () => {
  const dispatch = useDispatch();
  const schema = object().shape({
    title: string().required().length(2),
    price: number().required().positive(),
    category: string().required().length(2),
    description: string().required().length(2),
    image: string().required().length(2),
    rating: object().shape({
      rate: number().required().positive(),
      count: number().required().positive(),
    }),
  });
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values, actions) => {
          dispatch(addProduct(values));
        }}
        initialValues={{
          id: 0,
          title: "",
          description: "",
          price: 0,
          category: "",
          image: "",
          rating: {
            rate: 0,
            count: 0,
          },
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className={classes.create_form}
          >
            <Form.Group controlId="validationFormik01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={values.title}
                onChange={handleChange}
                isValid={touched.title && !errors.title}
                isInvalid={!!errors.title}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                isValid={touched.price && !errors.price}
                isInvalid={!!errors.price}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik03">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                value={values.category}
                onChange={handleChange}
                isValid={touched.category && !errors.category}
                isInvalid={!!errors.category}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik04">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={!!errors.description}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik05">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                value={values.image}
                onChange={handleChange}
                isValid={touched.image && !errors.image}
                isInvalid={!!errors.image}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik06">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                name="rating.rate"
                value={values.rating.rate}
                onChange={handleChange}
                type="number"
                isValid={touched.rating?.rate && !errors.rating?.rate}
                isInvalid={!!errors.rating?.rate}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik06">
              <Form.Label>Count</Form.Label>
              <Form.Control
                name="rating.count"
                value={values.rating.count}
                onChange={handleChange}
                type="number"
                isValid={touched.rating?.count && !errors.rating?.count}
                isInvalid={!!errors.rating?.count}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="success"
              size="lg"
              className={`${classes.btn__submit}`}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Create;
