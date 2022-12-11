import { FC } from 'react';
import {
  Formik,
  Field,
  Form,
  ErrorMessage as FormikErrorMessage
} from 'formik';

import postsStore from 'stores/PostsStore';
import classes from './SearchForm.module.scss';

interface SearchFormProps {
  page: string;
}

const SearchForm: FC<SearchFormProps> = ({ page }) => {
  const { getPostsByNameStartsWith, getPostsByTitleStartsWith, getPostsList } =
    postsStore;
  return (
    <div>
      <Formik
        initialValues={{
          nameStartsWith: ''
        }}
        onSubmit={({ nameStartsWith }) => {
          if (!nameStartsWith) {
            getPostsList(page);
            return;
          }
          if (page === 'characters') {
            getPostsByNameStartsWith(page, nameStartsWith, 0);
          } else {
            getPostsByTitleStartsWith(page, nameStartsWith, 0);
          }
        }}
      >
        <Form className={classes.Form}>
          <Field type="text" name="nameStartsWith" placeholder="Enter title" />
          <button className={classes.Button} type="submit">
            Search
          </button>
          <FormikErrorMessage className="error" name="text" component="div" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
