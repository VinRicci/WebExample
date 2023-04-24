// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(`Bienvenido ${data.email}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <p>Email</p>
          <input type="text" {...register('email', { required: true })} />
        </div>
        <div className="form-control">
          <p>Password</p>
          <input
            type="password"
            {...register('password', { required: true, minLength: 8 })}
          />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
