import { FC } from 'react';
import {
  Formik,
  Field,
  Form,
  ErrorMessage as FormikErrorMessage
} from 'formik';
import * as Yup from 'yup';

import './Searchform.modules.scss';
import postsStore from 'stores/PostsStore';

interface SearchFormProps {
  page: string;
}

const SearchForm: FC<SearchFormProps> = ({ page }) => {
  const { getPostsByNameStartsWith, getPostsByTitleStartsWith } = postsStore;
  return (
    <div className="search-form">
      <Formik
        initialValues={{
          nameStartsWith: ''
        }}
        validationSchema={Yup.object({
          nameStartsWith: Yup.string().required('Обязательное поле')
        })}
        onSubmit={({ nameStartsWith }) => {
          if (page === 'characters') {
            getPostsByNameStartsWith(page, nameStartsWith, 0);
          } else {
            getPostsByTitleStartsWith(page, nameStartsWith, 0);
          }
        }}
      >
        <Form className="search-form">
          <Field type="text" name="nameStartsWith" placeholder="Enter title" />
          <button className="search-form__button" type="submit">
            Search
          </button>
          <FormikErrorMessage className="error" name="text" component="div" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
