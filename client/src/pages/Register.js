import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Form,Input,Button} from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish =async(values)=>{
    try{
      dispatch(showLoading());
      const response = await axios.post('/api/user/register',values);
      dispatch(hideLoading());
      if(response.data.success){
        toast.success(response.data.message);
        toast("Redirecting to login page");
        navigate("/login");
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      dispatch(hideLoading());
      if (error.response && error.response.status === 409) {
        toast.error(error.response.data.message); // Show "User already exists" message
      } else {
        toast.error('Something went wrong');
      }
    }               
  };
  return (
    <div className='authentication'>
      <div className="authentication-form card p-3">
       <h1 className='card-title'>Nice to Meet U</h1>
       <Form layout='vertical' onFinish={onFinish} >
         <Form.Item label='Name' name='name'>
          <Input placeholder = 'Name'/>
         </Form.Item>
         <Form.Item label='Email' name='email'>
          <Input placeholder = 'Email'/>
         </Form.Item>
         <Form.Item label='Password' name='password'>
          <Input placeholder = 'Enter password' type='password'/>
         </Form.Item>

         <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
         <Link to='/login' className='anchor'>CLICK HERE TO LOGIN</Link>
       </Form>
      </div>
      
    </div>
  )
}

