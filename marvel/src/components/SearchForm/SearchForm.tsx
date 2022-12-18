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
  return (
    <div>
      <Formik
        initialValues={{
          nameStartsWith: ''
        }}
        onSubmit={({ nameStartsWith }) => {
          if (!nameStartsWith) {
            postsStore.getPostsList(page);
            return;
          }
          if (page === 'characters') {
            postsStore.getPostsByNameStartsWith(page, nameStartsWith, 0);
          } else {
            postsStore.getPostsByTitleStartsWith(page, nameStartsWith, 0);
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
