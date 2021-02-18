import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { BiArrowBack } from 'react-icons/bi';
import { editGradient } from '../redux/ducks/gradientDucks';
import { StyledNew } from '../styles/pages/StyledNew';

const Edit = props => {
  const history = useHistory();
  const gradients = useSelector(({ gradient }) => gradient.gradients);
  const dispatch = useDispatch();

  const gradientsFilter = gradients.filter(gradient => {
    return gradient.id === props.match.params.id;
  });

  const initialValues = {
    id: gradientsFilter[0].id,
    firstColor: gradientsFilter[0].firstColor,
    secondColor: gradientsFilter[0].secondColor
  };

  const validate = values => {
    const errors = {};
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(values.firstColor)) {
      errors.text = 'Invalid first color';
    } else if (!/^#([0-9A-F]{3}){1,2}$/i.test(values.secondColor)) {
      errors.text = 'Invalid second color';
    }

    return errors;
  };

  const onSubmit = values => {
    dispatch(editGradient(values));
    history.push('/');
  };

  const onComeBack = () => {
    history.push('/');
  };

  return (
    <StyledNew>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => {
          return (
            <Form>
              <div className='input__wrapper'>
                <label>
                  <span>First color</span>
                  <Field type='text' name='firstColor' required />
                </label>
                <label>
                  <span>Second color</span>
                  <Field type='text' name='secondColor' required />
                </label>
              </div>
              {errors.text ? <div className='error'>{errors.text}</div> : null}
              <button
                className={`btn ${errors.text ? 'btn-disable' : ''}`}
                type='submit'
                disabled={isSubmitting}
              >
                Edit
              </button>
            </Form>
          );
        }}
      </Formik>
      <BiArrowBack className='back' onClick={onComeBack} />
    </StyledNew>
  );
};

export default Edit;
