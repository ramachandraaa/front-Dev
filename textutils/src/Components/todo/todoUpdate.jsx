import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UpdateTodoApi } from './APIcomponent';
import { UpdateApi } from './APIcomponent';

export default function UpdatePage() {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [localdate, setLocaldate] = useState(''); // ✅ Corrected variable name

  useEffect(() => {
    retrieveTodo();
  }, [id]);
const navigate=useNavigate()
  function retrieveTodo() {
    UpdateTodoApi('Ramachadra', id)
      .then((response) => {
        console.log(response);
        setDescription(response.data.description);
        setLocaldate(response.data.localdate); // ✅ Corrected variable name
      })
      .catch((error) => console.log(error));
  }

  function onSubmit(values) {
    console.log("Form Values:", values);
    const todo={
      id:id,
      username:"Ramachandra",
      description:values.description,
      localdate:values.localdate,
      done:true

    }
    console.log(todo)
    UpdateApi('Ramachandra',id,todo)
    .then(responce=>{
      console.log(responce)
      navigate('/todos')

    })
    .catch(error=>console.log(error))

  }

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik
          initialValues={{ description, localdate }} // ✅ Corrected name
          enableReinitialize={true}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <fieldset className="form-group">
                <label>Description</label>
                <Field type="text" className="form-control" name="description" />
              </fieldset>
              <fieldset className="form-group">
                <label>Date</label>
                <Field type="date" className="form-control" name="localdate" /> {/* ✅ Matches state */}
              </fieldset>
              <button className="btn btn-success" type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </div>
      <div>localdate: {localdate}</div> {/* ✅ Typo fixed here too */}
    </div>
  );
}
