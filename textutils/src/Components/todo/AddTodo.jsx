import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddtodoApi } from './APIcomponent';
export default function Addtodopage()
{
   // const [description, setDescription] = useState('');
 //   const [localdate, setLocaldate] = useState(''); 
const navigate= useNavigate()
    function onSubmit(values) {
        console.log("Form Values:", values);
        const todo={
            username:"Ramachandra",
            description:values.description,
            localdate:values.localdate,
            done:true
      
          }
          AddtodoApi('Ramachandra',todo)
          .then(responce=>{
            console.log(todo)
            navigate('/todos')
          })
    
      }
return  (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik
          initialValues={{ localdate:"" ,description:""}} // ✅ Corrected name
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
      <div></div> {/* ✅ Typo fixed here too */}
    </div>
  );
}